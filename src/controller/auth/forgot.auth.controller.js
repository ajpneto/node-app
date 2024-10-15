"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPassword = void 0;
const notFound_errors_1 = __importDefault(require("../../errors/notFound.errors"));
const badRequest_errors_1 = __importDefault(require("../../errors/badRequest.errors"));
const util_1 = require("../../utils/util");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_services_1 = require("../../services/user.services");
const event_emitter_1 = require("../../config/event-emitter");
const custom_errors_1 = require("../../errors/custom.errors");
//@desc forgot password for customer
//@method POST /customer-auth/forgetPassword
//@access public
exports.forgotPassword = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { email } = req.body;
    // Find user by email
    const user = yield (0, user_services_1.findUserByEmail)(email);
    if (!user) {
        throw new notFound_errors_1.default("User not found", custom_errors_1.ErrorCode.NOT_FOUND);
    }
    // Check if the user is active
    if (!user.isActive) {
        throw new badRequest_errors_1.default("Please verify your email first", custom_errors_1.ErrorCode.BAD_REQUEST);
    }
    // Generate password reset code
    const code = (0, util_1.generateRandom6DigitString)();
    const verificationExpires = parseInt((_a = process.env.VERIFICATION_CODE_EXP) !== null && _a !== void 0 ? _a : "30") * 1000 * 60;
    // Update user's password reset code and expiration
    user.passwordResetCode = code;
    user.OTPCodeExpires = Date.now() + verificationExpires;
    yield user.save();
    // Emit event for sending password reset email or SMS
    const link = `https://localhost:3000/auth/reset?passwordResetCode=${code}&email=${email}`;
    event_emitter_1.EventEmitterInstance.emit('forgot', { code, name: user.name, email: user.email, link });
    res.status(201).json({ message: "If a user with that email is registered, you will receive a password reset email or OTP code via SMS", email, success: true });
}));
//# sourceMappingURL=forgot.auth.controller.js.map