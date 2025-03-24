let sum=0;
let count=0;
for(let i=0;i<5;i++){
    let input = Number(prompt("vùi lòng nhập số nguyên dương"));
    if (isNaN(input)||input<0) {
        alert("không hợp lệ vui lòng nhập lại");
    }
    else{
        if(input%2!==0){
            sum++;
        }
        else{
            count++;
        }
    }
}
document.writeln("tổng các số lẻ là"+sum)
document.writeln("tổng các số chẵn là"+count)