let van=Number(prompt("vui lòng nhập điểm môn văn của bạn"))
let toan=Number(prompt("vui lòng nhập điểm môn toán của bạn"))
let anh=Number(prompt("vui lòng nhập điểm môn anh của bạn"))
let avg=(van+toan+anh)/3
if(avg>=8){
    console.log("Giỏi")
}
if(avg>=6.5){
    console.log("Khá")
}
if(avg>=5){
    console.log("Trung Bình")
}
else{
    console.log("Yếu")
}