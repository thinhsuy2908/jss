let input=Number(prompt("vui lòng nhập số nguyên dương"))
if (isNaN(input)) {
    alert("Vui lòng nhập số");
} else {
    if (input < 2) {
        alert("Đây không phải số nguyên tố");
    } else {
        let flag = true;
        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            alert("Đây là số nguyên tố");
        } else {
            alert("Đây không phải số nguyên tố");
        }
    }
}