const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Render the login page
    res.render('login');
});

module.exports = router;