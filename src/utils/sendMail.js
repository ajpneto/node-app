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
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const ejs_1 = __importDefault(require("ejs"));
const env_config_1 = require("../config/env.config");
const sendMail = (options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transporter = nodemailer_1.default.createTransport({
            host: (0, env_config_1.validateEnv)().smtp.host,
            port: (0, env_config_1.validateEnv)().smtp.port,
            service: (0, env_config_1.validateEnv)().smtp.service,
            secure: true,
            auth: {
                user: (0, env_config_1.validateEnv)().smtp.mail,
                pass: (0, env_config_1.validateEnv)().smtp.password,
            },
        });
        // Verify the connection to the SMTP server
        yield transporter.verify();
        const { email, subject, template, data } = options;
        const paths = `./src/mails/${template}`;
        console.log({ paths });
        // Render the EJS template
        const html = yield ejs_1.default.renderFile(paths, data);
        const mailOption = {
            from: (0, env_config_1.validateEnv)().smtp.mail,
            to: email,
            subject,
            html,
        };
        // Send the email
        const info = yield transporter.sendMail(mailOption);
        console.log("Email sent: " + info.response);
    }
    catch (error) {
        console.error("Error sending email:", error.message);
    }
});
exports.sendMail = sendMail;
//# sourceMappingURL=sendMail.js.map