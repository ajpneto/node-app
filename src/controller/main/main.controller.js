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
exports.getResearchContent = exports.getResearchPage = exports.getServicePage = exports.getContactPage = exports.getFaqPage = exports.getAboutPage = exports.getHomePage = void 0;
const express_1 = __importDefault(require("express"));
const utils_1 = require("../../utils/utils");
const books_1 = require("../../services/books");
const router = express_1.default.Router();
const bookItems = (0, books_1.getBooks)();
const bookDivision = 'division';
const articleItems = (0, books_1.getArticles)();
const articlesDivision = 'division';
const aboutItem = (0, books_1.getAbout)();
const chapter = 'chapter';
exports.getHomePage = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = (0, utils_1.toCategory)(aboutItem, chapter);
    res.render('main/home', (0, utils_1.toArray)(category));
}));
exports.getAboutPage = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('main/about');
}));
exports.getFaqPage = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('main/faq');
}));
exports.getContactPage = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('main/contact');
}));
exports.getServicePage = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('main/about');
}));
exports.getResearchPage = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = (0, utils_1.toCategory)(bookItems, bookDivision);
    res.render('main/research', (0, utils_1.toArray)(category));
}));
exports.getResearchContent = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book_key = req.params.key;
    const book = bookItems.filter((book) => book.key === book_key);
    res.render('main/book', book[0]);
}));
//# sourceMappingURL=main.controller.js.map