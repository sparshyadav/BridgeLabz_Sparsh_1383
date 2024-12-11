// Print the Odd Numbers less than 100

// Approach 1 - Using For Loop, and Skipping Even Iteration
console.log("Printing by Skipping Even Iterations");
for (let i = 1; i < 101; i += 2) {
    console.log(i);
}
console.log();

// Approach 1 - Using For Loop, Checking Even-Odd Numbers
console.log("Printing by Checking Even/Odd Numbers");
for (let i = 1; i < 101; i += 2) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
console.log();