// Function to display products using hardcoded data
function fetchProducts() {
    // Hardcoded product data
    const products = [
      { id: 1, image: "https://via.placeholder.com/150", name: "Product A", price: 25.99, type: "Second Hand" },
      { id: 2, image: "https://via.placeholder.com/150", name: "Product B", price: 19.99, type: "Second Hand" },
      { id: 3, image: "https://via.placeholder.com/150", name: "Product C", price: 12.49, type: "Second Hand" },
      { id: 4, image: "https://via.placeholder.com/150", name: "Product D", price: 45.00, type: "Second Hand" },
      { id: 5, image: "https://via.placeholder.com/150", name: "Product E", price: 30.75, type: "Second Hand" },
    ];
  
    // Call the function to display the products
    displayProducts(products);
  }
  
  // Function to display products in the grid
  function displayProducts(products) {
    const productGrid = document.getElementById("product-grid");
  
    products.forEach((product) => {
      // Create a product card element
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" />
        <h3 class="product-title">${product.name}</h3>
        <p class="product-price">$${product.price}</p>
        <p class="product-type">${product.type}</p>
      `;
  
      // Add click functionality to navigate to a product page
      productCard.addEventListener("click", () => {
        window.location.href = `product.html?id=${product.id}`;
      });
  
      // Append the product card to the grid
      productGrid.appendChild(productCard);
    });
  }
  
  // Call the function to fetch (hardcoded) products
  fetchProducts();
  