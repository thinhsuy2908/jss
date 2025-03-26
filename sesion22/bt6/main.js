let number=[2,5,7,4,1,8,6,8,2,3];
let n=Number(prompt("Nhập số bạn muốn tìm"));
let count=0;
for(let i=0;i<number.length;i++){
    if(number[i]===n){
        count++;  
    }
}
console.log("số "+n+"xuất hiện"+count+"lần");  