// Print the first 100 Prime Numbers
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
while (count < 101) {
    if (checkPrime(num)) {
        console.log(`${count}th Prime Number is: ${num}`);
        count++;
    }

    num++;
}