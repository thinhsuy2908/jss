let input=Number(prompt("vui lòng nhập 1 số nguyên dương"))
if(isNaN(input)){
    alert("vui lòng nhập số")
}
else{
    if(input<0){
        alert("Vui lòng nhập số nguyên dương")
    }
    else{
        document.writeln("các số chia hết cho 5 từ 1 đến 5 là");
        for(let i = 0; i <= input; i++){
            if(i%5===0){
                document.writeln(i)
            }
        }
    }
}