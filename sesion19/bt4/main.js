let input=Number(prompt("vui lòng nhập 1 số nguyên tố"))
if(!isNaN(input)){
    if(input%5===0){
        if(input%3===0){
            alert(+input+" chia hết cho cả 5 và 3")
        }
        else{
            alert(+input+" chia hết cho 5 và không chia hết cho 3")
        }
    }
    if(input%3===0){
        alert(+input+" chia hết cho 3 và không chia hết cho 5")
    }
    else{
        alert(+input+" không chia hết cho cả 5 và 3")
    }
}
else{
    alert("biết đọc ko mà nhập tào lao")
}    