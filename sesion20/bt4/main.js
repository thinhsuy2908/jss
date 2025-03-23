let input=prompt("vui long nhập chuỗi")
let con=prompt("vui lòng nhập ký tự con")
let flag = false;
for (let i = 0; i < input.length; i++) {
    if (input[i] === con) {
        flag = true;
        break;
    }
}

if (flag) {
    alert(`chuỗi ${input} chứa ký tự con ${con}`);
} else {
    alert("không chứa ký tự cần kiếm");
}