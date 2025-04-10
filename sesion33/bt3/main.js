function filterItems() {
    const selectedCategory = document.getElementById("categorySelect").value;
    const items = document.querySelectorAll("#foodList li");
  
    items.forEach(item => {
      const text = item.innerText;
      const category = text.split("Danh mục:")[1].trim();
  
      if (selectedCategory === "all" || category === selectedCategory) {
        item.style.display = "list-item";
      } else {
        item.style.display = "none";
      }
    });
  }
  