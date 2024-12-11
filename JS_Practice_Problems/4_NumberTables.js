// Print Multiplication Tables of Numbers from 1 to 10

// Approach 1 - Using Nested For Loop
for (let i = 1; i < 11; i++) {
    console.log(`Table of ${i}`);
    for (let j = 1; j < 11; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }

    console.log();
}

console.log();

// Approach 2 - Using Nested While Loop
let i = 1;
while (i < 11) {
    console.log(`Table of ${i}`);
    let j = 1;
    while (j < 11) {
        console.log(`${i} x ${j} = ${i * j}`);
        j++;
    }
    console.log();
    i++;
}

console.log();