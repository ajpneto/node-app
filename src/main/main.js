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
const utils_1 = require("../utils/utils");
const books_1 = require("../services/books");
const fs_1 = __importDefault(require("fs"));
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //    const items = await items_by_category('https://aen.pythonanywhere.com/reports');
    //    res.send(items);
    //    res.render('main/home', toArray(items));
    const data = (0, books_1.getBooks)();
    const category = 'division';
    const cats = (0, utils_1.toCategory)(data, category);
    res.render('main/magazine', (0, utils_1.toArray)(cats));
}));
router.get('/book/:key?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book_key = req.params.key;
    const books = (0, books_1.getBooks)();
    const book = books.items.filter((book) => book.key === book_key);
    res.render('main/book', book[0]);
}));
router.get('/about', (req, res) => {
    res.render('main/about');
});
router.get('/contact', (req, res) => {
    res.render('main/contact');
});
router.get('/ch5m3d', (req, res) => {
    res.render('main/ch5m3d');
});
router.get('/material', (req, res) => {
    //fs.writeFileSync('public/test/notes.txt', JSON.stringify(result));
    const data = fs_1.default.readFileSync('./src/main/tmp.txt', { encoding: 'utf8', flag: 'r' });
    console.log(JSON.stringify(data));
    res.send(data);
});
exports.default = router;
//# sourceMappingURL=main.js.map
