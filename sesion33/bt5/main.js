document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("input[type='text']");
    const searchButton = document.querySelector("button.btn-success");
    const cards = document.querySelectorAll(".card");
  
    searchButton.addEventListener("click", function () {
      const keyword = searchInput.value.toLowerCase().trim();
  
      cards.forEach((card) => {
        const title = card.querySelector(".card-title").innerText.toLowerCase();
        const description = card.querySelector(".card-text").innerText.toLowerCase();
        const matches = title.includes(keyword) || description.includes(keyword);
  
        card.parentElement.style.display = matches ? "block" : "none";
      });
    });
  });
  