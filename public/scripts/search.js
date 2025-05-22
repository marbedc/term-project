console.log("search.js loaded");

document.getElementById("search-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = document.getElementById("search-input").value.trim().toLowerCase();
  
    try {
      const res = await fetch("/api/products"); // You need this route to return all products
      const products = await res.json();
  
      const match = products.find(p => p.name.toLowerCase() === query);
  
      if (match) {
        window.location.href = `/products/${match.id}`;
      } else {
        // Show toast
        const toast = document.createElement("div");
        toast.textContent = "Product not found.";
        toast.className = "toast";
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
      }
    } catch (err) {
      console.error("Search error", err);
    }
  });  