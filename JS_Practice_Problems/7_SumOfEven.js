// Calculate Sum of Even Numbers Greater than 10 and Less than 30

// Approach 1 - Using For Loop to find Even Numbers and Summing them Up
let sum = 0;
for (let i = 10; i <= 30; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log(`The Sum of Even Numbers from 10 to 30 is: ${sum}`);

// Approach 2 - Storing Evens in an Array and then Using Reduce
let evenNumbers = [];
for (let i = 10; i < 31; i++) {
    if (i % 2 == 0) {
        evenNumbers.push(i);
    }
}

let evenSum = evenNumbers.reduce((acc, num) => {
    return acc + num;
})
console.log(`The Sum of Even Numbers from 10 to 30 is: ${evenSum}`);
