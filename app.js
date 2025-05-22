const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();
const port = 3000;

// Body parser middleware (for forms)
app.use(express.urlencoded({ extended: true }));

const accountRoute = require('./routes/account');
const homepageRoute = require('./routes/homepage');
const loginRoute = require('./routes/login');
const paymentRoute = require('./routes/payment');
// const productsRoute = require('./routes/products');
const signupRoute = require('./routes/signup');
const cartRoute = require('./routes/cart');

app.use(express.json());

app.use(express.urlencoded({ extended: true })); // for form data
app.use(session({
  secret: 'keyboard cat', // Change in production!
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true only with HTTPS
}));

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

app.get('/login', (req, res) => {
  res.render('login'); // login.pug in /views folder
});

app.get('/', (req, res) => {
  res.redirect('/login');
});

//signup page
app.use('/signup', signupRoute);

app.get('/signup', (req, res) => {
    res.render('signup');
  });

  app.get('/', (req, res) => {
    res.redirect('/signup');
  });

// //products page
// app.use('/products', productsRoute);

//payment page
app.use('/', paymentRoute);

//confirmation page
app.get('/confirmation', (req, res) => {
  res.render('confirmation');
});

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

// Start the server
app.listen(port, () => {
    console.log(`Todo API server running at http://localhost:${port}`);
  });
