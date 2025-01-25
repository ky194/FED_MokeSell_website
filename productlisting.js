// Hardcoded data for demonstration
const products = [
    { id: 1, image: "https://via.placeholder.com/150", name: "Product A", price: 25.99, type: "Second Hand" },
    { id: 2, image: "https://via.placeholder.com/150", name: "Product B", price: 19.99, type: "Second Hand" },
    { id: 3, image: "https://via.placeholder.com/150", name: "Product C", price: 12.49, type: "Second Hand" },
  ];
  
  // Fetch and display the product details dynamically
  function fetchProductDetails() {
    // Get product ID from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));
  
    // Find the product details (replace this with an API fetch if needed)
    const product = products.find((p) => p.id === productId);
  
    if (!product) {
      alert("Product not found!");
      return;
    }
  
    // Populate the product details on the page
    document.querySelector(".product-title").textContent = product.name;
    document.querySelector(".product-price").textContent = `$${product.price}`;
    document.querySelector(".product-type").textContent = product.type;
    document.querySelectorAll(".product-image").forEach((img) => {
      img.src = product.image;
    });
  }
  
  // Navigate back to the listings page when the back arrow is clicked
  function setupBackButton() {
    const backButton = document.getElementById("back-button");
    backButton.addEventListener("click", () => {
      window.location.href = "index.html"; // Replace with your homepage/listings page URL
    });
  }
  
  // Initialize the product page
  function initProductPage() {
    fetchProductDetails();
    setupBackButton();
  }
  
  // Run the initialization on page load
  document.addEventListener("DOMContentLoaded", initProductPage);
  