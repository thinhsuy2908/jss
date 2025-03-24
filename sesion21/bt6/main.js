let input=Number(prompt("nhập số nguyên dương"));
let sum=0;
if(isNaN(input)||input<0){
    alert("không hợp lệ vui lòng nhập lại");
}
else{
    for(let i=1;i<=input;i++){
        if(input%i===0)
        document.writeln(i+"<br>");
    }
    
}
