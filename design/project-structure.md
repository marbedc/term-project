# 🗂️ Term Project — Project Structure & Branches

## 🔥 Timeline Recommendation

| Date         | Milestone                                                |
|--------------|-----------------------------------------------------------|
| Monday 05/12 | Finalize all frontend design and layout (Pug + CSS)       |
| Friday 05/16 | Complete all backend functionality (routes + DB)          |
| Monday 05/19 | Finish frontend JavaScript, test, debug, and deploy       |
| Thursday 05/22 | Present the completed project                           |

---

### 📌 Monday 05/12 — Work Split

**Zoe**
- Convert all HTML pages to Pug
- Add shared navbar and cart layout
- Polish final Pug structure and CSS styles

**Vineela**
- Finalize FAQ, About, and User Profile (Pug + CSS)
- Create and initialize the `database.sqlite` file

**Marbella**
- Test backend functionality for login, signup, and payment pages using static/mock data

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
│   │   ├── home-products-style.css
│   │   ├── login-style.css
│   │   ├── signUp-style.css
│   │   ├── payment-style.css
│   ├── js/                          # Frontend JS scripts (search, cart, etc.) — will add files later
│
├── routes/                          # Express route handlers — will add all routes later
│   ├── account.js
│   ├── homepage.js
│   ├── login.js
│   ├── payment.js
│   ├── products.js
│   └── signup.js
│
├── views/                           # Pug templates for dynamic rendering
│   ├── home.pug
│   ├── login.pug
│   ├── signup.pug
│   ├── cart.pug
│   ├── payment.pug
│   ├── product_detail.pug
│   ├── profile.pug
│   ├── faq.pug
│   ├── about.pug
│   └── partials/
│       ├── navbar.pug
│       └── footer.pug
│
├── database.sqlite                  # SQLite database (stored in root)
├── app.js                           # Express server setup
├── package.json                     # Project dependencies
├── README.md                        # Project overview and instructions
└── .gitignore                       # Files/folders to ignore in Git
```