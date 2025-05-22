const express = require('express');
//const { use } = require('react');
const router = express.Router();
const db = require('../db');

// GET /products → optional: redirect or homepage
router.get('/', (req, res) => {
  res.redirect('/');
});

// GET /products/:id → render product detail page
router.get('/:id', (req, res) => {
  const productId = req.params.id;
  db.get('SELECT * FROM products WHERE id = ?', [productId], (err, product) => {
    if (err) {
      return res.status(500).send("Database error");
    }
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.render('products', { product, user: req.session.user });
  });
});

module.exports = router;