const express = require('express');
const router = express.Router();
const db = require('../db.js');

const currentUser = 1;

router.get('/', (req, res) => {
    // // Check if the user is logged in
    // if (!req.session.user) {
    //     return res.redirect('/login');
    // }

    // Get the user's information from the database
    // const userId = req.session.user.id;

    db.all(`SELECT orders.id AS order_id, orders.order_date, orders.quantity, products.name AS product_name, 
            products.category, products.price, users.first_name, users.last_name, users.email
            FROM orders
            JOIN products ON orders.product_id = products.id
            JOIN users ON orders.user_id = users.id
            WHERE users.id = ?;`, [currentUser], (err, rows) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('Internal Server Error');
                }
                if (!rows) {
                    return res.status(404).send('Information not found');
                } else {
                    res.render('account', {
                        first_name: rows[0].first_name,
                        last_name: rows[0].last_name,
                        email: rows[0].email,
                        orders: rows
                    });
                }
            });
});

module.exports = router;