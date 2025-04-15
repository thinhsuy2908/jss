function check(e){
    e.preventDefault();
    let email = document.getElementById("exampleInputEmail1").value;
    let password = document.getElementById("exampleInputPassword1").value;
    let checkPassword = document.getElementById("CheckPassword1").value;
    const account = JSON.parse(localStorage.getItem("account")) || [];
    if (!email || !password || !checkPassword) {
        alert("Vui lòng nhập đầy đủ thông tin cần thiết.");
        return false;
    }
    else if (password !== checkPassword) {
        alert("Mật khẩu không khớp.");
        return false;
    }
    else if (account.some((value)  => value.email === email)) {
        alert("Email đã tồn tại.");
        return false;
    }
    else{
        alert("Đăng ký thành công.");
        account.push({
            email,
            password,    
        });
        localStorage.setItem("account", JSON.stringify(account));
        return true;
    }
}
