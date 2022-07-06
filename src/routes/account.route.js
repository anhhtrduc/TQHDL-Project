const express = require('express');
const Account = require('../models/Account');

const router = express.Router();
const restrict = require('../middlewares/auth.mdw');

router.get('/login', (req, res) => {
    res.render('vwAccount/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await Account.findOne({ username: username });
    if (user === null) {
        return res.render('vwAccount/login', {
            error: 'Invalid username or password.',
        });
    }

    if (password !== user.password) {
        return res.render('vwAccount/login', {
            error: 'Invalid username or password.',
        });
    }
    req.session.isAuthenticated = true;
    req.session.authUser = user;
    const url = req.query.retUrl || '/';
    res.redirect(url);
});
router.get('/logout', restrict, (req, res) => {
    req.session.isAuthenticated = false;
    req.session.authUser = null;
    res.redirect(req.headers.referer);
});
module.exports = router;
