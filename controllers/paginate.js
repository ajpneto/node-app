const { Deta } = require('deta');
const deta = Deta();

const db = deta.Base("books");

const items_by_category = require('./request');


let paginateDB =  (view) => {
    return (req, res) => {
    const response = db.fetch();
    response.then((data) => {
        const page = parseInt(req.query.page);
        const limit = 24//parseInt(req.query.limit);
        const startIndex = (page -1) * limit;
        const endIndex = page * limit;

        const items = {};

        if(endIndex < data.items.length){
            items.next = {
                page: page + 1,
                limit: limit,
            };
        }
        if(startIndex > 0){
            items.previous = {
                page: page - 1,
                limit: limit,
            };
        }

        items.results = data.items.slice(startIndex, endIndex);
        res.render(view, items);
    });
    };
}

exports.paginateDB = paginateDB;
