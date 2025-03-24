let input=Number(prompt("nhập số nguyên dương"));
if(isNaN(input)||input<0){
    alert("không hợp lệ vui lòng nhập lại");
}
else{
    for(let i=100;1<1000;1++){
        let a = Math.floor(i / 100);
        let b = Math.floor((i % 100) / 10);
        let c = i % 10;
        if (i === a*a*a + b*b*b + c*c*c) {
            document.writeln(i);
        }
    }
}
