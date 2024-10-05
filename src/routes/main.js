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
router.get('/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('main/test');
}));
router.get('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //fs.writeFileSync('public/test/notes.txt', JSON.stringify(result));
    const data = fs_1.default.readFileSync('./src/routes/tmp.txt', { encoding: 'utf8', flag: 'r' });
    console.log(JSON.stringify(data));
    res.send(data);
}));
exports.default = router;
//# sourceMappingURL=main.js.map