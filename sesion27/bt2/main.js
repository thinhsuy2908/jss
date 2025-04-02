let arr = []; 
function nhapdanhsach(){
    let n = prompt("Vui lòng nhập đầy đủ họ và tên");
    if (n) {
        arr.push(n);
    }
}
function hienthi(arr) {
    if (arr.length === 0) {
        console.log("Danh sách sinh viên trống.");
    } else {
        console.log("Danh sách sinh viên:");
        for (let i = 0; i < arr.length; i++) {
            console.log(`${i + 1}. ${arr[i]}`);
        }
    }
}
function tim(arr) {
    let keyword = prompt("Nhập tên sinh viên cần tìm:");
    let found = arr.filter(name => name.toLowerCase().includes(keyword.toLowerCase()));
    if (found.length > 0) {
        console.log("Sinh viên tìm thấy:");
        found.forEach((name, index) => console.log(`${index + 1}. ${name}`));
    } else {
        console.log("Không tìm thấy sinh viên nào.");
    }
}
function xoa(arr) {
    let keyword = prompt("Nhập tên sinh viên cần xoá:");
    let index = arr.findIndex(name => name.toLowerCase() === keyword.toLowerCase());
    if (index !== -1) {
        arr.splice(index, 1);
        console.log(`Đã xoá sinh viên: ${keyword}`);
    } else {
        console.log("Không tìm thấy sinh viên cần xoá.");
    }
}
function menu() {
    let input = 0;
    do {
        input = Number(prompt(
            "MENU\n" +
            "1. Nhập danh sách sinh viên\n" +
            "2. Hiển thị danh sách sinh viên\n" +
            "3. Tìm sinh viên theo tên\n" +
            "4. Xoá sinh viên khỏi danh sách\n" +
            "5. Thoát\n" +
            "Vui lòng chọn một mục (1-5):"
        ));
        switch (input) {
            case 1:
                nhapdanhsach();
                break;
            case 2:
                hienthi(arr);
                break;
            case 3:
                tim(arr);
                break;
            case 4:
                xoa(arr);
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
