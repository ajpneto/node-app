"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticles = exports.getAbout = exports.getBooks = exports.getBook = void 0;
const teaching_book_1 = __importDefault(require("../model/teaching.book"));
const research_book_1 = __importDefault(require("../model/research.book"));
const articles_book_1 = __importDefault(require("../model/articles.book"));
const about_1 = __importDefault(require("../model/about"));
const getBook = () => {
    return teaching_book_1.default.items;
};
exports.getBook = getBook;
const getBooks = () => {
    return research_book_1.default.items;
};
exports.getBooks = getBooks;
const getAbout = () => {
    return about_1.default.items;
};
exports.getAbout = getAbout;
const getArticles = () => {
    return articles_book_1.default.items;
};
exports.getArticles = getArticles;
//# sourceMappingURL=books.js.map