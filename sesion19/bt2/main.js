let input = prompt("Nhập một chuỗi:");
if (/^[A-Za-z]+$/.test(input)) {
    alert("Chuỗi bạn nhập chỉ chứa chữ cái.");
} else {
    alert("Chuỗi bạn nhập không phải chỉ chứa chữ cái.");
}