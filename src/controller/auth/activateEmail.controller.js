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
exports.activateUser = void 0;
const badRequest_errors_1 = __importDefault(require("../../errors/badRequest.errors"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_services_1 = require("../../services/user.services");
const profile_services_1 = require("../../services/profile.services");
const custom_errors_1 = require("../../errors/custom.errors");
//@desc  Activate email for customer
//@method POST  /customer-auth/activate
//@access public
exports.activateUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { OTPCode, email } = req.body;
    // Find user by email
    const user = yield (0, user_services_1.findUser)({ email }, { select: "+password +OTPCode +OTPCodeExpires" });
    if (!user)
        throw new badRequest_errors_1.default('User does not exist', custom_errors_1.ErrorCode.BAD_REQUEST);
    if (user.isActive)
        throw new badRequest_errors_1.default('User has already been verified', custom_errors_1.ErrorCode.BAD_REQUEST);
    // Validate OTP code
    if (user.OTPCode !== OTPCode || user.OTPCodeExpires < Date.now()) {
        throw new badRequest_errors_1.default('Invalid or expired OTP code', custom_errors_1.ErrorCode.BAD_REQUEST);
    }
    // Update user as active and clear OTP code
    user.OTPCode = "";
    user.OTPCodeExpires = 0;
    user.isActive = true;
    const userId = user._id;
    // Create profile for the user
    yield (0, profile_services_1.createProfile)(userId);
    // Save updated user
    yield user.save();
    res.status(201).json({ message: 'Verified successfully', success: true });
}));
//# sourceMappingURL=activateEmail.controller.js.map