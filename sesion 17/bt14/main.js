let r=Number(prompt("Vui long nhap ban kinh:"))
let h=Number(prompt("Vui long nhap chieu cao"))
let n=Math.PI
let sxq=2*n*r*h
let stp=(2*n*r*h)+2*n*(r*r)
let vtru=n*(r*r)*h
let C=2*n*r
document.writeln("dien tich xung quanh hinh tru la",sxq,"\n")
document.writeln("dien tich toan phan hinh tru la",stp,"\n")
document.writeln("the tich hinh tru la",vtru,"\n")
document.writeln("chu vi day hinh tru la",C,"\n")