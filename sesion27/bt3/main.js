function menu() {
    let input = 0;
    do {
        input = Number(prompt(
            "MENU\n" +
            "1. Tính diện tích hình tròn\n" +
            "2. Tính chu vi hình tròn\n" +
            "3. tính diện tích hình chữ nhật\n" +
            "4. tính chu vi hình chữ nhật\n" +
            "5. Thoát\n" +
            "Vui lòng chọn một mục (1-5):"
        ));
        switch (input) {
            case 1:
                let a1 = Number(prompt("Nhập bán kính đường tròn:"));
                alert("diện tích hình tròn là: " + (Math.PI*(a1*a1)));
                break;
            case 2:
                let a2 = Number(prompt("Nhập bán kính đường tròn:"));
                alert("Chu vi hình tròn: " + (2*Math.PI*a2));
                break;
            case 3:
                let a3 = Number(prompt("Nhập chiều dai:"));
                let b3 = Number(prompt("Nhập chiều rộng:"));
                alert("diện tính hình chữ nhật: " + (a3 * b3));
                break;
            case 4:
                let a4 = Number(prompt("Nhập chiều dài:"));
                let b4 = Number(prompt("Nhập chiều rộng:"));
                    alert("chu vi hình chữ nhật: " + ((a4+b4)*2));
                break;
            case 5:
                alert("Thoát chương trình.");
                break;
            default:
                alert("Lựa chọn không hợp lệ! Vui lòng nhập số từ 1 đến 5.");
        }
    } while (input !== 5);
}
menu();
