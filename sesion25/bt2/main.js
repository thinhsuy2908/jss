function sum(a, b) {
    return a + b;
}

let a = Number(prompt("Vui lòng nhập số a"));
let b = Number(prompt("Vui lòng nhập số b"));

if (isNaN(a) || isNaN(b)) {
    alert("Hãy vui lòng nhập số");
} else if (a % 1 !== 0 || b % 1 !== 0) {
    alert("Vui lòng nhập số nguyên");
} else {
    alert("Tổng 2 số là " + sum(a, b));
}
