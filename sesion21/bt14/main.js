let input = Number(prompt("Vui lòng nhập số tiền của bạn"));
if (isNaN(input) || input % 1000===0) {
    alert("Vui lòng nhập số tiền hợp lệ (tối thiểu 1.000 VNĐ)");
} else {
    if (input >= 500000) {
        document.writeln("Số tờ tiền 500k là " + Math.floor(input / 500000) + "<br>");
        input %= 500000;
    }
    if (input >= 200000) {
        document.writeln("Số tờ tiền 200k là " + Math.floor(input / 200000) + "<br>");
        input %= 200000;
    }
    if (input >= 100000) {
        document.writeln("Số tờ tiền 100k là " + Math.floor(input / 100000) + "<br>");
        input %= 100000;
    }
    if (input >= 50000) {
        document.writeln("Số tờ tiền 50k là " + Math.floor(input / 50000) + "<br>");
        input %= 50000;
    }
    if (input >= 20000) {
        document.writeln("Số tờ tiền 20k là " + Math.floor(input / 20000) + "<br>");
        input %= 20000;
    }
    if (input >= 10000) {
        document.writeln("Số tờ tiền 10k là " + Math.floor(input / 10000) + "<br>");
        input %= 10000;
    }
    if (input >= 5000) {
        document.writeln("Số tờ tiền 5k là " + Math.floor(input / 5000) + "<br>");
        input %= 5000;
    }
    if (input >= 2000) {
        document.writeln("Số tờ tiền 2k là " + Math.floor(input / 2000) + "<br>");
        input %= 2000;
    }
    if (input >= 1000) {
        document.writeln("Số tờ tiền 1k là " + Math.floor(input / 1000) + "<br>");
    }
}
