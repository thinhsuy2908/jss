let num1 = prompt("vui lòng nhập số đầu tiên:");
let num2 = prompt("vui lòng nhập số thứ hai:");
let num3 = prompt("vui lòng nhập số thứ ba:");

let max = (num1 > num2) ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);

alert("Số lớn nhất là : " + max);