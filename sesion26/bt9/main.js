function nhapMang() {
    let n;
    do {
        n = Number(prompt("Nhập số lượng phần tử trong mảng (từ 10 đến 20):"));
    } while (n < 10 || n > 20 || isNaN(n));
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Number(prompt(`Nhập phần tử thứ ${i + 1}:`)));
    }
    console.log("Mảng vừa nhập:", arr);
    return arr;
}
function tinhTongSoChan(arr) {
    let tongChan = arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
    console.log("Tổng các số chẵn:", tongChan);
    return tongChan;
}
function tinhTongSoLe(arr) {
    let tongLe = arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
    console.log("Tổng các số lẻ:", tongLe);
    return tongLe;
}
let mangSoNguyen = nhapMang();
tinhTongSoChan(mangSoNguyen);
tinhTongSoLe(mangSoNguyen);
