let arr=[2,4,3,4,5,3,7,8,9,10];
let n = arr.length;

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) { 
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("Mảng sau khi sắp xếp:", arr);