const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('store.db');

// POST /cart/add
router.post('/add', (req, res) => {
  const { productId } = req.body;
  const userId = 1; // temporary hardcoded user (replace with session later)

  db.run(
    `INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, 1)`,
    [userId, productId],
    function (err) {
      if (err) {
        console.error(err.message);
        return res.status(500).send('Error adding to cart');
      }
      res.status(200).send('Product added to cart');
    }
  );
});

module.exports = router;