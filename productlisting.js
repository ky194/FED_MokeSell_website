// Initialize restDB API URL and Key
const apiUrl = 'https://fedassgn2-16f0.restdb.io/rest/listing';  // restDB API URL
const apiKey = '67a880d799fb604636e983b6';  // Your restDB API Key

// Fetch product details for a single product
async function fetchProductDetails() {
  // Get the product ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const listingid = urlParams.get('id');

  if (!listingid) {
    console.error("No product ID found in URL");
    return;
  }

  try {
    // Fetch product details from restDB using the GET method
    const response = await fetch(`${apiUrl}/${listingid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': '67a880d799fb604636e983b6'  
      }
    });

    const product = await response.json();

    if (!response.ok) {
      throw new Error('Error fetching product data');
    }

    // Populate the product details on the page
    document.getElementById('product-title').textContent = product.listingname;
    document.getElementById('product-price').textContent = `$${product.listprice.toFixed(2)}`;
    document.getElementById('product-condition').textContent = product.listingcond;
    document.getElementById('product-category').innerHTML = `<strong>Category:</strong> ${product.catid}`; // Update if you have a category table
    document.getElementById('product-description').textContent = product.listingdesc;
    document.getElementById('seller-username').textContent = product.memberid; // Update if you have a member table

    // Set the main image
    const mainImage = document.querySelector('.main-image');
    mainImage.style.backgroundImage = `url(${product.listingimg})`; // Update with the correct field for the image URL

  } catch (error) {
    console.error("Error fetching product details:", error);
  }
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", fetchProductDetails);
