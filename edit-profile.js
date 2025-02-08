document.getElementById("change-pfp").addEventListener("click", () => {
    alert("Sorry! Unfortunately, this feature isn't available yet!");
  });

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("edit-profile-form").addEventListener("submit", (event) => {
      event.preventDefault(); // stops form from being submitted first
  
      alert("Details updated and saved."); 
  
      // delay to show alert
      setTimeout(() => {
        event.target.submit(); // submits form
        window.location.href = "index.html"; // redirects to index.html
      }, 100); 
    });
  });
  
