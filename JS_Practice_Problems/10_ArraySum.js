// Calculate Sum of Numbers in an Array

let arr = [32, 646, 23, 75, 43, 23, 54, 23];

// Approach 1 - Using For Loop
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(`The Sum of Numbers in the Array is: ${sum}`);

// Approach 2 - Using Reduce 
let newSum = arr.reduce((acc, num) => {
    return acc + num;
})
console.log(`The Sum of Numbers in the Array is: ${sum}`);
