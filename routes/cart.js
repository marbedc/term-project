const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const cart = [
    { name: 'Cool Mug', quantity: 2, price: 12.99 },
    { name: 'Notebook', quantity: 1, price: 5.00 }
  ];

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  res.render('cart', { cart, total });
});

module.exports = router;