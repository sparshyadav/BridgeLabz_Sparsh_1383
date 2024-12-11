// Calculate the Average of Numbers in an Array 

// Approach - Using Reduce to find Sum, and then finding the Average
let arr = [32, 646, 23, 75, 43, 23, 54, 23];

let newSum = arr.reduce((acc, num) => {
    return acc + num;
}, 0)

let average = (newSum / arr.length).toFixed(2);

console.log(`The Average of Arr is: ${average}`);
