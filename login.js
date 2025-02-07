// Add event listeners for buttons
document.getElementById("login-btn").addEventListener("click", () => {
  const email = document.getElementById("email").value; 
  const password = document.getElementById("password").value; 

  if (email && password) {
      // Mock login action (replace with actual API logic)
      alert(`Logged in as: ${email}`);
      window.location.href = "index.html"; // Redirect to dashboard or home page
  } else {
      alert("Please enter your email and password.");
  }
});

document.getElementById("forgot-password-btn").addEventListener("click", () => {
  alert("Redirecting to password recovery...");
  window.location.href = "forgotpw.html";
});
  