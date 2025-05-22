const express = require('express');
const router = express.Router();
<<<<<<< HEAD

router.get('/', (req, res) => {
    // Render the login page
    res.render('login');
});

=======
const db = require('../db');

//user login
router.post('/login', async (req, res) => {

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

  res.redirect('/homepage'); //call /home
});


});


>>>>>>> Marbella's-finished-work
module.exports = router;