# 🗂️ Stellar E-Commerce — Project Structure & Branches

## 🔥 GitHub Branches

| Branch                             | Purpose                                     | Includes                                               | Notes                                                                         |
| ---------------------------------- | ------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------- |
| `main`                             | Final, reviewed code                        | All stable files                                       | No direct edits. Team merges completed work here.                             |
| `feature/layout`                   | Frontend layout, HTML/CSS, Express skeleton | `public/`, `app.js`, placeholder `routes/`, `/design/` | Where team builds and refines site structure & static pages.                  |
| `feature/backend`                  | Backend development                         | `routes/`, `data/`, `views/`, dynamic logic            | Where login, products, cart, and other backend logic are added/tested.        |
| `feature/frontend-js` *(optional)* | JavaScript enhancements                     | `public/js/`                                           | If JavaScript work (like search/cart updates) might conflict with other work. |

---

# 🔄 Branch File Structure Guide

This explains which files and folders belong to each GitHub branch for clear teamwork and clean Git management.

---

## 🔥 `feature/layout`

**Purpose:** Site layout, HTML/CSS pages, initial Express skeleton.

**Files/Directories to edit or add:**

```plaintext
public/
  css/
  images/
  home.html
  about.html
  faq.html
  login.html
  signup.html
  profile.html
  cart.html
  payment.html
  order_confirmation.html
  product.html

design/
  homepage-full-layout.md
  product-page-full-layout.md
  sitemap.txt
  flowcharts/

app.js   (basic Express setup for static file serving)
```

**Notes:**

* `app.js` here only serves static files using `express.static()`.
* No backend routes yet.

---

## 🔥 `feature/backend`

**Purpose:** All backend development (authentication, products, cart, checkout).

**Files/Directories to edit or add:**

```plaintext
routes/
  auth.js
  products.js
  users.js
  cart.js

data/
  database.sqlite

views/   (optional if using a view engine like Pug)
  products.pug
  product_detail.pug
  partials/
    navbar.pug

app.js   (backend logic setup: route imports, database connections, session management)
```

**Notes:**

* `app.js` will now handle backend logic (routes, session middleware, database).
* Data fetching and authentication happen here.

---

## 🔥 `feature/frontend-js`

**Purpose:** Client-side JavaScript for dynamic features (search bar, cart updates).

**Files/Directories to edit or add:**

```plaintext
public/js/
  search.js
  cart.js
```

**Notes:**

* Enhances frontend interactivity without server reloads.
* Search bar functionality and cart add/update logic happen here.

---

# ✅ Summary

Each branch has a clear area of responsibility:

* `feature/layout` → Site structure, visual layout, basic static setup.
* `feature/backend` → Routes, database, session handling, user/cart/product management.
* `feature/frontend-js` → Search bar, cart updates, dynamic interactions.

This division ensures a smooth, clean workflow with minimal conflicts.


## 🗃️ Folder/File Structure

```plaintext
term-project/
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── home.html
│   ├── about.html
│   ├── faq.html
│   ├── login.html
│   ├── signup.html
│   ├── profile.html
│   ├── cart.html
│   ├── payment.html
│   ├── order_confirmation.html
│   ├── product.html  (dynamic content)
│
├── routes/
│   ├── auth.js
│   ├── products.js
│   ├── users.js
│   ├── cart.js
│
├── views/    (if using Pug or template engine later)
│   ├── products.pug
│   ├── product_detail.pug
│   ├── partials/
│   │   └── navbar.pug
│
├── data/
│   └── database.sqlite
│
├── design/
│   ├── homepage-full-layout.md
│   ├── product-page-full-layout.md
│   ├── sitemap.txt
│   ├── flowcharts/
│
├── app.js
├── package.json
├── README.md
└── .gitignore
```

---

## 📝 File/Folder Purpose Quick Notes

* `public/` → Frontend HTML/CSS/JS/images.
* `routes/` → Express routes (backend logic).
* `views/` → Dynamic page templates (optional/future).
* `data/` → Database (SQLite file).
* `design/` → Site maps, flowcharts, planning documents.
* `app.js` → Express server setup.
* `package.json` → Project dependencies & scripts.

