const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('products'); // matches views/products.pug
});

module.exports = router;