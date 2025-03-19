let input=Number(prompt("Vui lòng nhập năm mà bạn muốn kiểm tra"))
if(input%4===0 && input%100!==0 ||input%400===0){
alert(+input+" Đây là Năm nhuận")
}
else{
    alert(+input+" Đây không phải là năm nhuận")
}