const express = require('express');
const router = express.Router();
const db = require('../db'); // adjust path if needed

router.get('/products', async (req, res) => {
  try {
    const products = await db.all('SELECT id, name FROM products');
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

module.exports = router;