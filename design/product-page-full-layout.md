# 🛒 \[Company Name] Product Detail Page — Full Layout Breakdown (Dynamic Version)

---

## 🟦 Frontend (product.html — dynamic)

### 🧭 Navbar (appears on all pages)

* \[Logo/Home (clickable logo or company name)] → returns to `home.html`
* \[Search Bar] → centered or right-aligned
* \[Profile] →

  * If logged in → goes to `profile.html`
  * If not logged in → goes to `login.html`
* \[Cart Icon] → goes to `cart.html`

### 🖼️ Product Detail Section

* Displays data dynamically:

  * **Product Image** (from DB)
  * **Product Title/Name** (from DB)
  * **Product Description** (from DB)
  * **Product Price** (from DB)
  * \[Add to Cart] button
* \[Back to Products] → link to `home.html`

### 📎 Footer

* \[About] → `about.html`
* \[FAQ] → `faq.html`

---

## 🔥 Frontend Site Map (Product Page)

```
Navbar:
[Logo/Home] → home.html | [Search Bar] → (Search product then redirect to product.html?id=PRODUCT_ID) | [Profile]
- If logged in → profile.html
- If not logged in → login.html
| [Cart Icon] → cart.html

Main Content:
 [Product Detail]
   |
------------------------------
| Image | Name | Description | Price |
   |
 [Add to Cart Button]
   |
 Updates cart count → cart.html

 [Back to Products] → home.html

Footer:
[About] → about.html | [FAQ] → faq.html
```

---

## 🟡 JavaScript (public/js/product.js)

### 🛒 Add to Cart Functionality

*Note: A separate JavaScript site map is not necessary for the homepage due to simple, linear script behavior.*

*Note: Adding to cart does not require login. Users can add items to the cart regardless of login status. Checkout will require login.*

**User Flow**:

* User clicks "Add to Cart" button.

**JS Actions**:

1. Capture the product ID.
2. Send a POST request to backend `/cart/add` with the product ID.
3. On success:

   * Update the cart count/icon.
   * Optionally show a "Product added" message (does not redirect to the cart page).
   * User remains on the Product Page to continue browsing or adding more items.

**Example:**

```javascript
const addToCart = (productId) => {
    fetch('/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId })
    }).then(res => {
        if (res.ok) {
            // Update cart count visually or notify user
            alert('Product added to cart!');
        } else {
            alert('Failed to add product.');
        }
    });
};
```

---

## 🟠 Backend (Express + SQLite)

| Feature                            | Route               | File        | DB Query                                                            |
| ---------------------------------- | ------------------- | ----------- | ------------------------------------------------------------------- |
| Serve product page                 | `GET /products/:id` | products.js | `SELECT * FROM products WHERE id = ?`                               |
| Add to cart                        | `POST /cart/add`    | cart.js     | `INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, 1)` |
| Session check for Profile button   | middleware          | app.js      | Checks `req.session.userId`                                         |
| Redirect to login if not logged in | `/profile` route    | auth.js     | Redirects to `login.html`                                           |

---

## 🗺️ Backend Site Map (Product Page)

```
[GET /products/:id] → products.js → SELECT * FROM products WHERE id = ?
     |
 Renders product.html with product data

[POST /cart/add] → cart.js → INSERT INTO cart (user_id, product_id, quantity)

Session Check Middleware:
- Checks req.session.userId
- If accessing /profile without login → Redirect to login.html
```

---

## 🔒 Session/Cookie Behavior

* User sessions persist for **7 days** unless the user logs out.
* Cart data and login state are maintained across browser sessions.
* If the session expires or the user logs out, they will need to log in again.

---

## ✅ Summary

* The Product Page dynamically loads product details using the product ID from the URL.
* Navbar provides consistent navigation across the site.
* "Add to Cart" functionality updates the cart via backend POST request.
* Backend retrieves product data and handles adding products to the cart.
* Session checks manage user authentication for profile and cart actions.