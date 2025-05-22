const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.all('SELECT * FROM products', [], (err, rows) => {
    if (err) {
      return res.status(500).send("Database error");
    }
    res.render('homepage', { products: rows, user: req.session.user });
  });
});

module.exports = router;