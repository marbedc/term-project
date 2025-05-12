const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('cart'); // matches views/cart.pug
});

module.exports = router;