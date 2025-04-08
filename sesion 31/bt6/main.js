function login() {
    let username =document.getElementById("username").value
    let password =document.getElementById("password").value
    if (username==="huanrose@gmail.com" && password==="123456") {
        console.log("Thành công");
    }
    else{
        console.log("Thất bại")
    }
}