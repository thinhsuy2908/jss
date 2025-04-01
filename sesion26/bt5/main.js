let input=Number(prompt("vui lòng nhập số phần tử mà bạn muốn thêm"))
let arr=[]
if(input===0){
    alert("Mảng ko có dữ liệu")
}
else if(input<0||isNaN(input)){
    alert("Dữ liệu không hợp lệ")
}
else{
    for(let i=0;i<input;i++){
        let n=Number(prompt("Vui lòng nhập số nguyên"))
        if(n<0||isNaN(n)){
            alert("vui lòng nhập lại dữ liệu")
        }
        else{
            arr.push(n)
        }
    }
}
function nummax(){
    let max= arr.reduce((max, current) => (current > max ? current : max), arr[0]);
    let index = arr.indexOf(max);
    console.log(max)
    console.log(index)
}

nummax();