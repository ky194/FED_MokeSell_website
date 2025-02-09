// Add event listener for "Create Account" button
document.getElementById("createaccount-btn").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const reenterPassword = document.getElementById("reenter-password").value;

    // Check if all fields are filled
    if (!username || !email || !password || !reenterPassword) {
        alert("Please fill in all fields.");
        return;
    }

    // Check if passwords match
    if (password !== reenterPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Mock account creation action (replace with actual API logic)
    alert(`Account created successfully for: ${username} (${email})`);
    
    // Redirect to home page or login page after account creation
    window.location.href = "index.html";

      // Event listener for forgot password button
    document.getElementById("createaccount-btn").addEventListener("click", () => {
        alert("Creating your account...");
        window.location.href = "index.html";
    });
});
