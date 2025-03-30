let index = [];
while (true) {
    let choice = parseInt(prompt("===============Menu============\n"
        + "1. Nhập số phần tử cần nhập và giá trị các phần tử\n"
        + "2. In ra giá trị các phần tử đang quản lý\n"
        + "3. In ra giá trị các phần tử chẵn và tính tổng\n"
        + "4. In ra giá trị lớn nhất và nhỏ nhất trong mảng\n"
        + "5. In ra các phần tử nguyên tố trong mảng và tính tổng\n"
        + "6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó\n"
        + "7. Thêm 1 phần tử vào vị trí chỉ định\n"    
        + "8. Thoát"));
    
    switch (choice) {
        case 1:
            index = [];
            let rows = parseInt(prompt("Nhập số hàng: "));
            let cols = parseInt(prompt("Nhập số cột: "));
            for (let i = 0; i < rows; i++) {
                index[i] = [];
                for (let j = 0; j < cols; j++) {
                    index[i][j] = parseInt(prompt(`Nhập phần tử tại vị trí [${i}][${j}]: `));
                }
            }
            alert("Đã nhập mảng 2 chiều.");
            break;

        case 2:
            let arrayDisplay = "Mảng 2 chiều:\n";
            for (let i = 0; i < index.length; i++) {
                arrayDisplay += index[i].join(" ") + "\n";
            }
            alert(arrayDisplay);
            break;

        case 3:
            let sum = 0
            for (let i = 0; i < index.length; i++) {
                for (let j = 0; j < index[i].length; j++) {
                    sum += index[i][j];
                }
            }
            alert("Tổng các phần tử trong mảng là: " + sum);
            break;

        case 4:
            let max = 0
            let maxIndex = [-1, -1];
            for (let i = 0; i < index.length; i++) {
                for (let j = 0; j < index[i].length; j++) {
                    if (index[i][j] > max) {
                        max = index[i][j]
                        maxIndex = [i, j]
                    }
                }
            }
            alert(`Phần tử lớn nhất là ${max} tại vị trí [${maxIndex[0]}][${maxIndex[1]}]`);
            break;

        case 5:
            let row = parseInt(prompt("Nhập chỉ số hàng: "));
            if (row >= 0 && row < index.length) {
                let rowSum = 0;
                for (let j = 0; j < index[row].length; j++) {
                    rowSum += index[row][j];
                }
                const avg = rowSum / index[row].length;
                alert(`Trung bình cộng các phần tử của hàng ${row} là: ${avg}`);
            } else {
                alert("Hàng không hợp lệ.");
            }
            break;

        case 6:
            for (let i = 0; i < index.length; i++) {
                index[i].reverse();
            }
            alert("Đã đảo ngược các hàng trong mảng.");
            break;

        case 7:
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
    }

    if (choice === 7) {
        break;
    }
}
