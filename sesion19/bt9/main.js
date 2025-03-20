let result1 = "javascript" + 5;
console.log(result1); // "javascript5"

let result2 = "javascript" - 1;
console.log(result2); // NaN

let result3 = "3" + 2;
console.log(result3); // "32"

let result4 = "5" - 4;
console.log(result4); // 1

let result5 = isNaN("123");
console.log(result5); // false

let result6 = isNaN("hello");
console.log(result6); // true

let result7 = Number.isNaN("123");
console.log(result7); // false

let result8 = Number.isNaN(NaN);
console.log(result8); // true