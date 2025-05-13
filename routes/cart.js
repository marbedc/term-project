const express = require('express');
const router = express.Router();
const db = require('../db.js');

router.get('/', (req, res) => {
    res.render('cart');
});

module.exports = router;