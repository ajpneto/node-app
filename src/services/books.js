"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbout = exports.getArticles = exports.getBooks = void 0;
const research_book_1 = __importDefault(require("../model/research.book"));
const articles_book_1 = __importDefault(require("../model/articles.book"));
const aboutSection_1 = __importDefault(require("../model/aboutSection"));
const getBooks = () => {
    return research_book_1.default.items;
};
exports.getBooks = getBooks;
const getArticles = () => {
    return articles_book_1.default.items;
};
exports.getArticles = getArticles;
const getAbout = () => {
    return aboutSection_1.default.items;
};
exports.getAbout = getAbout;
//# sourceMappingURL=books.js.map