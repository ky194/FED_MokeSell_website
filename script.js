// Initialize restDB API URL and Key
const apiUrl = 'https://fedassgn2-16f0.restdb.io/rest/listing';  // restDB API URL
const apiKey = '67a880d799fb604636e983b6';  // Your restDB API Key

// Fetch all product details
async function fetchProductDetails() {
  try {
    // Fetch product details from restDB using the GET method
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': apiKey  // Include the API Key for authorization
      }
    });

    const products = await response.json();

    if (!response.ok) {
      throw new Error('Error fetching product data');
    }

    const listingsGrid = document.querySelector(".listings-grid");
    listingsGrid.innerHTML = ''; // Clear existing content

    // Loop through each product and create an item card
    products.forEach(product => {
      const itemCard = document.createElement('a');
      itemCard.href = `productlisting.html?id=${product._id}`; // Link to product details page

      itemCard.innerHTML = `
        <div class="item-card">
          <img src="${product.listingimg}" alt="${product.listingname}" class="item-image"> <!-- Use the listingimg field here -->
          <div class="item-title">${product.listingname}</div>
          <div class="item-price">$${product.listprice.toFixed(2)}</div>
          <div class="item-condition">${product.listingcond}</div>
        </div>
      `;
      listingsGrid.appendChild(itemCard);
    });
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
}

// Function to search and filter products based on input
function searchProducts(query) {
  const listingsGrid = document.querySelector(".listings-grid");
  const cards = listingsGrid.querySelectorAll(".item-card");

  cards.forEach(card => {
    const title = card.querySelector('.item-title').textContent.toLowerCase();
    if (title.includes(query.toLowerCase())) {
      card.style.display = 'block'; // Show card if query matches title
    } else {
      card.style.display = 'none'; // Hide card if query does not match
    }
  });
}

// Add event listener for the search input when the user presses "Enter"
document.querySelector('.search-bar').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {  // Check if "Enter" is pressed
    const query = e.target.value;  // Get the query from the input
    searchProducts(query);  // Call the search function with the entered query
  }
});

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", fetchProductDetails);
