let input=prompt("vui lòng nhập dãy số");
let arr=input.split("");
if(isNaN(input)){
    document.writeln("Dãy ko hợp lệ");
}
else{
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
        max=arr[i];
        }
    }
    document.writeln("Số lớn nhất là: " + max);
}
