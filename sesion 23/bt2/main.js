let arr=[1,2,3,4,5,6]
let max=arr[0];
let count=0;
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
        count=i
       
    }
}
console.log("số lớn nhất là:",max)
console.log("vị trí của số lớn nhất là:",count)