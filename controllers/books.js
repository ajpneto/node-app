const booksDB = require('../models/books');

exports.getData = () => {
    return booksDB;
}
