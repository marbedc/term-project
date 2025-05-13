const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// View engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware (for forms)
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get('/login', (req, res) => {
  res.render('login'); // login.pug in /views folder
});

app.get('/', (req, res) => {
  res.redirect('/login');
});

const loginRoutes = require('./routes/login');
app.use('/', loginRoutes); // `/login` is handled

app.get('/signup', (req, res) => {
    res.render('signup'); // login.pug in /views folder
  });
  
  app.get('/', (req, res) => {
    res.redirect('/signup');
  });

  const signupRoutes = require('./routes/signup');
app.use('/', signupRoutes); 


  app.get('/payment', (req, res) => {
    res.render('payment'); 
  });
  
  app.get('/', (req, res) => {
    res.redirect('/payment');
  });


// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
