let arr=[1,2,3,4,2,43,12,41,7,9,4]
let flag=false
for(let i=0;i<arr.length;i++){
    if(arr[i]>10){
        console.log(arr[i])
        flag=true
    }
}
if(!flag){
    console.log('không có số nào lớn hơn 10')
}