let arr =[2,4,3,4,5,3,7,8,9,10];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            let num=arr[j];
            if(Math.max(arr[i]>=num)){
                console.log(arr[i]);
            }
        }
    //     if(arr[i]<num){
    //         console.log(num);
    //     }
    //     else{
    //         console.log(arr[i]);
    //     }   
     }
}