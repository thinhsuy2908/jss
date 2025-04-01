let arr=[]
for(let i=0;i<10;i++){
    let input=Number(prompt("vui lòng nhập vào 1 số nguyên"))
    if(isNaN(input)){
        alert("dữ liệu không hợp lệ")
        i--
    }
    else{
        arr.push(input)
    }
}
    let conts=arr.filter((num)=>num>=10)
    console.log(conts)