let arr1=[]
let input=Number(prompt("Nhập số phần tử bạn muốn thêm vào mảng"));
if(isNaN(input)){
    alert("Nhập sai, vui lòng nhập lại");
}
else if(input<0){
    alert("Số phần tử không hợp lệ");
}
else if(input===0){
    alert("Mảng rỗng");
}
else{
for(let i=0;i<input;i++){
    let n=Number(prompt("Nhập số bạn muốn thêm"));
    if(isNaN(n)){
        alert("Nhập sai, vui lòng nhập lại");
        i--;
    }
    else{
        let count=0;
        arr1.push(n);
        for(let j=0;j<arr1.length;j++){
            if(arr1[j]<0&&n%1===0){
                count++;   
            }
        }
        console.log(count);
    }
}
}