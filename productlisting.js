
// const products = [
//    { id: 1, image: "https://via.placeholder.com/150", name: "Product A", price: 25.99, type: "Second Hand" },
//   { id: 2, image: "https://via.placeholder.com/150", name: "Product B", price: 19.99, type: "Second Hand" },
//    { id: 3, image: "https://via.placeholder.com/150", name: "Product C", price: 12.49, type: "Second Hand" },
//  ];
  
  function fetchProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));
  
    const product = products.find((p) => p.id === productId);
  
    if (!product) {
      alert("Product not found!");
      return;
    }
  
    document.querySelector(".product-title").textContent = product.name;
    document.querySelector(".product-price").textContent = `$${product.price}`;
    document.querySelector(".product-type").textContent = product.type;
    document.querySelectorAll(".product-image").forEach((img) => {
      img.src = product.image;
    });
  }
  
  function setupBackButton() {
    const backButton = document.getElementById("back-button");
    backButton.addEventListener("click", () => {
      window.location.href = "index.html"; // Replace with your homepage/listings page URL
    });
  }
  
  function initProductPage() {
    fetchProductDetails();
    setupBackButton();
  }
  
  document.addEventListener("DOMContentLoaded", initProductPage);
  