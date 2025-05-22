const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const query = req.query.q;
    db.all('SELECT * FROM products WHERE name LIKE ?', [`%${query}%`], (err, rows) => {

    });
    res.json(query);
});

module.exports = router;