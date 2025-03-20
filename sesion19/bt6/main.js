let a=Number(prompt("Vui lòng nhập vào số a"))
let b=Number(prompt("Vui lòng nhập vào số b"))
let c=Number(prompt("Vui lòng nhập vào số c"))
let denta=(b*b)-4*a*c
let sqrt=Math.sqrt(denta)
let x1 =(-b+sqrt)/(2*a)
let x2 =(-b-sqrt)/(2*a)
if(denta===0){
    document.writeln("phương trình có nghiệm kép")
    document.writeln("x1"+"="+"x2"+"="+x2)
}
else if(denta>0){
    document.writeln("phương trình có 2 nghiệm phân biệt")
    document.writeln("x1="+x1,"\n","x2="+x2)
}
else if(denta<0){
    document.writeln("phương trình vô nghiệm")
}