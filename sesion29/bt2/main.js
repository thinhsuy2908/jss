let productList = [];
function addProduct() {
    let id = Number(prompt("Nhập ID sản phẩm:"));
    if (productList.some(p => p.id === id)) {
        alert("ID đã tồn tại. Vui lòng nhập ID khác.");
        return;
    }
    let name = prompt("Nhập tên sản phẩm:");
    let price = Number(prompt("Nhập giá sản phẩm:"));
    let category = prompt("Nhập danh mục sản phẩm:");
    let quantity = Number(prompt("Nhập số lượng sản phẩm:"));

    let product = { id, name, price, category, quantity };
    productList.push(product);
    alert("Thêm sản phẩm thành công.");
}

function showAllProducts() {
    if (productList.length === 0) {
        alert("Chưa có sản phẩm nào.");
        return;
    }

    let output = productList.map((p, i) => 
        `${i + 1}. ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}, Danh mục: ${p.category}, SL: ${p.quantity}`
    ).join("\n");
    alert("Danh sách sản phẩm:\n" + output);
}
function showProductById() {
    let id = Number(prompt("Nhập ID sản phẩm cần xem:"));
    let product = productList.find(p => p.id === id);
    if (product) {
        alert(`Chi tiết sản phẩm:\nID: ${product.id}\nTên: ${product.name}\nGiá: ${product.price}\nDanh mục: ${product.category}\nSố lượng: ${product.quantity}`);
    } else {
        alert("Không tìm thấy sản phẩm.");
    }
}
function updateProductById() {
    let id = Number(prompt("Nhập ID sản phẩm cần cập nhật:"));
    let index = productList.findIndex(p => p.id === id);
    if (index === -1) {
        alert("Không tìm thấy sản phẩm.");
        return;
    }
    let name = prompt("Tên mới :");
    let price = prompt("Giá mới:");
    let category = prompt("Danh mục mới :");
    let quantity = prompt("Số lượng mới:");
    if (name) productList[index].name = name;
    if (price) productList[index].price = Number(price);
    if (category) productList[index].category = category;
    if (quantity) productList[index].quantity = Number(quantity);
    alert("Cập nhật sản phẩm thành công.");
}
function deleteProductById() {
    let id = Number(prompt("Nhập ID sản phẩm cần xóa:"));
    let index = productList.findIndex(p => p.id === id);
    if (index === -1) {
        alert("Không tìm thấy sản phẩm.");
        return;
    }
    let confirmDelete = confirm(`Bạn có chắc muốn xóa sản phẩm: ${productList[index].name}?`);
    if (confirmDelete) {
        productList.splice(index, 1);
        alert("Đã xóa sản phẩm.");
    }
}
function filterByPriceRange() {
    let min = Number(prompt("Nhập giá thấp nhất:"));
    let max = Number(prompt("Nhập giá cao nhất:"));
    let filtered = productList.filter(p => p.price >= min && p.price <= max);
    if (filtered.length === 0) {
        alert("Không có sản phẩm nào trong khoảng giá này.");
        return;
    }
    let output = filtered.map((p, i) =>
        `${i + 1}. ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}, Danh mục: ${p.category}, SL: ${p.quantity}`
    ).join("\n");

    alert("Kết quả lọc:\n" + output);
}
function Menu() {
    let choice;
    do {
        choice = Number(prompt(
            "=== Quản Lý Sản Phẩm ===\n" +
            "1. Thêm sản phẩm\n" +
            "2. Hiển thị tất cả sản phẩm\n" +
            "3. Hiển thị chi tiết theo ID\n" +
            "4. Cập nhật sản phẩm theo ID\n" +
            "5. Xóa sản phẩm theo ID\n" +
            "6. Lọc sản phẩm theo khoảng giá\n" +
            "7. Thoát\n\n" +
            "Nhập lựa chọn của bạn:"
        ));

        switch (choice) {
            case 1: 
            addProduct()
            break;
            case 2: showAllProducts()
            break;
            case 3: 
            showProductById(); 
            break;
            case 4:
            updateProductById();
            break;
            case 5: 
            deleteProductById(); 
            break;
            case 6: 
            filterByPriceRange();
             break;
            case 7: 
            alert("Thoát chương trình."); 
            break;
            default: 
            alert("Lựa chọn không hợp lệ vui lòng chọn lại.");
        }
    } while (choice !== 7);
}

Menu();
