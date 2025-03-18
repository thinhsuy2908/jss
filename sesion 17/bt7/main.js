let num=prompt("vui lòng nhập 1 sô tiền")
a=Number(num)
let text = a.toLocaleString("vi-VN", {style:"currency", currency:"VND"});
alert(text);
