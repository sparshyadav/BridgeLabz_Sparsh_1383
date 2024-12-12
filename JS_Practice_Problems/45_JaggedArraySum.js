// Create a function to calculate the sum of all the numbers in a jagged array
function arraySum(arr) {
    let sum = arr.reduce((acc, num) => {
        let internalSum = num.reduce((ac, n) => {
            return ac + n;
        }, 0);

        return acc + internalSum;
    }, 0);

    return sum;
}

let arr1 = [[1, 2, 3], [4, 5], [6], [7, 8, 9]];
let arr2 = [[43, 87, 21], [23, 64], [77], [86, 63, 52]];

console.log(`The Sum of ${arr1} is ${arraySum(arr1)}`);
console.log(`The Sum of ${arr2} is ${arraySum(arr2)}`);