// Find the maximum number in a jagged array of numbers or array of numbers
function arrayMax(arr) {
    let maxi = Number.MIN_VALUE;

    arr.forEach((num) => {
        num.forEach((n) => {
            maxi = Math.max(n, maxi);
        });
    });

    return maxi;
}

let arr1 = [[1, 2, 3], [4, 5], [6], [7, 8, 9]];
let arr2 = [[43, 87, 21], [23, 64], [77], [86, 63, 52]];

console.log(`The Maximum Value of ${arr1} is ${arrayMax(arr1)}`);
console.log(`The Maximum Value of ${arr2} is ${arrayMax(arr2)}`);