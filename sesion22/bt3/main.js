let input =prompt("Nhập dãy số bạn muốn đảo ngược");
if(isNaN(input)){
    document.writeln("Dãy ko hợp lệ");
}
else{
    let reversed = input.split("").reverse().join("");//split() chuyển chuỗi thành mảng,join() chuyển mảng thành chuỗi
    document.writeln("Dãy sau khi đảo ngược là: " + reversed);
}