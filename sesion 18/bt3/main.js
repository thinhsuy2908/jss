let dn=prompt("vui lòng nhập tài khoản")
if(dn==="ADMIN"){
    let mk=prompt("Vui Lòng nhập mật khẩu")
    if(mk==="TheMaster"){
        alert("welcome")
    }
    else if(mk===""){
        alert("Cancelled")
    }
    else{
        alert("Wrong password")
    }
}
else if(dn===""){
    alert("Cancelled")
}
else {
    alert("I Don’t know you")
}
