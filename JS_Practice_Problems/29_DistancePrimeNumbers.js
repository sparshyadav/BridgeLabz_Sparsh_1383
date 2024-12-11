// Print the distance between the first 100 prime numbers
// Calculate the sum of first 100 prime numbers and return them in an array
function checkPrime(num) {
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

let count = 1;
let num = 2;

let primes = [];
while (count < 101) {
    if (checkPrime(num)) {
        primes.push(num);
        count++;
    }

    num++;
}

for (let i = 0; i < primes.length - 1; i++) {
    console.log(`The Distance between ${primes[i]} and ${primes[i + 1]} is: ${primes[i + 1] - primes[i]}`);
}

