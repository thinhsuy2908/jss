let a = 1;
let b = 1;
let n = Number(prompt("Nhập số n:"));

if (isNaN(n) || n <= 0) {
    alert("Không hợp lệ, vui lòng nhập lại số nguyên dương.");
} else {
    document.writeln(`F(1) = 1<br>`);
    if (n > 1) {
        document.writeln(`F(2) = 1<br>`);
    }

    for (let i = 3; i <= n; i++) { 
        let next = a + b;
        a = b;
        b = next;
        document.writeln(`F(${i}) = ${next}<br>`);
    }
}
