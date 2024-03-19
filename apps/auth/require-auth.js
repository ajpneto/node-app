const { Deta } = require('deta');
const deta = Deta();
const db = deta.Base("users");

//custom middleware for injecting users to the requests
const requireAuth = (req, res, next) => {
    const authToken = req.cookies['AuthToken'];
    db.fetch({'authToken?contains': authToken}).then((data) => {
        req.user = data.items[0];
        if (req.user && authToken !== undefined) {
            next();
        } else {
            res.render('./auth/login', {
                message: 'Please login to continue',
                messageClass: 'alert-danger'
            });
        }
    });
};

//Now we can use req.user inside our request handlers to check if the user is authenticated via a token.
module.exports = requireAuth;
