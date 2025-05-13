const sqlite3 = require("sqlite3").verbose();

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
    password TEXT NOT NULL,
    first name TEXT NOT NULL,
    last name TEXT NOT NULL
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

//cart table
db.run(`CREATE TABLE IF NOT EXISTS cart (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
)`, (err) => {
    if (err) {
        return console.error('Error creating cart table: ' + err.message);
    } else {
        console.log('Cart table created or already exists.');
    }
});

module.exports = db;