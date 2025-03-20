let input=Number(prompt("Vui lòng nhập tháng bạn muốn kiểm tra"))
if([1,3,5,7,8,10,12].includes(input)){
    alert("Tháng " +input+" có 31 ngày")
}
else if([4,6,9,11].includes(input)){
    alert("Tháng " +input+" có 30 ngày")
}
else if(input===2){
    alert("tháng 2 có 28 hoặc 29 ngày(nếu năm nhuận)")
}
else {
    alert("hãy nhập tháng đúng")
}