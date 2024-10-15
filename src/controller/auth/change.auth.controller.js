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
exports.changePassword = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const notFound_errors_1 = __importDefault(require("../../errors/notFound.errors"));
const badRequest_errors_1 = __importDefault(require("../../errors/badRequest.errors"));
const user_services_1 = require("../../services/user.services");
const custom_errors_1 = require("../../errors/custom.errors");
//@desc Change password of logged-in customer
//@method PATCH /cutomer-auth/changePassword
//@access protected
exports.changePassword = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { oldPassword, newPassword } = req.body;
    const userId = req === null || req === void 0 ? void 0 : req.userData.userId;
    // Find user by ID
    const user = yield (0, user_services_1.findUser)({ _id: userId }, { select: "+password" });
    if (!user) {
        throw new notFound_errors_1.default("User not found", custom_errors_1.ErrorCode.NOT_FOUND);
    }
    // Check if the old password matches
    const isMatch = yield bcryptjs_1.default.compare(oldPassword, user.password);
    if (!isMatch) {
        throw new badRequest_errors_1.default("Incorrect password", custom_errors_1.ErrorCode.BAD_REQUEST);
    }
    // Generate a new hashed password
    const salt = yield bcryptjs_1.default.genSalt(10);
    const hashPassword = yield bcryptjs_1.default.hash(newPassword, salt);
    user.password = hashPassword;
    // Save the updated password
    yield user.save();
    res.status(200).json({ message: "Password changed successfully", success: true });
}));
//# sourceMappingURL=change.auth.controller.js.map