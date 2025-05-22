document.getElementById('add-to-cart')?.addEventListener('click', () => {
    const productId = document.getElementById('add-to-cart').dataset.productId;
  
    fetch('/cart/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId })
    }).then(res => {
      if (res.ok) alert('Item added to cart!');
      else alert('Error adding to cart');
    });
  });  