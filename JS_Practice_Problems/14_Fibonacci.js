// Print the first 10 Fibonacci Numbers without Using Recursion

// Approach - Using a For Loop for iterating and storing previous, and nextPrevious number
let secondPrev = 0;
let firstPrev = 1;

console.log(`1st Fibonacci Number is: 0`);
console.log(`2st Fibonacci Number is: 1`);

for (let i = 0; i < 11; i++) {
    let num = secondPrev + firstPrev;
    console.log(`${i}th Fibonacci Number is: ${num}`);

    secondPrev = firstPrev;
    firstPrev = num;
}