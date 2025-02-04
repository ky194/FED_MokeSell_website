document.addEventListener("DOMContentLoaded", function () {
  const reviewsContainer = document.getElementById("reviews-container");
  const loadMoreButton = document.getElementById("load-more");

  let reviews = [
      { user: "seller1", rating: 4, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { user: "seller2", rating: 5, text: "Suspendisse quis mauris eu ipsum ultricies bibendum." },
      { user: "seller3", rating: 5, text: "Excellent seller, would buy again!" },
      { user: "seller4", rating: 4, text: "Fast shipping, item as described." }
  ];

  let currentReviewIndex = 2;

  function renderReviews(start, end) {
      for (let i = start; i < end; i++) {
          if (i >= reviews.length) break;
          const review = document.createElement("div");
          review.classList.add("review");

          review.innerHTML = `
              <div class="review-header">
                  <img src="user-avatar.png" class="review-avatar" alt="User">
                  <strong>${reviews[i].user}</strong>
                  <span class="review-rating">${"⭐".repeat(reviews[i].rating)}</span>
              </div>
              <p>${reviews[i].text}</p>
          `;

          reviewsContainer.appendChild(review);
      }
  }

  renderReviews(0, currentReviewIndex);

  loadMoreButton.addEventListener("click", function () {
      renderReviews(currentReviewIndex, currentReviewIndex + 2);
      currentReviewIndex += 2;

      if (currentReviewIndex >= reviews.length) {
          loadMoreButton.style.display = "none";
      }
  });
});
