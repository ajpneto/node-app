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
exports.registerUser = void 0;
const badRequest_errors_1 = __importDefault(require("../../errors/badRequest.errors"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const util_1 = require("../../utils/util");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_services_1 = require("../../services/user.services");
const custom_errors_1 = require("../../errors/custom.errors");
const role_services_1 = require("../../services/role.services");
const event_emitter_1 = require("../../config/event-emitter");
//@desc signup
//@method POST  /auth/signup
//@access public
exports.registerUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { email, password, name, phoneNumber } = req.body;
    // Check if user already exists
    const userExists = yield (0, user_services_1.findUserByEmail)(email);
    if (userExists) {
        throw new badRequest_errors_1.default('User with this email already exists', custom_errors_1.ErrorCode.BAD_REQUEST);
    }
    const roles = yield (0, role_services_1.getAllRole)();
    const role = roles.find(r => r.name === "SUPER_ADMIN");
    // Hash the password
    const salt = yield bcryptjs_1.default.genSalt(10);
    const hashPassword = yield bcryptjs_1.default.hash(password, salt);
    // Generate OTP code
    const code = (0, util_1.generateRandom6DigitString)();
    const verificationExpires = parseInt((_a = process.env.VERIFICATION_CODE_EXP) !== null && _a !== void 0 ? _a : "30", 10) * 1000 * 60;
    console.log(verificationExpires);
    // Create the user
    yield (0, user_services_1.createUser)(Object.assign(Object.assign({}, req.body), { role: role, password: hashPassword, OTPCode: code, OTPCodeExpires: Date.now() + verificationExpires }));
    event_emitter_1.EventEmitterInstance.emit('signup', { code, name, email });
    res.status(201).json({ success: true, message: 'Verification email sent', messageClass: 'alert-success' });
}));
//# sourceMappingURL=register.auth.controller.js.map