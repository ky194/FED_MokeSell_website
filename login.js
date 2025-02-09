// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Event listener for login button
  document.getElementById("login-btn").addEventListener("click", () => {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const loginForm = document.getElementById("login-form");
      const animationContainer = document.getElementById("animation-container");

      if (!email || !password) {
          alert("Please enter your email and password.");
          return;
      }

      // // Hide the login form and show the animation
      // loginForm.style.display = "none";
      // animationContainer.style.display = "block";

      // // Load Lottie animation
      // const animation = lottie.loadAnimation({
      //     container: animationContainer,
      //     renderer: "svg",
      //     loop: true,
      //     autoplay: true,
      //     path: "https://assets2.lottiefiles.com/packages/lf20_x62chJ.json"
      // });

      // // Wait for 10 seconds before redirecting
      // setTimeout(() => {
      //     window.location.href = "index.html";
      // }, 10000); // 10 seconds
  });

  // Event listener for forgot password button
  document.getElementById("login-btn").addEventListener("click", () => {
    alert("Redirecting to Home Page...");
    window.location.href = "index.html";
});

  // Event listener for forgot password button
  document.getElementById("forgot-password-btn").addEventListener("click", () => {
      alert("Redirecting to password recovery...");
      window.location.href = "forgotpw.html";
  });
});

