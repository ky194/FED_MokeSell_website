// Initialize Supabase client
const supabaseUrl = 'https://lfnneupmzaujymixridw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxmbm5ldXBtemF1anltaXhyaWR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NjAyODgsImV4cCI6MjA1NDQzNjI4OH0.t4Ar8iB5MkNhsU8G7PTBzfV9isLPgn7tc-pk9S3A35I';  // Replace with your anon key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

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
    // Fetch product details from Supabase
    const { data, error } = await supabase
      .from('listing')  // Replace with your actual table name
      .select('*')
      .eq('listingid', listingid);

    if (error) throw error;

    if (data.length === 0) {
      console.error("Product not found");
      return;
    }

    const product = data[0];

    // Populate the product details on the page
    document.getElementById('product-title').textContent = product.listingname;
    document.getElementById('product-price').textContent = `$${product.listprice.toFixed(2)}`;
    document.getElementById('product-condition').textContent = product.listingcond;
    document.getElementById('product-category').innerHTML = `<strong>Category:</strong> ${product.catid}`; // Update if you have a category table
    document.getElementById('product-description').textContent = product.listingdesc;
    document.getElementById('seller-username').textContent = product.memberid; // Update if you have a member table

    // Set the main image
    const mainImage = document.querySelector('.main-image');
    mainImage.style.backgroundImage = `url(./image_resources/${product.image})`;
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", fetchProductDetails);
