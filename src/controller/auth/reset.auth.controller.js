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
exports.resetPasswordHandler = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const badRequest_errors_1 = __importDefault(require("../../errors/badRequest.errors"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_services_1 = require("../../services/user.services");
const custom_errors_1 = require("../../errors/custom.errors");
//@desc reset password
//@method POST /customer-auth/resetPassword
//@access public
exports.resetPasswordHandler = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, passwordResetCode, password } = req.body;
    console.log("req.body: ", passwordResetCode);
    console.log("req.body: ", email);
    // Find user by email
    const user = yield (0, user_services_1.findUserByEmail)(email);
    if (!user || !user.passwordResetCode || user.passwordResetCode !== passwordResetCode || user.OTPCodeExpires < Date.now()) {
        throw new badRequest_errors_1.default('Could not reset user password', custom_errors_1.ErrorCode.BAD_REQUEST);
    }
    // Generate hashed password
    const salt = yield bcryptjs_1.default.genSalt(10);
    const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
    // Update user's password and clear password reset code
    user.password = hashedPassword;
    user.passwordResetCode = null;
    yield user.save();
    res.status(200).json({ message: 'Password updated successfully', success: true });
}));
//# sourceMappingURL=reset.auth.controller.js.map