let input = prompt("Hãy nhập mật khẩu (ít nhất 8 ký tự, bao gồm 1 chữ in hoa và 1 số):");
function isStrongPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
}
if (isStrongPassword(input)) {
    console.log("Mật khẩu hợp lệ!");
} else {
    console.log("Mật khẩu không hợp lệ! Hãy đảm bảo có ít nhất 8 ký tự, 1 chữ in hoa và 1 số.");
}
isStrongPassword(password);