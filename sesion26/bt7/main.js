function binhphuong(arr){
    return arr.map((num) => num*num)

}
function loc(arr){
    return arr.fillter((num)=>num%2===0)
}
let arr=[ 2, 5, 10 ]
let binh=binhphuong(arr);
let sochan=loc(arr);
console.log(loc)