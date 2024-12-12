// Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
function convert(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newArr.push(arr[i][j]);
        }
    }

    return newArr;
}


let arr1 = [[1, 2, 3], [4, 5], [6], [7, 8, 9]];
let arr2 = [[43, 87, 21], [23, 64], [77], [86, 63, 52]];

console.log(convert(arr1));
console.log(convert(arr2));
