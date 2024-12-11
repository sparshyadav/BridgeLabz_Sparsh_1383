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

let sum = primes.reduce((acc, num) => {
    return acc + num;
}, 0);

console.log(`The Sum of First 100 Prime Numbers is: ${sum}`);