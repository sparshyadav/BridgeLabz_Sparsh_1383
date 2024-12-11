// Find the Maximum Number in an Array

let arr = [32, 646, 23, 75, 43, 23, 54, 23];

// Approach 1 - Using For Loop, and Storing Max Value
let maxi = Number.MIN_VALUE;
for (let i = 0; i < arr.length; i++) {
    maxi = Math.max(maxi, arr[i]);
}
console.log(`The Maximum Value in Array is: ${maxi}`);

// Approach 2 - Using Sorting
let sortedArr = arr.sort((a, b) => b - a); // Sorted Decreasingly
let newMaxi = sortedArr[0];
console.log(`The Maximum Value in Array is: ${newMaxi}`);