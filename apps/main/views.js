const express = require('express');
const router = express.Router();
const hbs = require('hbs');
const requireAuth = require('../auth/require-auth');
const paginate = require('../../controllers/paginate');
/* Assign the { <property> } from the object to a local variable named <property>.
   The destructuring assignment is particularly useful when dealing with complex objects or modules,
   allowing you to extract specific properties directly into local variables
   ex.: var ActionButton = require("sdk/ui/button/action").ActionButton;
   ===> var { ActionButton } = require("sdk/ui/button/action"); */
const { Deta } = require('deta');
const deta = Deta();
const Books = deta.Base("books");

const request = require('../../controllers/request');
const booksDB = require('../../controllers/books');
const booksDB1 = require('../../controllers/books1');


let toArray =  (data) => {
    const items = [];
    for (const [key, value] of Object.entries(data.category)) {
        value.forEach((item) => {});
        items.push({category: key, value});
    };
    return items;
};

router.get('/all', (req, res) => {
        const response = Books.fetch();
        response.then((data) => {
            res.send(data);
        });
});

router.get('/', (req, res) => {
    request('https://aen.pythonanywhere.com/products', (error, data) => {
        res.render('main/home', toArray(data));
    });
});

router.get('/material', (req, res) => {
    const response = Books.fetch();
    response.then((data) => {
        const result = data.items.reduce((x, y) => {
            (x[y.division] = x[y.division] || []).push(y);
            return x;
        }, {});
        const cats = {category: result};
        res.render('main/magazine', toArray(cats));
    });
});

/*router.get('/book/:key?', (req, res) => {
    const book_key = req.params.key; //-1
const booksData = booksDB1.getData();
const book = booksData.items.find((book) => book.key === book_key);
res.render('main/article', book)
});*/

// Deta //
router.get('/books', paginate.paginateDB('main/bookscat'), (req, res) => {
});

router.get('/book/:key?', (req, res) => {
    const book_key = req.params.key;
    Books.get(book_key).then((data) => {
        res.render('main/book', data);
    });
});


/*router.get('/book_api/:key', (req, res) => {
    const book_key = req.params.key;
    Books.get(book_key).then((data) => {
        res.send(data);
    });
});*/


router.get('/about', (req, res) => {
    res.render('main/about');
});

router.get('/contact', (req, res) => {
        res.render('main/index');
});


router.get('/ch5m3d', (req, res) => {
    res.render('main/ch5m3d');
});

router.get('/chemdoodle', (req, res) => {
    res.render('main/chemdoodle');
});


router.get('/reports', (req, res) => {
    request('https://aen.pythonanywhere.com/reports', (error, data) => {
        res.send(data);
    });
});


router.get('/add', requireAuth, (req, res) => {
        const response = Books.fetch();
        response.then((data) => {
            res.render('main/manage-article');
        });
});
router.post('/add', requireAuth, (req, res) => {
        let today = new Date().toLocaleDateString('pt-BR')
        const data = {
              category: req.body.category,
              title: req.body.title,
              description: req.body.description,
              content: req.body.content,
              image: req.body.image,
              publish_date: today
          };

        Books.put(data).then(item => {
            res.render('main/manage-article');
        }).catch(err => {
            res.status(400).send("Unable to save to database");
        });
});


router.post('/delete', requireAuth, (req, res) => {
        const key = req.query.key;

        Books.delete(key).then(item => {
            res.render('main/manage-article');
        }).catch(err => {
            res.status(400).send(err);
        });
});

module.exports = router;
