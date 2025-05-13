const express = require('express');
const router = express.Router();
const db = require('../db.js');

router.get('/', (req, res) => {
    
    // Get the user's information from the database
    db.get('SELECT * FROM users WHERE id = ?', [0], (err, user) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        if (!user) {
            //return res.status(404).send('User not found');
            res.render('payment');
        }else{
            res.render('payment');
        }
        // Render the payment page
    
    });

});

module.exports = router;