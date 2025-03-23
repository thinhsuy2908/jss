let a=Number(prompt("vui lòng nhập số nguyên dương"))
let b=Number(prompt("vui lòng nhập số nguyên dương"))
if (isNaN(a) || isNaN(b)) {
    alert("Vui lòng nhập số");
}
else {
    let count=1
    let c=Math.abs(b)
    for (let i = 1; i <= c; i++) {
        count*=a
    }  
    if (b<0){
        count=1/count
    }
    alert(a+" luy thua "+b+" = "+count)   
}