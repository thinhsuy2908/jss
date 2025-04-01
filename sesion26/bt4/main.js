let input = Number(prompt("Vui lòng nhập số phần tử mà bạn muốn thêm"));
let arr = [];
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

if (isNaN(input) || input < 0) {
    alert("Vui lòng nhập một số nguyên dương hợp lệ.");
} else if (input === 0) {
    alert("Mảng rỗng.");
} else {
    for (let i = 0; i < input; i++) {
        let n
        do {
            n = Number(prompt(`Nhập số thứ ${i + 1}:`));
            if (isNaN(n) || n < 0) {
                alert("Không đúng giá trị. Vui lòng nhập lại một số nguyên dương.");
            }
        } while (isNaN(n) || n < 0);
        arr.push(n);
    }
}

let arrIprime = []

for (let i = 0; i < input; i++) {
    if (isPrime(arr[i])) {
        arrIprime.push(arr[i])
    }
}

console.log(arrIprime);

