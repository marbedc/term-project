const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    
    // Get the user's information from the database
    db.get('SELECT * FROM users WHERE id = ?', [0], (err, user) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        if (!user) {
            return res.status(404).send('User not found');
        }
    });

    
    // Render the payment page
    res.render('payment');
});

module.exports = router;