let n = 10;
let x = 0;
let y = 1;
let z;
let i = 2;
for (; i <= n;) {
    z = x + y;
    x = y;
    y = z;
    i = i + 1;
}
let flag;
if (n === 0) {
    flag = x;
} else {
    flag = y;
}
alert(flag);