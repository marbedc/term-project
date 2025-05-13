// setupDatabase.js
const db = require('./db'); // Uses the db connection from db.js

// Creates tables using this database connection
// db.prepare(`
//   CREATE TABLE IF NOT EXISTS users (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     firstName TEXT NOT NULL,
//     lastName TEXT NOT NULL,
//     DOB TEXT,
//     email TEXT UNIQUE NOT NULL,
//     password TEXT NOT NULL
//   );
// `).run();

// Create Products Table
// db.prepare(`
//     CREATE TABLE IF NOT EXISTS products (
//       product_id INTEGER PRIMARY KEY AUTOINCREMENT,
//       name TEXT NOT NULL,
//       description TEXT,
//       price REAL NOT NULL,
//       image_url TEXT
//     );
//   `).run();
  
//   // Create Cart Table (Each user has a cart)
//   db.prepare(`
//     CREATE TABLE IF NOT EXISTS carts (
//       cart_id INTEGER PRIMARY KEY AUTOINCREMENT,
//       user_id INTEGER,
//       FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
//     );
//   `).run();
  
//   // Create Cart Items Table (Stores items in the cart)
//   db.prepare(`
//     CREATE TABLE IF NOT EXISTS cart_items (
//       cart_item_id INTEGER PRIMARY KEY AUTOINCREMENT,
//       cart_id INTEGER NOT NULL,
//       product_id INTEGER NOT NULL,
//       quantity INTEGER NOT NULL,
//       FOREIGN KEY (cart_id) REFERENCES carts(cart_id) ON DELETE CASCADE,
//       FOREIGN KEY (product_id) REFERENCES products(product_id)
//     );
//   `).run();

//   // Insert dummy user(s)
// const insert = db.prepare(`
//   INSERT OR IGNORE INTO users (firstName, lastName, DOB, email, password)
//   VALUES (?, ?, ?, ?, ?)
// `);

// insert.run('Alice', 'Smith', '1990-05-20', 'alice@example.com', 'password123');
// insert.run('Bob', 'Jones', '1985-11-02', 'bob@example.com', 'passw0rd');
  
  console.log("Database tables created successfully.");
