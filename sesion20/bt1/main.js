let input=Number(prompt("Nhập số nguyên dương n"))
if (isNaN(input)) {
    alert("Vui lòng nhập số");
} else {
    if (input <= 0) {
        alert("Vui lòng nhập số nguyên dương");
    } else {
        let sum = 0;
        for (let i = 1; i <= input; i++) {
            sum += i;
        }
        alert(`Tổng các số từ 1 đến ${input} là ${sum}`);
    }
}

