const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const requireAuth = require('../auth/require-auth');

const { Deta } = require('deta');
const deta = Deta();
const db = deta.Base("users");

const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
};

const getHashedPassword = (password) => {
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    return hashedPassword;
}


router.get('/register', requireAuth, (req, res) => {
    res.render('auth/register');
});
router.post('/register', requireAuth, (req, res) => {
    const { email, firstName, lastName, password, confirmPassword } = req.body;
    const hashedPassword = getHashedPassword(password);
    // Store user into the database
    if(password === confirmPassword){
                db.put({firstName, lastName, email, password: hashedPassword});

                res.render('auth/login', {
                    message: email + ' registered. Please login to continue.',
                    messageClass: 'alert-success'
                });
    } else {
        res.render('auth/register', {
            message: 'Password does not match',
            messageClass: 'alert-danger'
        });
    }

});


router.get('/login', (req, res) => {
    res.render('auth/login');
});
router.post('/login', (req, res) => {
    const now = new Date();
    const expiresAt = new Date(+now + 120 * 1000);
    const { email, password } = req.body;
    db.fetch({'email?contains': email}).then((data) => {
        const user = data.items[0];
        const userPassword = user.password;
        const isMatch = bcrypt.compareSync(password, userPassword);
        if(user.email && isMatch){
            const authToken = generateAuthToken();
            db.update({authToken: authToken}, user.key);
            res.cookie('AuthToken', authToken, { expires: expiresAt });
            res.redirect('/');

        } else {
            res.render('auth/login', {
                message: 'Invalid password',
                messageClass: 'alert-danger'
            });
        }
    }).catch(err => {
        res.render('auth/login', {
            message: 'Invalid email',
            messageClass: 'alert-danger'
        });
    });
});


router.get('/logout', (req, res) => {
    res.cookie('AuthToken', '', { expires: new Date() });
    res.redirect('/');
    //res.send('You have been loged out successfully  <a href="/">Back</a>');
});

module.exports = router
