let a=Number(prompt("hãy nhập cạnh a của tam giác"))
let b=Number(prompt("hãy nhập cạnh b của tam giác"))
let c=Number(prompt("hãy nhập cạnh c của tam giác"))
if( a+b>c && a+c>b &&b+c>a){
    if(a===b&&b===c){
        alert("Đây là tam Giác Đều")
    }
    else if(a===b||b===c||c===a){
        alert("Đây là tam giác cân")
    }
    else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a)
    {
        alert("Đây là tam giác vuông")
    }
    else{
        alert("Đây là tam giác thường")
    }
}
else{
    alert("Đây không phải là tam giác")
}