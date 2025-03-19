let hour=Number(prompt("Vui lòng nhập giờ"))
let minute=Number(prompt("Vui lòng nhập phút"))
let second=Number(prompt("vui lòng nhập giây"))
if(hour>23||hour<0||minute>59||minute<0||second>59||second<0){
    alert("Vui lòng kiểm tra dữ liệu nhập vào")
}
else{
    let period = hour >= 12 ? "PM" : "AM";
    let displayHour = hour % 12;
    displayHour = displayHour === 0 ? 12 : displayHour;
    alert(`${displayHour} ${minute} ${second} ${period}`)
}