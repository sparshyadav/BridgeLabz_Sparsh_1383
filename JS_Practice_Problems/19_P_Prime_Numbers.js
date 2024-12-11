// Create a Function that will return an Array the first 'P' Prime Numbers greater than 'N'
function checkPrime(num) {
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

function firstPPrime(p, n) {
    let arr = [];
    let num = n + 1;
    while (p > 0) {
        if (checkPrime(num)) {
            arr.push(num);
            p--;
        }

        num++;
    }

    return arr;
}

let p1 = firstPPrime(8, 10);
console.log(p1);

let p2 = firstPPrime(5, 101);
console.log(p2);

let p3 = firstPPrime(10, 25);
console.log(p3);
