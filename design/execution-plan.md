# 💪 Execution Plan — Final Build Sprint

## 🌟 Objective

Complete all frontend, backend, and JavaScript functionality for homepage, product page, cart, and navbar by **Sunday night** for testing and deployment on **Monday**.

---

## 🗓️ Final Weekend Build Order (Sat PM → Sun)

### ✅ **SATURDAY NIGHT (Now–Sleep) — Setup Foundation**

**Goal:** Lay the groundwork so you can move fast tomorrow.

1. **Finalize homepage + product page frontend**

- [x] Clean up spacing, text, and responsive structure
- [x] Confirm Pug structure matches layout documentation

2. **Finish navbar/footer backend session logic**

- [ ] Add middleware to check `req.session.userId`
- [ ] Handle navbar state for logged in vs. logged out
- [ ] Redirect logic for cart/profile access

3. **Complete homepage + product page backend**

- [ ] Finalize `/products` and `/products/:id` routing
- [ ] Add cookie/session support to add-to-cart
- [ ] Test database product queries

---

### ✅ **SUNDAY AFTERNOON — Core Cart Implementation, Frontend JS & Polish**

**Goal:** Build the cart experience end-to-end.

4. **Cart backend**

- [ ] `GET /cart`, `POST /cart/remove-one`
- [ ] Join cart + products table using `user_id`

5. **Cart frontend Pug + base layout**

- [ ] List items with image, name, quantity, price, total
- [ ] Show empty cart view vs. item view
- [ ] Add total price + checkout/add items buttons

6. **Cart JavaScript**

- [ ] Trashcan decrement logic
- [ ] Disable checkout button when cart is empty

**Goal:** Make everything interactive.

7. **Product page JS**

- [ ] `Add to Cart` → POST → Toast

8. **Search bar JS**

- [ ] Match/redirect to product → toast if not found

9. **Finalize homepage/product CSS**

- [ ] Product card spacing, button styles, hover states

10. **Finish cart styling**

- [ ] Stack buttons on mobile
- [ ] Font/layout polish

---

### ✅ **SUNDAY EVENING — Testing + Edge Cases**

**Goal:** Catch bugs, test flows, and finalize.

11. **Test all user flows**

- [ ] Logged in / logged out
- [ ] Add to cart + auto-redirect
- [ ] Empty cart handling
- [ ] Session behavior and redirect paths

12. **Toast logic check**

- [ ] Add-to-cart
- [ ] Login redirect
- [ ] Checkout complete
- [ ] Logout

13. **UX Cleanup**

- [ ] Button spacing
- [ ] Toast placement
- [ ] Disable/enable conditions

14. **Push + Commit to GitHub**

- [ ] Regular commits per milestone
- [ ] Push final state by Sunday night

---

## 🔄 Tips

* Focus on **cart backend first** — it's your heaviest task
* Write **markup first**, then attach JS
* Use **console logs** to debug JS fast
* Commit often and test each piece in isolation

---

You got this ✨