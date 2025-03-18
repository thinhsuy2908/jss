let a=Number(prompt("Vui lòng nhập vào số a"))
let b=Number(prompt("Vui lòng nhập vào số b"))
let c=Number(prompt("Vui lòng nhập vào số c"))
let denta=(b*b)-4*a*c
let sqrt=Math.sqrt(denta)
let x1 =(-b+sqrt)/(2*a)
let x2 =(-b-sqrt)/(2*a)
document.writeln(x1,"\n",x2)