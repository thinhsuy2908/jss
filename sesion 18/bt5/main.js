let input=Number(prompt("vui lòng nhập số năm của nhân viên"))
if(input>6){
    alert("Quản Lý")
}
else if(input>=1 && input<4){
    alert("Nhân viên có khinh nghiệm")
}
else if(input>=4 && input<=6){
    alert("Chuyên viên")
}
else{
    alert("Mới vào Nghề")
}