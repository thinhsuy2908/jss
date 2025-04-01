function menu() {
    let input = 0;
    do {
        input = Number(prompt(
            "MENU\n" +
            "1. Cộng hai số\n" +
            "2. Trừ hai số\n" +
            "3. Nhân hai số\n" +
            "4. Chia hai số\n" +
            "5. Thoát\n" +
            "Vui lòng chọn một mục (1-5):"
        ));
        switch (input) {
            case 1:
                let a1 = Number(prompt("Nhập số thứ nhất:"));
                let b1 = Number(prompt("Nhập số thứ hai:"));
                alert("Kết quả cộng: " + (a1 + b1));
                break;
            case 2:
                let a2 = Number(prompt("Nhập số thứ nhất:"));
                let b2 = Number(prompt("Nhập số thứ hai:"));
                alert("Kết quả trừ: " + (a2 - b2));
                break;
            case 3:
                let a3 = Number(prompt("Nhập số thứ nhất:"));
                let b3 = Number(prompt("Nhập số thứ hai:"));
                alert("Kết quả nhân: " + (a3 * b3));
                break;
            case 4:
                let a4 = Number(prompt("Nhập số thứ nhất:"));
                let b4 = Number(prompt("Nhập số thứ hai:"));
                if (b4 !== 0) {
                    alert("Kết quả chia: " + (a4 / b4));
                } else {
                    alert("Không thể chia cho 0!");
                }
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
