let input=Number(prompt("nhập số nguyên dương lớn hơn 2"));
if(isNaN(input)||input<2){
    alert("không hợp lệ vui lòng nhập lại");
}
else{
    let flag=true;
    for(let i=2;i<=Math.sqrt(input);i++){
            if(input%i===0){
                flag=false;
                break;
            }
    }
    if(flag){
        alert("đây là số nguyên tố");
    }
    else{
        alert("đây không phải số nguyên tố");
    }
}