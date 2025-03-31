let arr=[1,'b',4,112,5,'a',9,1243,54]
function ktrsochan(arr){
    let flag=false
    let count=false
    for(let i=0;i<arr.length;i++){
        if(isNaN(arr[i])){
            count=true
            continue;
        }
        else if(arr[i]%2===0){
                console.log(arr[i])
                flag=true
        }       
      }      
    if(!flag){
        console.log("mảng ko có số chẳn")
    }
    if(count){
        console.log("Dữ liệu không hợp lệ")
    }
}
ktrsochan(arr);