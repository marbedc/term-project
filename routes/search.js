const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    console.log('Search route accessed');
    const query = req.query.q;
    res.json(query);
});

module.exports = router;