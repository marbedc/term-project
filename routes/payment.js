const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/payment', (req, res) => {
  const userId = 1; // or from session

  const query = `
    SELECT 
      c.quantity,
      p.name,
      p.description,
      p.price,
      p.image_link
    FROM cart c
    JOIN products p ON c.product_id = p.id
    WHERE c.user_id = ?
  `;

  db.all(query, [userId], (err, rows) => {
    if (err) {
      console.error('DB error:', err);
      return res.status(500).send("Error fetching cart data.");
    }

    const cartItems = rows || [];

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 5.00;
    const taxRate = 0.07;
    const taxes = parseFloat((subtotal * taxRate).toFixed(2));
    const total = parseFloat((subtotal + shipping + taxes).toFixed(2));

    const summary = {
      subtotal: subtotal.toFixed(2) ,
      shipping: shipping.toFixed(2),
      taxes: taxes.toFixed(2),
      total: total.toFixed(2)
    };

    res.render('payment', {
      cartItems,
      summary
    });
  });
});

//--------POST--------------------
router.post('/payment', (req, res) => {
  const userId = 1; // Replace with real session ID later
  if (!userId) return res.redirect('/login');

  const orderDate = new Date().toISOString();

  const getCartItems = `SELECT product_id, quantity FROM cart WHERE user_id = ?`;

  db.all(getCartItems, [userId], (err, items) => {
    if (err) {
      console.error('Error fetching cart items:', err);
      return res.status(500).send('Error processing order.');
    }

    if (items.length === 0) {
      console.warn('Cart is empty.');
      return res.send('Cart is empty.');
    }

    const insertOrder = db.prepare(`
      INSERT INTO orders (user_id, product_id, quantity, order_date)
      VALUES (?, ?, ?, ?)
    `);

    items.forEach(item => {
      insertOrder.run(userId, item.product_id, item.quantity, orderDate);
    });

    insertOrder.finalize(err => {
      if (err) {
        console.error('Error inserting order:', err);
        return res.status(500).send('Failed to save order.');
      }

      console.log('Orders inserted. Now clearing cart...');

      db.run(`DELETE FROM cart WHERE user_id = ?`, [userId], err => {
        if (err) {
          console.error('Error clearing cart:', err);
          // Still redirect even if cart clear fails
          return res.redirect('/confirmation');
        }

        console.log('Cart cleared successfully.');
        res.redirect('/confirmation');
      });
    });
  });
});


module.exports = router;