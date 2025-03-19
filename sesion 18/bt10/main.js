let input = Number(prompt("Hãy nhập 1 số nguyên bé hơn 1 nghìn"));

if (isNaN(input)) {
    alert("Biết đọc chữ không?");
} else {
    if (input < 0 || input > 999) {
        alert("Bị dốt hả?");
    } else {
        let str = " ", str1 = " ", str2 = " ";

        let donVi = input % 10;
        let chuc = Math.floor(input / 10) % 10;
        let tram = Math.floor(input / 100);

        switch (donVi) {
            case 1:
                str = (chuc > 1) ? "mốt" : "một";
                break;
            case 2:
                str = "hai";
                break;
            case 3:
                str = "ba";
                break;
            case 4:
                str = "bốn";
                break;
            case 5:
                str = (chuc > 0) ? "lăm" : "năm";
                break;
            case 6:
                str = "sáu";
                break;
            case 7:
                str = "bảy";
                break;
            case 8:
                str = "tám";
                break;
            case 9:
                str = "chín";
                break;
        }

        if (chuc > 0) {
            switch (chuc) {
                case 1:
                    str1 = "mười";
                    break;
                case 2:
                    str1 = "hai mươi";
                    break;
                case 3:
                    str1 = "ba mươi";
                    break;
                case 4:
                    str1 = "bốn mươi";
                    break;
                case 5:
                    str1 = "năm mươi";
                    break;
                case 6:
                    str1 = "sáu mươi";
                    break;
                case 7:
                    str1 = "bảy mươi";
                    break;
                case 8:
                    str1 = "tám mươi";
                    break;
                case 9:
                    str1 = "chín mươi";
                    break;
            }
        } else if (tram > 0 && donVi > 0) {
            str1 = "linh"; 
        }
        if (tram > 0) {
            switch (tram) {
                case 1:
                    str2 = "một trăm";
                    break;
                case 2:
                    str2 = "hai trăm";
                    break;
                case 3:
                    str2 = "ba trăm";
                    break;
                case 4:
                    str2 = "bốn trăm";
                    break;
                case 5:
                    str2 = "năm trăm";
                    break;
                case 6:
                    str2 = "sáu trăm";
                    break;
                case 7:
                    str2 = "bảy trăm";
                    break;
                case 8:
                    str2 = "tám trăm";
                    break;
                case 9:
                    str2 = "chín trăm";
                    break;
            }
        }

        alert(`${str2} ${str1} ${str}`.trim());
    }
}
