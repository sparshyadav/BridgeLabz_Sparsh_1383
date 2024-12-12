// Deep copy a jagged array with numbers or other arrays in a new array
function deepCopy(arr) {
    let newArr = arr.map((num) => {
        let insideArr = num.map((n) => {
            return n;
        });

        return insideArr;
    });

    return newArr;
}

let arr1 = [[1, 2, 3], [4, 5], [6], [7, 8, 9]];
let arr2 = [[43, 87, 21], [23, 64], [77], [86, 63, 52]];

let newArr1 = deepCopy(arr1);
let newArr2 = deepCopy(arr2);

console.log(newArr1);
console.log(newArr2);