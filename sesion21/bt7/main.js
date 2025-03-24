let start = Number(prompt("nhập số tiền bắt đầu"));
let month = Number(prompt("nhập số tháng"));
let lai=0;
rate = 1.01003333333333/100;
for(let i=1;i<=month;i++){
    lai=(start*rate*month);
}
document.writeln("số tiền nhận được là "+((start+lai).toFixed(3)));
document.writeln("lãi là "+lai.toFixed(3));
