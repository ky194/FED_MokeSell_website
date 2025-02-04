// script.js

// Add event listeners for buttons
document.getElementById("login-btn").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username && password) {
      // Mock login action (replace with actual API logic)
      alert(`Logged in as: ${username}`);
      window.location.href = "/dashboard"; // Redirect to dashboard or home page
    } else {
      alert("Please enter your username and password.");
    }
  });
  
  document.getElementById("forgot-password-btn").addEventListener("click", () => {
    alert("Redirecting to password recovery...");
    window.location.href = "/forgot-password"; // Replace with actual forgot-password page URL
  });
  