# 🏠 Home Page (Storefront) — Full Layout Breakdown (Updated)

---

## 💻 Frontend (homepage.pug)

### ⬆️ Navbar (appears on all pages)

* \[Logo/Home (clickable logo or company name)] → returns to `/`
* \[Search Bar] → centered or right-aligned
* \[Profile] →

  * If logged in → goes to `/profile`
  * If not logged in → goes to `/login`
* \[Cart Icon] →

  * If logged in → goes to `/cart`
  * If not logged in → toast: "Please sign in to access your cart" → redirects to `/login`

### 🍭 Product Grid (Storefront)

* Minimum of 12 product cards
* Each card contains:

  * Product image (clickable)
  * Product name (clickable)
  * **Product price**
  * \[View Product] or clickable card → links to `/products/:id`

### ⬇️ Footer

* \[About] → `/about`
* \[FAQ] → `/faq`

---

## 🔥 Frontend Site Map (Home Page)

```
Navbar:
[Logo/Home] → / | [Search Bar] → (Search product then redirect to /products/:id) | [Profile]
- If logged in → /profile
- If not logged in → /login
| [Cart Icon]
- If logged in → /cart
- If not logged in → Toast + Redirect to /login

Main Content:
 [Product Grid]
       |
-------------------------------------------------------------
| Product 1 | Product 2 | ... | Product 12 |
       |
 [Click → Product Detail Page: /products/:id]

Footer:
[About] → /about | [FAQ] → /faq
```

---

## 🚫 JavaScript (public/js/search.js or inline)

### 🔍 Search Functionality

**User Flow**:

* User types in the search bar and presses Enter or clicks "Search".

**JS Actions**:

1. Capture the search query.
2. Check the query against:

   * Option A: Local array of product names/IDs.
   * Option B (preferred): Send query to backend `/products/search?q=...`.
3. If a match:

   * Redirect to `/products/:id`
4. If no match:

   * Show toast: "Product not found."

**Example (Option A, static array)**:

```javascript
const products = {
    mercury: '/products/1',
    venus: '/products/2',
    // etc.
};

const query = userInput.toLowerCase();
if (products[query]) {
    window.location.href = products[query];
} else {
    alert('Product not found.');
}
```

---

## 📀 Backend (Express + SQLite)

| Feature                            | Route                        | File        | DB Query                                   |
| ---------------------------------- | ---------------------------- | ----------- | ------------------------------------------ |
| Serve homepage                     | `GET /`                      | `app.js`    | Renders `homepage.pug`                     |
| Load all products                  | `GET /products`              | products.js | `SELECT * FROM products`                   |
| Load single product                | `GET /products/:id`          | products.js | `SELECT * FROM products WHERE id = ?`      |
| Search by name                     | `GET /products/search?q=...` | products.js | `SELECT * FROM products WHERE name LIKE ?` |
| Profile button session check       | middleware                   | app.js      | Checks `req.session.userId`                |
| Redirect to login if not logged in | `/profile` route             | auth.js     | Redirects to `/login` if unauthenticated   |

---

## 🗺️ Backend Site Map (Home Page)

```
[GET /] → app.js → render homepage.pug
     |
[GET /products] → products.js → SELECT * FROM products
     |
[GET /products/:id] → products.js → SELECT * FROM products WHERE id = ?
     |
[GET /products/search?q=...] → products.js → SELECT * FROM products WHERE name LIKE ?

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

* The homepage (storefront) shows products and provides the main navigation.
* Logo/title is clickable to return to homepage.
* Search bar allows users to quickly access products by name.
* JavaScript captures search queries and redirects to product pages if matched.
* Profile button behavior depends on user login status.
* Cart icon directs users to the cart page or to login with a toast.
* Backend supports product loading and search queries.
* Session and cookie behavior maintains user login and cart status.