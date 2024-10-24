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
exports.login = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("../../utils/jwt");
const user_services_1 = require("../../services/user.services");
const token_model_1 = __importDefault(require("../../model/token.model"));
const env_config_1 = require("../../config/env.config");
//@desc  Login customer
//@method POST  /customer-auth/login
//@access public
exports.login = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { password, email } = req.body;
    // Find user by email
    const user = yield (0, user_services_1.findUser)({ email }, { select: "+password", lean: true });
    if (!user) { //throw new ForbiddenError('User does not exist', ErrorCode.FORBIDDEN);
        return res.status(401).render('auth/login', { message: 'User does not exist', success: false,
            messageClass: 'alert-danger' });
    }
    if (!user.isActive) { //throw new BadRequestError('Please verify your email first', ErrorCode.BAD_REQUEST);
        return res.status(403).render('auth/login', { message: 'Please verify your email first', success: false,
            messageClass: 'alert-danger' });
    }
    // Determine user's role (you may have different logic here)
    const role = user.role; // Assuming role is stored in the user object
    // Define a function to get the secret key based on the role
    const secretKey = (_a = (0, env_config_1.validateEnv)()) === null || _a === void 0 ? void 0 : _a.jwtconfig.accessSecret;
    // Compare password
    const match = yield bcryptjs_1.default.compare(password, user.password);
    if (!match) { //throw new ForbiddenError("Invalid credentials", ErrorCode.FORBIDDEN);
        return res.status(403).render('auth/login', { message: 'Invalid credentials', success: false,
            messageClass: 'alert-danger' });
    }
    // Generate and store access token
    const accessToken = (0, jwt_1.signJwt)({ userId: user._id }, secretKey, { expiresIn: "3d" });
    yield token_model_1.default.create({ token: accessToken, userId: user._id, expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) });
    // Remove sensitive data from user object
    delete user.password;
    // Send response with user data and access token
    res.cookie("access_token", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    }).status(200).redirect('/');
}));
//# sourceMappingURL=login.controller.js.map