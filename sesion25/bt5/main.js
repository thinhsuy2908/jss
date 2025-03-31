let arr1=[]
let input=Number(prompt("Nhập số phần tử bạn muốn thêm vào mảng"));
function ktrsonguyenduong(input){
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
    let count = 0;
    let flag=false 
    for(let i=0;i<input;i++){
        let n=Number(prompt("Nhập số bạn muốn thêm"));
        if(isNaN(n)){
            alert("Nhập sai, vui lòng nhập lại");
            i--;
        }
        else{
            arr1.push(n);
            if(n > 0 && n % 1 === 0){
                flag=true
                count++;   
            }
        }
    }
    if(!flag){
        alert("Không có số nguyên dương nào trong mảng")
    }
    console.log(`Số lượng số nguyên dương trong mảng: ${count}`);
}
}
ktrsonguyenduong(input);