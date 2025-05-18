# 🛒 Cart Page — Full Layout Breakdown (Updated)

---

## 💻 Frontend (cart.pug)

### ⬆️ Navbar (appears on all pages)

* \[Logo/Home (clickable logo or company name)] → returns to `/`
* \[Search Bar] → centered or right-aligned
* \[Profile] →

  * If logged in → goes to `/profile`
  * If not logged in → goes to `/login`
* \[Cart Icon] →

  * If logged in → goes to `/cart`
  * If not logged in → toast: "Please sign in to access your cart" → redirects to `/login`

### 🎨 Cart Display Section

* If user is logged in:

  * Show heading: "\[User's Name]'s Items in Cart"
  * For each item:

    * Product Image
    * Product Name
    * Product Quantity (e.g., x 2)
    * Total Price (e.g., \$25.98)
    * \[Trashcan Icon] → decrements quantity by 1

      * If quantity = 0, item is removed from cart
  * Grand total of all items
  * \[Add Items] button → returns to `/`
  * \[Checkout] button

    * Disabled if cart is empty

* If cart is empty:

  * Show message: "Your cart is empty"
  * \[Add Items] button → returns to `/`

### ⬇️ Footer

* \[About] → `/about`
* \[FAQ] → `/faq`

---

## 🔥 Frontend Site Map (Cart Page)

```
Navbar:
[Logo/Home] → / | [Search Bar] → (Search then redirect to /products/:id) | [Profile]
- If logged in → /profile
- If not logged in → /login
| [Cart Icon]
- If logged in → /cart
- If not logged in → Toast + Redirect to /login

Main Content:
 [Cart Items]
       |
 ---------------------------------------------
| Image | Name | Quantity | Total | Trashcan |
       |
 [Add Items Button] → / (Homepage)
 [Checkout Button] → /payment (disabled if cart is empty)

 [Empty Cart Message] → "Your cart is empty"
 [Add Items Button] → / (Homepage)

Footer:
[About] → /about | [FAQ] → /faq
```

---

## 🚫 JavaScript (public/js/cart.js or inline)

### 🔍 Cart Functionality

**User Flow**:

* User lands on cart page (must be logged in).
* Cart is populated from DB based on `user_id`.
* User clicks trashcan to remove one item at a time:

  * Quantity decrements
  * If quantity = 0, item is removed entirely
* Checkout button is enabled only when cart has items
* Add Items button redirects to homepage

**JS Actions**:

1. Send POST request to `/cart/remove-one` with `productId`.
2. Backend updates quantity or deletes row.
3. Refresh cart display or re-fetch updated cart.

**Example:**

```javascript
const removeItem = (productId) => {
    fetch('/cart/remove-one', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId })
    }).then(res => {
        if (res.ok) {
            location.reload();
        } else {
            alert('Error updating cart.');
        }
    });
};
```

---

## 📀 Backend (Express + SQLite)

| Feature                       | Route                   | File       | DB Query                                                            |
| ----------------------------- | ----------------------- | ---------- | ------------------------------------------------------------------- |
| Serve cart page               | `GET /cart`             | cart.js    | `SELECT * FROM cart JOIN products ON cart.product_id = products.id` |
| Remove one item               | `POST /cart/remove-one` | cart.js    | Checks quantity; if > 1: UPDATE; if = 1: DELETE                     |
| Checkout (mock)               | `POST /payment`         | payment.js | Logic to clear cart for user (if implemented)                       |
| Session check for cart access | middleware              | app.js     | Checks `req.session.userId`                                         |

---

## 🗺️ Backend Site Map (Cart Page)

```
[GET /cart] → cart.js → SELECT * FROM cart JOIN products
     |
 Renders cart.pug with user-specific cart data

[POST /cart/remove-one] → cart.js
     |
 Decrement quantity or remove product

Session Check Middleware:
- Checks req.session.userId
- If not logged in → Redirect to /login
```

---

## 🔐 Session/Cookie Behavior

* User sessions persist for **7 days** unless the user logs out.
* Cart data and login state are maintained across browser sessions.
* If the session expires or the user logs out, they will need to log in again.

---

## ✅ Summary

* The Cart Page dynamically displays items added by the user using session-based authentication.
* Users can remove items incrementally using the trashcan icon.
* Checkout is disabled until at least one item is in the cart.
* Navigation and session behavior is consistent with the rest of the site.
* Backend handles product joins, quantity updates, and checkout logic.