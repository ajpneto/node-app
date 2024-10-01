"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooks = exports.getBook = void 0;
const book_1 = __importDefault(require("../model/book"));
const books_1 = __importDefault(require("../model/books"));
const getBook = () => {
    return book_1.default.items;
};
exports.getBook = getBook;
const getBooks = () => {
    return books_1.default.items;
};
exports.getBooks = getBooks;
//# sourceMappingURL=books.js.map