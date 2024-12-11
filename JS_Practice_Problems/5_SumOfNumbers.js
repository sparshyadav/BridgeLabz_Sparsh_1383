// Calculate the Sum of Numbers from 1 to 10

// Approach 1 - Using For Loop
let sum = 0;
for (let i = 1; i < 11; i++) {
    sum += i;
}
console.log(`The Sum of Numbers from 1 to 10 is ${sum}`);

// Approach 2 - Putting the Numbers in an Array and Using Reduce
let arr = [];
for (let i = 1; i < 11; i++) {
    arr.push(i);
}

let reduceSum = arr.reduce((acc, num) => {
    return acc + num;
}, 0);
console.log(`The Sum of Numbers from 1 to 10 is ${reduceSum}`);