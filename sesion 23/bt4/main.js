let arr=[]
let input=Number(prompt("Nhập số phần tử bạn muốn thêm vào mảng"));
if(isNaN(input)){
    alert("Nhập sai, vui lòng nhập lại");
}
else if(input<0){
    alert("Số phần tử không hợp lệ");
}
else if(input===0){
    alert("Ko có ký tự số");
}
else{
    for(let i=0;i<input;i++){
        let n=Number(prompt("Nhập ký tự bạn muốn thêm"));
        let count=0;
        arr.push(n);
        for(let j=0;j<arr.length;j++){
            if(!isNaN(n)){
                console.log(n)
            }
        }
    }
}