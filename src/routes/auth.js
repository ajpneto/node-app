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
const token_model_1 = __importDefault(require("../model/token.model"));
const router = express_1.default.Router();
router.get('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('auth/register', {
        message: 'User already registered.',
        messageClass: 'alert-danger'
    });
}));
router.get('/activate', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('auth/activate', {
        message: 'User already registered.',
        messageClass: 'alert-danger'
    });
}));
router.get('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('auth/login', {
        message: 'User already registered.',
        messageClass: 'alert-danger'
    });
}));
router.get('/logout', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const Jwt = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.access_token;
    // Clear the token from the token model
    yield token_model_1.default.deleteOne({ token: Jwt });
    // Redirect user to the home page
    res.clearCookie("access_token").redirect('/');
}));
exports.default = router;
//# sourceMappingURL=auth.js.map