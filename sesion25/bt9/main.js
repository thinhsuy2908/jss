let input = prompt("Hãy Nhập email");
let users= [];
function isStrongEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
if (!isStrongEmail(input)) {
    alert("email ko hợp lệ!");
    return;
}
if (users.includes(input)) {
    alert("Tài khoản đã tồn tại!");
} else {
    users.push(input);
    alert("Đăng ký thành công!");
}
isStrongEmail(input);