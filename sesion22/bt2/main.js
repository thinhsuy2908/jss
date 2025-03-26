let number=[2,5,7,4,1,8,6];
let n=Number(prompt("Nhập số bạn muốn tìm"));
if(number.includes(n)){
    document.writeln("Bingo");
}
else{
    document.writeln("Chúc bạn may mắn lần sau");
}