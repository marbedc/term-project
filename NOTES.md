# Zoe's Notes

## Current Branch
feature/zoe-html-css

## Week 1 Goals
- Home page static HTML/CSS
- Dynamic products (Pug, products.js, database)
- Shared navbar
- Styles.css setup

## Debug Branch
debug/zoe-html-css

## To Do
[ ] Reorganize files as per final structure
[ ] Set up dynamic products route
[ ] Update package.json "main" to "app.js"
[ ] Rename routes:
    - account.js → users.js
    - signup.js → combine into auth.js
[ ] Change line 25 in app.js:
    - const db = new sqlite3.Database('./data/database.sqlite', (err) => {

## Reminders
- Update package.json "main" from "index.js" to "app.js" later

## Work Log (Zoe)
**2025-05-01**
- Reviewed existing team files.
- Confirmed need to reorganize files in feature branch.
- Installed Pug (`npm install pug`).
- Added Pug view engine setup to app.js.

