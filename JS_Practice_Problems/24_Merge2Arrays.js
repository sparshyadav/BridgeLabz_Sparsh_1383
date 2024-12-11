// Create a Function to Merge 2 Arrays and return a new Array

let arr1 = [646, 23, 75, 43, 23, 54, 23, 75];
let arr2 = [32, 64, 75, 23, 436, 136, 326];

// Approach 1 - Using Spread Operator
console.log(`Original Array 1: ${arr1}`);
console.log(`Original Array 2: ${arr2}`);
let mergedArr = [...arr1, ...arr2];
console.log(`Reversed Array: ${mergedArr}`);
console.log();

// Approach 2 - Using Concat
console.log(`Original Array 1: ${arr1}`);
console.log(`Original Array 2: ${arr2}`);
let newArr = arr1.concat(arr2);
console.log(`Reversed Array: ${newArr}`);
console.log();
