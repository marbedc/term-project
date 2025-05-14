const express = require('express');
const router = express.Router();
const db = require('../db.js');

const current_user = 2;

router.get('/', (req, res) => {
    
    // Get the user's information from the database
    db.get('SELECT * FROM users WHERE id = ?', [current_user], (err, user) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        if (!user) {
            return res.status(404).send('User not found');
        }else{
            console.log(user);
            res.render('payment');
        }
    
    });

});

module.exports = router;