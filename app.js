const express = require('express');
const path = require('path');
const session = require('express-session');
const db = require('./db.js');

const app = express();
const port = 3000;

const accountRoute = require('./routes/account');
const homepageRoute = require('./routes/homepage');
const loginRoute = require('./routes/login');
const paymentRoute = require('./routes/payment');
const productsRoute = require('./routes/products');
const signupRoute = require('./routes/signup');
const cartRoute = require('./routes/cart');
const apiRoutes = require('./routes/api');
const checkUserSession = require('./middleware/checkSession');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'supersecretkey',         // Replace with env var in prod
    resave: false,
    saveUninitialized: true,
  }));
  
  app.use(checkUserSession);

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '/public')));

// Set the view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


//home page
app.use('/', homepageRoute);

//account page
app.use('/account', accountRoute);

//login page
app.use('/login', loginRoute);

//signup page
app.use('/signup', signupRoute);

//products page
app.use('/products', productsRoute);

//payment page
app.use('/payment', paymentRoute);

//faq page
app.get('/faq', (req, res) => {
    res.render('faq');
});

//about page
app.get('/about', (req, res) => {
    res.render('about');
});

//cart page
app.use('/cart', cartRoute);

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
      res.redirect('/');
    });
  });

// API routes (used by search bar)
app.use('/api', apiRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Todo API server running at http://localhost:${port}`);
  });
