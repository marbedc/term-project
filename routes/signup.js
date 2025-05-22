const express = require('express');
const router = express.Router();
const db = require('../db');

// Serve signup page
router.get('/signup', (req, res) => {
  res.render('signup'); // views/signup.pug
});

// Handle user registration
router.post('/', (req, res) => {
  const { firstName, lastName, DOB, email, password } = req.body;

  // Basic field validation
  if (!firstName || !lastName || !DOB || !email || !password) {
    return res.render('signup', { error: "All fields are required." });
  }

  // Check if email already exists
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, existingUser) => {
    if (err) {
      console.error("DB select error:", err.message);
      return res.status(500).render('signup', { error: "Server error." });
    }

    if (existingUser) {
      return res.render('signup', { error: "Email already exists." });
    }

    // Insert new user
    db.run(
      'INSERT INTO users (first_name, last_name, date_of_birth, email, password) VALUES (?, ?, ?, ?, ?)',
      [firstName, lastName, DOB, email, password],
      function (insertErr) {
        if (insertErr) {
          console.error("DB insert error:", insertErr.message);
          return res.status(500).render('signup', { error: "Failed to create account." });
        }

        // Redirect to homepage after successful signup
        return res.redirect('/homepage');
      }
    );
  });
});

module.exports = router;
