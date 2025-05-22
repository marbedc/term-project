const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    // Check if the user is logged in
    if (!req.session.user) {
        return res.redirect('/login');
    }else {
        currentUser = req.session.user.id;
    }

    db.all(`SELECT orders.id AS order_id, orders.order_date, orders.quantity, products.name AS product_name, 
            products.id AS product_id, products.category, products.price, users.first_name, users.last_name, users.email
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
                        user: req.session.user,
                        first_name: req.session.user.first_name,
                        last_name: req.session.user.last_name,
                        email: req.session.user.email,
                        orders: rows
                    });
                }
            });
});

router.post('/logout', (req, res) => {
    // Destroy the session
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        // Redirect to the homepage
        res.redirect('/');
    });
}
);

router.post('/deactivate', (req, res) => {
    currentUser = req.session.user.id;
    // Deactivate the user's account
    db.run(`DELETE FROM users WHERE id = ?`, [currentUser], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        // Destroy the session
        req.session.destroy((err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Internal Server Error');
            }
            // Redirect to the homepage
            res.redirect('/');
        });
    });
});

router.get('/:id', (req, res) => {
    res.redirect(`/products/${req.params.id}`);
});

module.exports = router;
