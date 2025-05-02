// NOTE (Zoe): Temporary placeholder route for Week 1 to prevent Express errors
const express = require('express');
const router = express.Router();

// NOTE (Zoe): Temporary Route, placeholder for Week 1
router.get('/', (req, res) => {
    res.send('This page is under construction.');
});

// NOTE (Zoe): Exporting router to avoid "argument handler must be a function" error
module.exports = router;