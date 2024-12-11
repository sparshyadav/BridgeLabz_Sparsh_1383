// Write a Function to check if a number is prime or not

// Approach - Using a For Loop to check if the number is divisible by any number between 2 and n/2
function checkPrime(num) {
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

let n1 = 15;
let n2 = 47;
let n3 = 83;

console.log(`Is ${n1} Prime: ${checkPrime(n1)}`);
console.log(`Is ${n2} Prime: ${checkPrime(n2)}`);
console.log(`Is ${n3} Prime: ${checkPrime(n3)}`);