let input = prompt("Vui Lòng Nhập 1 dãy số muốn chuyển đổi");
let result = input.split("")
result.sort((a, b) => a - b);
result.reverse()
let sochuyendoi=result.join("");
console.log(sochuyendoi);
