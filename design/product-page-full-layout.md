# 🎯 Product Detail Page — Full Layout Breakdown (Updated)

---

## 💻 Frontend (products.pug)

### ⬆️ Navbar (appears on all pages)

* \[Logo/Home (clickable logo or company name)] → returns to `/`
* \[Search Bar] → centered or right-aligned
* \[Profile] →

  * If logged in → goes to `/profile`
  * If not logged in → goes to `/login`
* \[Cart Icon] →

  * If logged in → goes to `/cart`
  * If not logged in → toast: "Please sign in to access your cart" → redirects to `/login`

### 🎨 Product Detail Section

* Displays data dynamically from the database:

  * **Product Image**
  * **Product Title/Name**
  * **Product Description**
  * **Product Price**
* \[Add to Cart] button:

  * If not logged in → redirects to signup/login → auto-adds item → toast: "Item added to cart" → redirect back to product page
  * If logged in → adds item and shows toast: "Item added to cart"
* \[Continue Shopping] link at top-left → returns to `/`

### ⬇️ Footer

* \[About] → `/about`
* \[FAQ] → `/faq`

---

## 🔥 Frontend Site Map (Product Page)

```
Navbar:
[Logo/Home] → / | [Search Bar] → (Search then redirect to /products/:id) | [Profile]
- If logged in → /profile
- If not logged in → /login
| [Cart Icon]
- If logged in → /cart
- If not logged in → Toast + Redirect to /login

Main Content:
 [Product Detail View]
       |
 ----------------------------------------
| Image | Name | Description | Price |
       |
 [Add to Cart Button]
       |
 Add to cart logic + toast

 [Continue Shopping] → / (Homepage)

Footer:
[About] → /about | [FAQ] → /faq
```

---

## 🚫 JavaScript (public/js/products.js or inline)

### 🛒 Add to Cart Functionality

**User Flow**:

* User clicks "Add to Cart" button.

**JS Actions**:

1. Capture the product ID.
2. Send a POST request to backend `/cart/add` with the product ID.
3. On success:

   * Show toast: "Item added to cart"
   * User remains on product page (no redirect)

**Example:**

```javascript
const addToCart = (productId) => {
    fetch('/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId })
    }).then(res => {
        if (res.ok) {
            alert('Item added to cart');
        } else {
            alert('Failed to add product.');
        }
    });
};
```

---

## 📀 Backend (Express + SQLite)

| Feature                            | Route               | File        | DB Query                                                            |
| ---------------------------------- | ------------------- | ----------- | ------------------------------------------------------------------- |
| Serve product page                 | `GET /products/:id` | products.js | `SELECT * FROM products WHERE id = ?`                               |
| Add to cart                        | `POST /cart/add`    | cart.js     | `INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, 1)` |
| Session check for Profile button   | middleware          | app.js      | Checks `req.session.userId`                                         |
| Redirect to login if not logged in | `/profile` route    | auth.js     | Redirects to `/login`                                               |

---

## 🗺️ Backend Site Map (Product Page)

```
[GET /products/:id] → products.js → SELECT * FROM products WHERE id = ?
     |
 Renders products.pug with product data

[POST /cart/add] → cart.js → INSERT INTO cart (user_id, product_id, quantity)

Session Check Middleware:
- Checks req.session.userId
- If accessing /profile without login → Redirect to /login
```

---

## 🔐 Session/Cookie Behavior

* User sessions persist for **7 days** unless the user logs out.
* Cart data and login state are maintained across browser sessions.
* If the session expires or the user logs out, they will need to log in again.

---

## ✅ Summary

* The Product Page dynamically loads product details using the product ID from the URL.
* Navbar provides consistent navigation across the site.
* "Add to Cart" functionality triggers a backend POST request and toast confirmation.
* Backend handles product loading and cart logic.
* Session checks enforce authentication for profile/cart-related actions.