// db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create and export the database connection
const db = new sqlite3.Database(path.join(__dirname, 'stellar_store.db')); 





// Export the database connection
module.exports = db;