---

## 👥 Branch Responsibilities

| Branch                | Who typically works here                                  |
| --------------------- | --------------------------------------------------------- |
| `feature/layout`      | Zoe (site structure/layout), Marbella & Vineela as needed |
| `feature/backend`     | Zoe, Marbella, Vineela                                    |
| `feature/frontend-js` | Zoe (or whoever adds JS search/cart logic)                |

---

## ✅ Summary

Your branch structure and folder structure are designed for:

* Easy collaboration
* Clear separation of frontend, backend, and design/planning
* Simple scaling as the project grows

# 🔄 Team Work Split and Timeline (Final 1.5 Weeks)

## 🔥 Recommended Independent Work Split

| Team Member        | Primary Branch                  | Tasks                                                                                              | Focus                                                                  |
| ------------------ | ------------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Zoe                | `feature/layout` + lead backend | Finish all final HTML/CSS/pages, basic Express setup, then start dynamic product loading (backend) | Finish **structure** early so others can plug backend/frontend into it |
| Marbella           | `feature/backend`               | Routes: **auth.js** (login/signup), **cart.js** (cart logic)                                       | Focus on **authentication and cart API endpoints**                     |
| Vineela            | `feature/backend`               | Routes: **products.js** (product search/detail), **users.js** (profile info, orders)               | Focus on **product listing and user profile backend**                  |
| (optional if time) | `feature/frontend-js`           | JS for **search bar**, **cart update icon**                                                        | Can be added in parallel once basic backend is connected               |

---

## 🔥 Timeline Recommendation

| Timeframe     | Goal                                                                          |
| ------------- | ----------------------------------------------------------------------------- |
| Day 1–2       | Finish all static HTML pages (Zoe, feature/layout)                            |
| Day 2–4       | Marbella and Vineela build backend routes in parallel (feature/backend)       |
| Day 4–6       | Connect backend to front-end (dynamic product grid, login flow, cart updates) |
| Day 6–8       | Add search bar JS, cart JS if possible                                        |
| Day 8–10      | Full integration testing, fix bugs                                            |
| Last 1–2 days | Polish, write final README, deploy on Glitch                                  |

---

## 🚀 Key to Moving Fast

* Everyone has a branch to work on separately.
* **Daily GitHub commits/pushes** to show progress.
* **Small, focused pull requests** (e.g., just auth, just product search).
* **No one waiting around** — work in parallel!

---

# ✅ Summary

* Zoe: layout + backend app.js + products connection
* Marbella: auth + cart backend routes
* Vineela: products + users backend routes
* (Optional) All: frontend JavaScript after base is stable
* **Daily check-ins** to unblock each other

# 📋 Team Task Checklist Template

## Zoe
- [ ] Finish `public/` HTML/CSS pages (`home.html`, `about.html`, `faq.html`, `login.html`, `signup.html`, `profile.html`, `cart.html`, `payment.html`, `product.html`)
- [ ] Set up `app.js` to serve static files (`express.static`)
- [ ] Start backend work: dynamic product loading
- [ ] Connect frontend product grid to `/products` backend route

## Marbella
- [ ] Build `routes/auth.js` (Login, Registration functionality)
- [ ] Build `routes/cart.js` (Add to cart, View cart routes)
- [ ] Set up user authentication (sessions)
- [ ] Test login/logout flow

## Vineela
- [ ] Build `routes/products.js` (Load products, search functionality)
- [ ] Build `routes/users.js` (Profile info, purchase history)
- [ ] Test product search flow and profile page functionality

## (Optional) Frontend JavaScript Tasks (After Backend Setup)
- [ ] Create `public/js/search.js` (Search bar behavior, redirect to product detail)
- [ ] Create `public/js/cart.js` (Update cart count after adding items)

---

# 🚀 Final Integration Steps
- [ ] Connect frontend to backend (test end-to-end flows)
- [ ] Polish design (styling, responsiveness)
- [ ] Write and polish final `README.md`
- [ ] Deploy fully working project to Glitch