let a=Number(prompt("mời bạn nhập vào số a"))
let b=Number(prompt("mời bạn nhập vào số b"))
let cals=prompt("mời b nhập vào phép tính")
switch(cals){
    case "+":
        alert(+(a+b));
        break;
        case "-":
        alert(+(a-b));
        break;
        case "*":
        alert(+ (a*b));
        break;
        case "/":
        alert(+(a/b));
        if(a/0){
            alert("không thể chia cho 0")
        }
        break;
        default:
            alert("hãy nhập đúng phép tính cần tính");
}