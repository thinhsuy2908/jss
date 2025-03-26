let arr = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10) + 1);
let count=0;
let sum=0;

for(let i=0;i<5;i++){
    if(isNaN(arr[i])||arr[i]===""||arr[i]<0){
        document.writeln("Dãy ko hợp lệ");
    }
    else{
        let num=arr[i];
        if(arr[i] % 2===0){
            count+=num;
        }
        else{
            sum+=num;
        }
    }
}
console.log("Tổng số chẵn là: " + count);
console.log("Tổng số lẻ là: " + sum);