// Initialize Supabase client
const supabaseUrl = 'https://lfnneupmzaujymixridw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxmbm5ldXBtemF1anltaXhyaWR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NjAyODgsImV4cCI6MjA1NDQzNjI4OH0.t4Ar8iB5MkNhsU8G7PTBzfV9isLPgn7tc-pk9S3A35I';  // Replace with your anon key

// Initialize Supabase client after loading the library
document.addEventListener('DOMContentLoaded', function () {
    const supabase = supabase.createClient(supabaseUrl, supabaseKey);

    // Fetch product details for all products
    async function fetchProductDetails() {
        try {
            const { data, error } = await supabase
                .from('listing')  // Replace with your actual table name
                .select('*');
            
            if (error) throw error;

            const listingsGrid = document.querySelector(".listings-grid");
            listingsGrid.innerHTML = ''; // Clear existing content

            // Loop through each product and append a new item card
            data.forEach(product => {
                const itemCard = document.createElement('a');
                itemCard.href = `productlisting.html?id=${product.listingid}`; // Link to product details page

                itemCard.innerHTML = `
                    <div class="item-card">
                        <img src="./image_resources/${product.image}" alt="${product.listingname}" class="item-image">
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

    // Call the function to fetch data once the page loads
    fetchProductDetails();
});
