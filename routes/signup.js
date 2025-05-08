const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Render the signup page
    res.render('signup');
});

module.exports = router;