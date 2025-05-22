# ✅ Teammate Integration Notes

This file summarizes the changes reverted and tasks assigned to each teammate during final project cleanup.

---

## 👤 Marbella — Signup, Login, Payment

### 🔧 `login.js`
- Reverted to original version.
- You must:
  - Add POST route to validate user credentials.
  - On success: `req.session.userId = user.id`
  - Redirect to homepage or profile.
  - On failure: redirect with error message or re-render login with feedback.

### 🔧 `login.pug`
- Reverted to original layout.
- Make sure:
  - `form` uses `action="/login" method="POST"`
  - Use `include partials/navbar` for consistency.
  - Add error messaging if needed.

### 🔧 `signup.js` (if applicable)
- After successful signup, add:
  ```js
  req.session.userId = newUser.id;
  ```

### 🔧 `payment.js`
- Add session check at the top:
  ```js
  if (!req.session.userId) return res.redirect('/login');
  ```

---

## 👤 Vineela — Profile, FAQ, About

### 🔧 `account.js`
- Reverted to original placeholder logic.
- You must:
  - Check for `req.session.userId`
  - Query database:
    ```js
    db.get('SELECT * FROM users WHERE id = ?', [req.session.userId], ...)
    ```
  - Pass `user` object to Pug template.

### 🔧 `account.pug`
- Reverted to original shell.
- Add:
  ```pug
  h1 Hello, #{user.name}!
  p Email: #{user.email}
  p User ID: #{user.id}
  ```
  once `user` data is passed in.

### 🔧 `faq.pug`, `about.pug`
- Make sure to use `include partials/navbar` to benefit from session logic.

---

## 🔁 Shared Responsibilities

### ✅ Navbar (All Pages)
- `navbar.pug` now conditionally shows:
  - If logged in → Profile, Cart, Logout
  - If logged out → Cart, Login, Sign Up
- Ensure all pages use:
  ```pug
  include partials/navbar
  ```

### ⚠️ IMPORTANT: You MUST include the search script on every page that uses the navbar:
  ```pug
script(src='/scripts/search.js')
  ```

---

## 🔍 To Be Implemented Later (By Zoe)

### 🚫 Route Protection
- `/cart`, `/account` should check `req.session.userId` before rendering.

### 🔍 Search Logic
- Search bar exists in navbar but needs:
  - Backend search route (`search.js`)
  - Logic to find product and redirect or show toast.

---