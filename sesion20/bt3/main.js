let input=Number(prompt("vui lòng nhập số nguyên dương"))
if(isNaN(input)){
    alert("vui lòng nhập só")
}
else{
    input.toString()
 let rv=input.reverse()
 if(input===rv){
     alert(input+" là số đối xứng")
 }
 else{
     alert(input+" không phải số đối xứng")
 }
}