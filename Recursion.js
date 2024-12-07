// Factorial Function
function factorial(num) {
    if (num == 0) {
        return 1;
    }

    return num * factorial(num - 1);
}

console.log(factorial(4));
console.log(factorial(6));


// Fibonacci Number
function fibonacci(num) {
    if (num == 0 || num == 1) {
        return num;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(5));
console.log(fibonacci(8));