let input=Number(prompt("vui lòng nhập số lượng số nguyên tố"))
if (isNaN(input)) {
    alert("Vui lòng nhập số");
}
else {
    if(input<1){
        alert("đây không phải số nguyên tố")
    }
    else{
        let count=0
        while(count<=input){
            let flag=true
            for (let i = 2; i <= Math.sqrt(count); i++) {
                if (count % i === 0) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                document.writeln(count+" là số nguyên tố");
            }
            count++
        }
    }
}