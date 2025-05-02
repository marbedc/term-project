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
[ ] Merge the two CSS files into styles.css in public/css/
[ ] Remove test route (`/test`) before final submission

## Reminders
- Update package.json "main" from "index.js" to "app.js" later
- All temporary placeholder routes should be removed or replaced with real functionality before final submission

## Database Notes (Zoe)
- Currently using: './data/database.sqlite'
- This path follows the professor's required structure.
- Vineela may be using a different database path in her branch.
- Before merging branches (Week 2+), confirm the team agrees on a single shared database path.

## Work Log (Zoe)
**2025-05-01**
- Reviewed existing team files.
- Confirmed need to reorganize files in feature branch.
- Installed Pug (`npm install pug`).
- Added Pug view engine setup to app.js.
- Commented out original database path (Vineela) and added new path './data/database.sqlite' (Zoe).
- Created test.pug and added a test route (`/test`) to verify Pug rendering.
- Updated account.js to import the database correctly from app.js.
- Added temporary placeholder routes to homepage.js, login.js, payment.js, signup.js, and products.js to prevent Express router errors.
- Successfully tested app startup and verified Pug works at `http://localhost:3000/test`.