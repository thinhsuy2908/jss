let input = prompt("Vui lòng nhập chuỗi:");
let con = prompt("Vui lòng nhập ký tự cần tìm:");

if (input.includes(charToFind)) {
    alert(`Chuỗi "${input}" có chứa ký tự "${con}".`);
} else {
    alert(`Chuỗi "${input}" không chứa ký tự "${con}".`);
}
