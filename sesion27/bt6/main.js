function arithmeticProgression(arr) {
    if (arr.length < 2) {
        console.log("Mảng có ít hơn 2 phần tử, không thể là cấp số cộng.");
        return false; 
    }
    const difference = arr[1] - arr[0]; 
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== difference) {
            console.log(`Mảng không phải cấp số cộng`);
            return false; 
        }
    }
    console.log("Mảng là một cấp số cộng.");
    return true;
}
