const express = require('express');
const path = require('path');
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3000;

app.use(express.json());

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

//db
const db = new sqlite3.Database('store.db', (err) => {
    if (err) {
        return console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the store database.');
    }
});

//users table
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL
)`, (err) => {
    if (err) {
        return console.error('Error creating users table: ' + err.message);
    } else {
        console.log('Users table created or already exists.');
    }
});

//products table (need to save images somehow?)
db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT NOT NULL
)`, (err) => {
    if (err) {
        return console.error('Error creating products table: ' + err.message);
    } else {
        console.log('Products table created or already exists.');
    }
});

//orders table, (added order_date to group orders but may have to change the system)
db.run(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    order_date DATETIME NOT NULL,
    featured BOOLEAN NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
)`, (err) => {
    if (err) {
        return console.error('Error creating orders table: ' + err.message);
    } else {
        console.log('Orders table created or already exists.');
    }
});

//home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    
    //send featured products
    db.all("SELECT * FROM products WHERE featured == TRUE", (err, rows) => {
        if (err) {
            return console.error("Failed to retrieve featured products" + err.message);
        }
        res.json(rows);  //doesn't work, can't do sendFile and json. Once sent res is no longer accesible.
    });
});


//products page
app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products.html'));

    //send all products
    db.all("SELECT * FROM products", (err, rows) => {
        if (err) {
            return console.error("Failed to retrieve products" + err.message);
        }
        res.json(rows); //doesn't work
    });
});

//faq page
app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'faq.html'));
});

//about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Todo API server running at http://localhost:${port}`);
  });
