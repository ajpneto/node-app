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
const router = express_1.default.Router();
const item = (0, books_1.getBook)();
const chapter = 'chapter';
const items = (0, books_1.getBooks)();
const division = 'division';
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('material/ch5m3d');
}));
router.get("/ensino", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = (0, utils_1.toCategory)(item, chapter);
    res.render('material/pesquisa', (0, utils_1.toArray)(category));
}));
router.get("/pesquisa", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = (0, utils_1.toCategory)(items, division);
    res.render('material/pesquisa', (0, utils_1.toArray)(category));
}));
router.get('/book/:key?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book_key = req.params.key;
    const book = items.filter((book) => book.key === book_key);
    res.render('material/book', book[0]);
}));
exports.default = router;
//# sourceMappingURL=material.js.map