let arr1 = [2, 1, 7, 1, 1, 8, 6, 2, 2, 7];
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    let flag = false;    
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            flag = true;
            break;
        }
    }
    if (!flag) {
        arr2.push(arr1[i]);
    }
}
for (let i = 0; i < arr2.length - 1; i++) {
    for (let j = 0; j < arr2.length - 1 - i; j++) {
        if (arr2[j] > arr2[j + 1]) {
            let temp = arr2[j];
            arr2[j] = arr2[j + 1];
            arr2[j + 1] = temp;
        }
    }
}
console.log(arr2);

