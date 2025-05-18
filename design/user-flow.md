# 🛍️ User Experience Flow Summary

## 🏠 Homepage
- User lands on the homepage to browse products.
- Each product card displays:
  - Product image
  - Product name
  - **Product price** (e.g., `$12.99`)
- Clicking a product image or name opens its product detail page.
- Clicking the site logo at any time returns the user to the homepage.
- Users can search for a product via the navbar:
  - ✅ If a match is found → redirect to product detail page.
  - ❌ If no match → toast: "We don’t have that product."

---

## 👤 Profile Access
- Clicking the **Profile** button in the navbar:
  - If not logged in → redirects to login page.
  - If no account → can navigate to signup page.
  - After login/signup → redirects to profile page.
- While logged in, clicking **Profile** always goes to the profile page.
- After making a purchase, the profile page shows updated purchase history.
- Profile page includes a **Logout** button that:
  - Logs the user out
  - Redirects to the homepage
  - Shows toast: "You’ve been logged out."

---

## 🛒 Cart Access
- Clicking the **Cart** button:
  - If not logged in → toast: "Please sign in to access your cart"
  - Redirects to login (or signup if no account)
  - After login/signup → redirects to **Cart page**
    - If empty: message = "Your cart is empty"
    - Checkout button is **disabled**
    - “Add Items” button links back to homepage

---

## 📦 Product Detail Page
- Shows:
  - Product image
  - Name, price, and description
- Includes a **"Continue Shopping"** link at the top that returns to the homepage.
- Clicking **Add to Cart**:
  - If not logged in → redirects to signup/login → then back to product page → auto-adds item → shows toast: "Item added to cart"
  - If logged in → adds item to cart and shows toast: "Item added to cart"

---

## 🛒 Cart Page
- Displays:
  - All items with image, name, price, and quantity
  - Grand total price
  - Trashcan icon for each item to decrement quantity by 1
    - If quantity reaches 0 → item is removed from cart
- Checkout button:
  - **Disabled** when cart is empty
  - **Enabled** when items are present
- Includes **"Add Items"** button to return to homepage

---

## 💳 Payment Page
- After clicking **Checkout**, user is taken to the payment page
- User enters mock payment info and clicks **Complete Purchase**
- Purchase triggers:
  - Toast/banner: "Thank you for your order"
  - Redirect to homepage

---

## 🔗 Navbar Logo Behavior
- Clicking the logo in the navbar from any page redirects the user to the **Homepage**
- This works whether or not the user is logged in

---

## 🧭 User Flow Diagram

[ Homepage ]
     |
     ├──> [ Search ]
     |       ├── Match → [ Product Page ]
     |       └── No Match → Toast: "We don’t have that product"
     |
     ├──> [ Product Grid ]
     |       └── Click → [ Product Page ]
     |
     ├──> [ Profile Button (Navbar) ]
     |       ├── Logged In → [ Profile Page ]
     |       └── Not Logged In → [ Login Page ]
     |                                └── No account → [ Signup Page ]
     |                                       └── After Signup → [ Profile Page ]
     |
     └──> [ Cart Button (Navbar) ]
             ├── Logged In → [ Cart Page ]
             └── Not Logged In → Toast: "Please sign in to access your cart"
                                     └── Redirect to [ Login Page ]
                                           └── No account → [ Signup Page ]
                                                  └── After Signup → [ Cart Page (empty) ]

[ Product Page ]
     |
     ├── [ Continue Shopping ] → [ Homepage ]
     |
     └── [ Add to Cart Button ]
             ├── Logged In → Add to Cart → Toast: "Item added to cart"
             └── Not Logged In → Redirect to [ Signup/Login ]
                                     └── After Signup/Login → Auto-add item → Toast: "Item added to cart" → Redirect back to [ Product Page ]

[ Cart Page ]
     |
     ├── If Empty:
     |     ├── Message: "Your cart is empty"
     |     └── [ Add Items Button ] → [ Homepage ]
     |
     ├── If Items Present:
     |     ├── Show: Image, Name, Price, Quantity
     |     ├── [ Trashcan Icon ] → Decrement quantity
     |     ├── If Quantity = 0 → Remove item
     |     └── [ Checkout Button ] → [ Payment Page ]

[ Payment Page ]
     |
     ├── User enters mock payment info
     └── [ Complete Purchase ]
             ├── Toast: "Thank you for your order"
             └── Redirect → [ Homepage ]

[ Profile Page ]
     |
     ├── View purchase history
     └── [ Logout Button ]
             └── Clear session → Toast: "You’ve been logged out" → Redirect to [ Homepage ]

[ Footer ]
     ├── [ About Page ]
     └── [ FAQ Page ]

[ Any Page ]
     └── Click Navbar Logo → Redirect to [ Homepage ]