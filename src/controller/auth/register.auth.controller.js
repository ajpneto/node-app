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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const util_1 = require("../../utils/util");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_services_1 = require("../../services/user.services");
const role_services_1 = require("../../services/role.services");
//@desc signup
//@method POST  /auth/signup
//@access public
exports.registerUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { email, password, name, phoneNumber } = req.body;
    // Check if user already exists
    const userExists = yield (0, user_services_1.findUserByEmail)(email);
    if (userExists) {
        //throw new BadRequestError('User with this email already exists', ErrorCode.BAD_REQUEST);
        return res.status(400).render('auth/register', { message: 'User with this email already exists', success: false,
            messageClass: 'alert-danger' });
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
    //    EventEmitterInstance.emit('signup', { code, name, email });
    res.status(201).render('auth/activate', { message: 'Activatate your account to continue', success: true,
        messageClass: 'alert-warning' });
}));
//# sourceMappingURL=register.auth.controller.js.map