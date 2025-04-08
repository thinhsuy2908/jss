let products = [
    { id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "món ăn dân tộc Mông" },
    { id: 2, name: "mứt", price: 80000, quantity: 21, category: "món ăn dân tộc Kinh" },
    { id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "món ăn dân tộc Mông" },
    { id: 4, name: "bánh đậu xanh", price: 60000, quantity: 30, category: "món ăn dân tộc Kinh" }
  ];
  
  let cart = [];
  
  function showByCategory() {
    const category = prompt("Nhập tên danh mục muốn xem (vd: món ăn dân tộc Mông):");
    const result = products.filter(p => p.category === category);
    if (result.length === 0) {
      alert("Không có sản phẩm trong danh mục này.");
    } else {
      console.table(result);
    }
  }
  
  function buyProduct() {
    const id = parseInt(prompt("Nhập ID sản phẩm muốn mua:"));
    const product = products.find(p => p.id === id);
    if (!product) {
      alert("Sản phẩm không tồn tại.");
      return;
    }
  
    const amount = parseInt(prompt(`Sản phẩm: ${product.name} - Còn: ${product.quantity}. Nhập số lượng muốn mua:`));
    if (amount > product.quantity || amount <= 0) {
      alert("Số lượng không hợp lệ hoặc không đủ hàng.");
      return;
    }
  
    product.quantity -= amount;
  
    const itemInCart = cart.find(item => item.id === id);
    if (itemInCart) {
      itemInCart.quantity += amount;
    } else {
      cart.push({ id: product.id, name: product.name, price: product.price, quantity: amount });
    }
  
    alert(`Đã thêm ${amount} ${product.name} vào giỏ hàng.`);
  }
  
  function sortByPrice() {
    const option = prompt("Chọn sắp xếp theo giá:\n1. Tăng dần\n2. Giảm dần");
    let sorted;
  
    if (option === "1") {
      sorted = [...products].sort((a, b) => a.price - b.price);
    } else if (option === "2") {
      sorted = [...products].sort((a, b) => b.price - a.price);
    } else {
      alert("Lựa chọn không hợp lệ.");
      return;
    }
  
    console.table(sorted);
  }
  
  function checkout() {
    if (cart.length === 0) {
      alert("Giỏ hàng trống.");
      return;
    }
  
    let total = 0;
    cart.forEach(item => total += item.price * item.quantity);
    console.table(cart);
    alert(`Tổng tiền thanh toán: ${total.toLocaleString()} VND`);
  }
  
  function menu() {
    let running = true;
  
    while (running) {
      const choice = prompt(
        "MENU:\n" +
        "1. Hiển thị sản phẩm theo danh mục\n" +
        "2. Mua sản phẩm theo ID\n" +
        "3. Sắp xếp sản phẩm theo giá\n" +
        "4. Xem giỏ hàng và thanh toán\n" +
        "5. Thoát"
      );
  
      switch (choice) {
        case "1":
          showByCategory();
          break;
        case "2":
          buyProduct();
          break;
        case "3":
          sortByPrice();
          break;
        case "4":
          checkout();
          break;
        case "5":
          alert("Cảm ơn bạn đã sử dụng chương trình.");
          running = false;
          break;
        default:
          alert("Lựa chọn không hợp lệ.");
      }
    }
  }
  
  menu();
  