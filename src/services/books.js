"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooks = void 0;
const books_1 = require("../model/books");
const getBooks = () => {
    return books_1.books;
};
exports.getBooks = getBooks;
/*exports.getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
               booksDB1
            ]);
        }, 1000);
    });
}*/
//# sourceMappingURL=books.js.map