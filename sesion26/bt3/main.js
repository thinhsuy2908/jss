let arr=["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"]
let arr1=[]
function checkEmail(){
    for(let email of arr){
    if(arr.length===0){
        alert("Mảng không có phần tử nào")
    }
    else if(isNaN(arr)){
        alert("Dư liệu không hợp lệ")
    }
    else if(email.includes==="@"&&email.includes===" "){
        arr1.push(email)
    }
}
console.log(arr1)
}
checkEmail();