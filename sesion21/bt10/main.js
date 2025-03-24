let input = Number(prompt("vui lòng nhập số nguyên tố mà bạn muốn hiển thị"));
if (isNaN(input) || input < 0) {
    alert("không hợp lệ vui lòng nhập lại");
}
else {
    let count =0
    let i=2
    while(count<input){
        let flag=true;
        for(let j=2;j<=Math.sqrt(i);j++){
            if(i%j===0){
                flag=false;
                break;
            }
            }
            if(flag){
                document.writeln(i);
                count++;
        }
        i++;
    }
}                                                                                           