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
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgetPasswordSubscriber = exports.signUpSubscriber = void 0;
const sendMail_1 = require("../utils/sendMail");
const signUpSubscriber = (data) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, sendMail_1.sendMail)({
        email: data === null || data === void 0 ? void 0 : data.email,
        subject: "Email verification",
        template: "emailVerification.mails.ejs",
        data: {
            user: data.name,
            code: data === null || data === void 0 ? void 0 : data.code,
        },
    });
});
exports.signUpSubscriber = signUpSubscriber;
const forgetPasswordSubscriber = (data) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, sendMail_1.sendMail)({
        email: data === null || data === void 0 ? void 0 : data.email,
        subject: "Password reset code",
        template: "passwordReset.mails.ejs",
        data: {
            user: data.name,
            code: data.code,
            link: data.link,
        },
    });
});
exports.forgetPasswordSubscriber = forgetPasswordSubscriber;
//# sourceMappingURL=auth.subscriber.js.map