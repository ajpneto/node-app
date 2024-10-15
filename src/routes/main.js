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
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const authJWT_middleware_1 = require("../middleware/authJWT.middleware");
const nodemailer_1 = __importDefault(require("nodemailer"));
const ejs_1 = __importDefault(require("ejs"));
const env_config_1 = require("../config/env.config");
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('main/home');
}));
router.get('/about', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('main/about');
}));
router.get('/mission', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('main/mission');
}));
router.get('/contact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('main/contact');
}));
router.get('/faq', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('main/faq');
}));
router.get('/test', authJWT_middleware_1.AuthJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('main/test');
}));
router.get('/create', authJWT_middleware_1.AuthJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //fs.writeFileSync('public/test/notes.txt', JSON.stringify(result));
    const data = fs_1.default.readFileSync('./src/routes/tmp.txt', { encoding: 'utf8', flag: 'r' });
    console.log(JSON.stringify(data));
    res.send(data);
}));
router.post('/send-email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const { email } = req.body;
        const subject = "Newsletter!";
        // Render email template
        const html = yield ejs_1.default.renderFile('./src/mails/newsletter.ejs', { user: email });
        const mailOption = {
            from: (0, env_config_1.validateEnv)().smtp.mail,
            to: email,
            subject,
            html,
        };
        // Send the email
        const info = yield transporter.sendMail(mailOption, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).send('Error sending email');
            }
            else {
                console.log('Email sent:', info.response);
                res.redirect('/contact');
            }
        });
    }
    catch (error) {
        console.error("Error sending email:", error.message);
        res.status(500).send('Internal Server Error');
    }
}));
exports.default = router;
//# sourceMappingURL=main.js.map