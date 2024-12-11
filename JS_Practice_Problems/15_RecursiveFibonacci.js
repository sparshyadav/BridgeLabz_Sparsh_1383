// Find the Nth Fibonacci Number using Recursion

// Approach - Using Recursion, Returning the sum of n-1th term and n-2th term
function fibo(num) {
    if (num == 0 || num == 1) {
        return num;
    }

    return fibo(num - 1) + fibo(num - 2);
}

let n1 = 3;
let n2 = 8;
let n3 = 12;

console.log(`${n1}th Fibonacci Number is: ${fibo(n1)}`);
console.log(`${n2}th Fibonacci Number is: ${fibo(n2)}`);
console.log(`${n3}th Fibonacci Number is: ${fibo(n3)}`);