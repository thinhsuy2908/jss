let input = prompt("Vui Lòng nhập mảng muốn kiểm tra")
function isPalindrome(input){
    let revere = input.split("").reverse().join("")
    if(input===revere){
        console.log("Là chuỗi đối xứng");       
    }
    else{
        console.log("không phải là chuỗi đối xứng");    
    }
}
isPalindrome(input); 