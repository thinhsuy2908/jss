let num=Number(prompt("vui lòng nhập đơn vị tiền muốn đổi 1.để đổi từ tiền VN sang USD 2.để đổi từ tiền USD sang VN"))
switch(num){
    case 1:
    let money=Number(prompt("vui lòng nhập số tiền bạn muốn đổi sang USD")) 
    let a=Number(money)
    let change=a/25000
    let text = change.toLocaleString("en-US", {style:"currency", currency:"USD"});
    alert(text);
    break;
    case 2:
    let moneyVN=Number(prompt("vui lòng nhập số tiền bạn muốn đổi sang VND")) 
    let b=Number(moneyVN)
    let changE=b*25000
    let count = changE.toLocaleString("vi-VN", {style:"currency", currency:"VND"}.replace("₫","VND"));
    alert(count);
    break;
    default:
        alert("ko có phướng án bạn chọn vui lòng chọn lại")
}
