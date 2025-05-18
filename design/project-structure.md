# 🗂️ Term Project — Project Structure & Branches

## 🔥 Final Timeline

| Date            | Milestone                                                                       |
| --------------- | ------------------------------------------------------------------------------- |
| Monday 05/12    | Finalize all frontend design and layout (Pug + CSS)                             |
| Monday 05/19    | Complete all backend functionality (routes + DB) and finish frontend JavaScript |
| Wednesday 05/21 | Test, debug, and deploy                                                         |
| Thursday 05/22  | Present the completed project                                                   |
| Tuesday 05/27   | Term Project Final Report                                                       |

---

### 📌 Monday 05/12 — Work Split

**Zoe**

* Finish frontend, backend, and frontend JavaScript for:

  * Homepage
  * Product pages
  * Cart
  * Navbar/Footer

**Marbella**

* Finish frontend, backend, and frontend JavaScript for:

  * Signup
  * Login
  * Payment

**Vineela**

* Finish frontend, backend, and frontend JavaScript for:

  * About
  * FAQ
  * Profile

---

## 🔥 GitHub Branches

| Branch Name            | Owner     | Purpose                                        |
|------------------------|-----------|------------------------------------------------|
| `feature/zoe-html-css` | Zoe       | Home Page, Product Page, Cart, Navbar/Footer   |
| `vineela-test`         | Vineela   | FAQ, About, User Profile, Database             |
| `Marbella's-work`      | Marbella  | Payment, Login, Signup                         |
| `debug/zoe-html-css`   | Zoe       | Temporary testing/debug branch                 |
| `main`                 | All       | Final, reviewed, stable code                   |

---

## 🗃️ Folder/File Structure

```plaintext
term-project/
├── public/
│   ├── images/                      # All product/company images
│   ├── styles/                      # Separate CSS files per person
│   │   ├── home-products-cart-style.css
│   │   ├── login-style.css
│   │   ├── signUp-style.css
│   │   ├── payment-style.css
│   │   ├── navbar-footer-style.css
│   ├── js/                          # Frontend JS scripts
│   │   ├── homepage.js
│   │   ├── products.js
│   │   ├── cart.js
│   │   ├── search.js
│   │   └── payment.js
│
├── routes/                          # Express route handlers
│   ├── account.js
│   ├── homepage.js
│   ├── login.js
│   ├── payment.js
│   ├── products.js
│   ├── signup.js
│   └── cart.js
│
├── views/                           # Pug templates for dynamic rendering
│   ├── homepage.pug
│   ├── login.pug
│   ├── signup.pug
│   ├── cart.pug
│   ├── payment.pug
│   ├── products.pug
│   ├── profile.pug
│   ├── faq.pug
│   ├── about.pug
│   └── partials/
│       ├── navbar.pug
│       └── footer.pug
│
├── db.js                            # SQLite database logic file
├── store.db                         # SQLite database file
├── app.js                           # Express server setup
├── package.json                     # Project dependencies
├── README.md                        # Project overview and instructions
└── .gitignore                       # Files/folders to ignore in Git
```