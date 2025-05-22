const express = require('express');
const router = express.Router();
const db = require('../db');

// POST /cart/add
router.post('/add', (req, res) => {
  const { productId } = req.body;
  const userId = 1; // replace with session user ID later

  db.get(
    `SELECT quantity FROM cart WHERE user_id = ? AND product_id = ?`,
    [userId, productId],
    (err, row) => {
      if (err) return res.status(500).send('DB error');

      if (row) {
        db.run(
          `UPDATE cart SET quantity = quantity + 1 WHERE user_id = ? AND product_id = ?`,
          [userId, productId],
          err => {
            if (err) return res.status(500).send('Update failed');
            res.status(200).send('Cart updated');
          }
        );
      } else {
        db.run(
          `INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, 1)`,
          [userId, productId],
          err => {
            if (err) return res.status(500).send('Insert failed');
            res.status(200).send('Product added to cart');
          }
        );
      }
    }
  );
});

// GET /cart
router.get('/', (req, res) => {
  const userId = 1; // replace with session user ID later

  const query = `
    SELECT products.id, products.name, products.price, products.image_link, cart.quantity
    FROM cart
    JOIN products ON cart.product_id = products.id
    WHERE cart.user_id = ?
  `;

  db.all(query, [userId], (err, rows) => {
    if (err) return res.status(500).send('Error fetching cart');

    const total = rows.reduce((sum, item) => sum + item.price * item.quantity, 0);
    res.render('cart', { cart: rows, total, user: req.session.user });
  });
});

// POST /cart/remove-one
router.post('/remove-one', (req, res) => {
  const { productId } = req.body;
  const userId = 1; // replace with session user ID later

  db.run(
    `UPDATE cart SET quantity = quantity - 1 WHERE user_id = ? AND product_id = ? AND quantity > 0`,
    [userId, productId],
    function (err) {
      if (err) return res.status(500).send('Update failed');

      db.run(
        `DELETE FROM cart WHERE user_id = ? AND product_id = ? AND quantity <= 0`,
        [userId, productId],
        err => {
          if (err) return res.status(500).send('Cleanup failed');
          res.status(200).send('Item updated');
        }
      );
    }
  );
});

module.exports = router;