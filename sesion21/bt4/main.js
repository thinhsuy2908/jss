let a=Number(prompt("nhập số a"));
let b=Number(prompt("nhập số b"));
let c=Number(prompt("nhập số c"));
let delta=b*b-4*a*c;
if(delta<0){
    alert("phương trình vô nghiệm");
}
else if(delta===0){
    let x=-b/(2*a);
    alert("phương trình có nghiệm kép x="+x);
}
else{
    let x1=(-b+Math.sqrt(delta))/(2*a);
    let x2=(-b-Math.sqrt(delta))/(2*a);
    alert("phương trình có 2 nghiệm phân biệt x1="+x1+" x2="+x2);
}