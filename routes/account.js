const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

router.get('/', (req, res) => {
    // AI generated code, will test later

    // // Check if the user is logged in
    // if (!req.session.user) {
    //     return res.redirect('/login');
    // }

    // // Get the user's information from the database
    // const userId = req.session.user.id;
    // db.get('SELECT * FROM users WHERE id = ?', [userId], (err, user) => {
    //     if (err) {
    //         console.error(err);
    //         return res.status(500).send('Internal Server Error');
    //     }
    //     if (!user) {
    //         return res.status(404).send('User not found');
    //     }

    //     // Render the account page with the user's information
    //     res.render('account', { user });
    // });

    res.render('account'); //also not tested
});

module.exports = router;