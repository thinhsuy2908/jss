let arr = ["2025-03-10", "2024-12-25", "2023-07-01"];
let arr1 = [];

function changeDateOfYear(dateArray) {
    return dateArray.map(date => {
        return date.split("-")  
            .reverse()          
            .join("/");     
    });
}

arr1 = changeDateOfYear(arr);
console.log(arr1);
