const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();
const port = 3000;


const accountRoute = require('./routes/account');
const homepageRoute = require('./routes/homepage');
const loginRoute = require('./routes/login');
const paymentRoute = require('./routes/payment');
const productsRoute = require('./routes/products');
const signupRoute = require('./routes/signup');
const cartRoute = require('./routes/cart');
const searchRoute = require('./routes/search');

app.use(express.json());

// Body parser middleware (for forms)
app.use(express.urlencoded({ extended: true }));

// Middleware to handle sessions
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

//signup page
app.use('/signup', signupRoute);

//products page
app.use('/products', productsRoute);

//payment page
app.use('/payment', paymentRoute);

//search results page
app.use('/search', searchRoute);

//confirmation page
app.get('/confirmation', (req, res) => {
  res.render('confirmation');
});

//faq page
app.get('/faq', (req, res) => {
    const user = req.session.user;
    res.render('faq', { user });
});

//about page
app.get('/about', (req, res) => {
    const user = req.session.user;
    res.render('about', { user });
});

//cart page
app.use('/cart', cartRoute);

// Start the server
app.listen(port, () => {
    console.log(`Todo API server running at http://localhost:${port}`);
  });
