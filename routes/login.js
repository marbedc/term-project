const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  res.render('login'); // Render the login page
});


//user login
router.post('/', async (req, res) => {

    const {email, password} =  req.body;
    
    if(!email || !password){
        return res.render('login', {error: "All fields are required"})

    }

   db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
  if (err) {
    console.error(err.message);
    return res.render('login', { error: "Server error" });
  }

  if (!user) {
    return res.render('login', { error: "Invalid email" });
  }

  if (user.password !== password) {
    return res.render('login', { error: "Invalid password" });
  }

  // Store user information in session
  req.session.user = {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    date_of_birth: user.date_of_birth
  };

  res.redirect('/'); //successful login, redirect to homepage
});


});


module.exports = router;