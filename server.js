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
}
);

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
}
);

//products table
db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT NOT NULL
)`, (err) => {
    if (err) {
        return console.error('Error creating products table: ' + err.message);
    } else {
        console.log('Products table created or already exists.');
    }
}
);

//orders table
db.run(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
)`, (err) => {
    if (err) {
        return console.error('Error creating orders table: ' + err.message);
    } else {
        console.log('Orders table created or already exists.');
    }
}
);


// Start the server
app.listen(port, () => {
    console.log(`Todo API server running at http://localhost:${port}`);
  });
