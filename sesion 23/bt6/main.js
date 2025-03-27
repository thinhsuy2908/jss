let arr = [0, 1, false, 2, '', 3, null, undefined, NaN, "hello"];
let arr1 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        arr1.push(arr[i]);
    }
}
console.log(arr1);
