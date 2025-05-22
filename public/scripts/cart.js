document.addEventListener('DOMContentLoaded', () => {
  const checkoutBtn = document.getElementById('checkout-btn');
  const hasItems = document.querySelectorAll('.cart-item').length > 0;

  if (!hasItems) {
    checkoutBtn.disabled = true;
    checkoutBtn.style.opacity = '0.5';
    checkoutBtn.style.cursor = 'not-allowed';
  }

  checkoutBtn?.addEventListener('click', () => {
    window.location.href = '/payment';
  });

  document.querySelectorAll('.trash-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = btn.dataset.productId;
      fetch('/cart/remove-one', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId })
      }).then(() => location.reload());
    });
  });
});