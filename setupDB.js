// setupDatabase.js
const db = require('./db'); // Uses the db connection from db.js

const sqlite3 = require("sqlite3").verbose();

//db
/**
 * const db = new sqlite3.Database('store.db', (err) => {
    if (err) {
        return console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the store database.');
    }
});
 */

//users table
// db.run(`CREATE TABLE IF NOT EXISTS users (
//     user_id INTEGER PRIMARY KEY AUTOINCREMENT,
//     email TEXT NOT NULL,
//     password TEXT NOT NULL,
//     first_name TEXT NOT NULL,
//     last_name TEXT NOT NULL,
//     date_of_birth DATE NOT NULL
// )`, (err) => {
//     if (err) {
//         return console.error('Error creating users table: ' + err.message);
//     } else {
//         console.log('Users table created or already exists.');
//     }
// });

// //products table (need to save images somehow?)
// db.run(`CREATE TABLE IF NOT EXISTS products (
//     product_id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL,
//     category TEXT NOT NULL,
//     price REAL NOT NULL,
//     description TEXT NOT NULL,
//     image_link TEXT NOT NULL
// )`, (err) => {
//     if (err) {
//         return console.error('Error creating products table: ' + err.message);
//     } else {
//         console.log('Products table created or already exists.');
//     }
// });

// //orders table, (added order_date to group orders but may have to change the system)
// db.run(`CREATE TABLE IF NOT EXISTS orders (
//     order_id INTEGER PRIMARY KEY AUTOINCREMENT,
//     user_id INTEGER NOT NULL,
//     product_id INTEGER NOT NULL,
//     quantity INTEGER NOT NULL,
//     order_date DATETIME NOT NULL,
//     FOREIGN KEY (user_id) REFERENCES users (id),
//     FOREIGN KEY (product_id) REFERENCES products (id)
// )`, (err) => {
//     if (err) {
//         return console.error('Error creating orders table: ' + err.message);
//     } else {
//         console.log('Orders table created or already exists.');
//     }
// });

// //cart table
// db.run(`CREATE TABLE IF NOT EXISTS cart (
//     cart_id INTEGER PRIMARY KEY AUTOINCREMENT,
//     user_id INTEGER NOT NULL,
//     product_id INTEGER NOT NULL,
//     quantity INTEGER NOT NULL,
//     FOREIGN KEY (user_id) REFERENCES users (id),
//     FOREIGN KEY (product_id) REFERENCES products (id)
// )`, (err) => {
//     if (err) {
//         return console.error('Error creating cart table: ' + err.message);
//     } else {
//         console.log('Cart table created or already exists.');
//     }
// });


//populate table with fake data
/*
const userQuery = 'INSERT INTO users (email, password, first_name, last_name, date_of_birth) VALUES (?, ?, ?, ?, ?)';
const productQuery = 'INSERT INTO products (name, category, price, description, image_link) VALUES (?, ?, ?, ?, ?)';
const orderQuery = 'INSERT INTO orders (user_id, product_id, quantity, order_date) VALUES (?, ?, ?, ?)';

db.run(userQuery, ['zoe@gmail.com', 'password123', 'Zoe', 'Elias', '1990-01-01'], (err) => {
    if (err) {
        return console.error('Error inserting user: ' + err.message);
    } else {
        console.log('User inserted successfully.');
    }
}
);

db.run(userQuery, ['vineela@gmail.com', 'password123', 'Vineela', 'Vandanapu', '1990-01-01'], (err) => {
    if (err) {
        return console.error('Error inserting user: ' + err.message);
    } else {
        console.log('User inserted successfully.');
    }
}
);

db.run(userQuery, ['marbella@gmail.com', 'password123', 'Marbella', 'Carrasco', '1990-01-01'], (err) => {
    if (err) {
        return console.error('Error inserting user: ' + err.message);
    } else {
        console.log('User inserted successfully.');
    }
}
);

db.run(productQuery, ['Product 1', 'Category 1', 10.99, 'Description for product 1', '/images/star.png'], (err) => { 
    if (err) {
        return console.error('Error inserting product: ' + err.message);
    } else {
        console.log('Product inserted successfully.');
    }
}
);

db.run(productQuery, ['Product 2', 'Category 2', 20.99, 'Description for product 2', '/images/star.png'], (err) => { 
    if (err) {
        return console.error('Error inserting product: ' + err.message);
    } else {
        console.log('Product inserted successfully.');
    }
}
);  

db.run(productQuery, ['Product 3', 'Category 3', 30.99, 'Description for product 3', '/images/star.png'], (err) => { 
    if (err) {
        return console.error('Error inserting product: ' + err.message);
    } else {
        console.log('Product inserted successfully.');
    }
}
);

db.run(orderQuery, [1, 1, 2, '2023-10-01'], (err) => { 
    if (err) {
        return console.error('Error inserting order: ' + err.message);
    } else {
        console.log('Order inserted successfully.');
    }
}
);
db.run(orderQuery, [2, 2, 1, '2023-10-02'], (err) => { 
    if (err) {
        return console.error('Error inserting order: ' + err.message);
    } else {
        console.log('Order inserted successfully.');
    }
}
);
*/
const cartQuery = 'INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)';

db.run(cartQuery, [1, 1, 2], (err) => {
    if (err) {
        return console.error('Error inserting cart: ' + err.message);
    } else {
        console.log('Cart inserted successfully.');
    }
}
);


//see data in database

//   db.all('SELECT c.quantity, p.name, p.price, p.description, p.image_link FROM cart c JOIN products p ON c.product_id = p.product_id WHERE c.user_id = 1;', [], (err, rows) => {
//     if (err) {
//       console.error('DB error:', err);
//       return res.status(500).send("Error fetching cart data.");
//     }

//     const cartItems = rows || [];

//     const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     const shipping = 5.00; // default value
//     const taxRate = 0.07;
//     const taxes = parseFloat((subtotal * taxRate).toFixed(2));
//     const total = parseFloat((subtotal + shipping + taxes).toFixed(2));

//     const summary = {
//       subtotal: subtotal.toFixed(2),
//       shipping: shipping.toFixed(2),
//       taxes: taxes.toFixed(2),
//       total: total.toFixed(2)
//     };

//     console.log(rows)
//     console.log(cartItems.length)
//   });

// db.all('SELECT c.quantity, p.name, p.price, p.description, p.image_link FROM cart c JOIN products p ON c.product_id = p.product_id WHERE c.user_id = 1;', [], (err, rows) => {
//     if (err) {
//         throw err;
//     }
//     rows.forEach((row) => {
//         console.log(row);
//     });
// });
/*
db.all('SELECT * FROM products', [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
        console.log(row);
    });
});

db.all('SELECT * FROM orders', [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
        console.log(row);
    });
});

db.all('SELECT * FROM cart', [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
        console.log(row);
    });
});
*/


  //console.log("Database tables created successfully.");
