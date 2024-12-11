// Calculate 10 Factorial

// Approach 1 - Using for Loop
let fact = 1;
for (let i = 1; i < 11; i++) {
    fact *= i;
}
console.log(`The Factorical of 10 is ${fact}`);

// Approach 2 - Using Recursion
function factorial(num) {
    if (num == 1) {
        return 1;
    }

    return num * factorial(num - 1);
}
let newFact = factorial(10);
console.log(`The Factorical of 10 is ${newFact}`);