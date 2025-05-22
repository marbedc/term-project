const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const query = req.query.q;
    db.all('SELECT * FROM products WHERE name LIKE ? OR description LIKE ?', [`%${query}%`, `%${query}%`], (err, rows) => {
        if (err) {
            return res.status(500).send("Database error");
        }
        res.render('search', { products: rows, user: req.session.user });
    });
});

module.exports = router;