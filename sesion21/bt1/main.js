let sum=0;
for(let i=0;i<5;i++){
    let input = Number(prompt("vùi lòng nhập số nguyên dương"));
    if (isNaN(input)||input<0) {
        alert("không hợp lệ vui lòng nhập lại");
    }
    else{
        if(input%2!==0){
            sum+=input;
        }
    }
}
document.writeln("tổng các số lẻ là"+sum)