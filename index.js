const express = require("express");
const hbs = require('hbs');
const createError = require('http-errors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const port = process.env.PORT || 8080;

const app = express();

//A Handlebars custom helper function
hbs.registerHelper('copyrightYear', function() {
  var year = new Date().getFullYear();

  return new hbs.SafeString(year);
});

hbs.registerHelper('trimString', function(passedString) {
    var theString = passedString.substring(0,100);
    return new hbs.SafeString(theString)
});

hbs.registerHelper('for', function(from, to, incr, block) {
    var accum = '';
    for(var i = from; i < to; i += incr)
        accum += block.fn(i);
    return accum;
});

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials/'));

// Setup static files folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// load own modules
const logger = require('./controllers/logger');
//const requireAuth = require('./apps/auth/require-auth')
app.use(logger);
app.use(cookieParser());
//app.use(requireAuth);

const auth = require('./apps/auth/views');
const main = require('./apps/main/views');
//middleware
// Register with existing application
app.use('', auth);
app.use('', main);

// 404
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});


app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
