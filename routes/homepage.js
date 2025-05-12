const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('homepage'); // matches views/homepage.pug
});

module.exports = router;