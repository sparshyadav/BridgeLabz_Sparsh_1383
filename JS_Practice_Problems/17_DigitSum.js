// Calculate the sum of digits of a positive integer number

// Approach 1 - Taking Individual Digits of a Number, and Summing them up
function digitSum(num) {
    let sum = 0;

    while (num != 0) {
        let remainder = Math.floor(num % 10);
        sum += remainder;
        num = num / 10;
    }

    return sum;
}

let num1 = 392;
let num2 = 34922;
let num3 = 8965;

console.log(`The Sum of Digits of ${num1} is: ${digitSum(num1)}`);
console.log(`The Sum of Digits of ${num2} is: ${digitSum(num2)}`);
console.log(`The Sum of Digits of ${num3} is: ${digitSum(num3)}`);


// Approach 2 - Converting the Number to String and then Storing each Digit into an Array and then Using Reduce
function digitSumArray(num) {
    let n = num.toString();

    let numbers = n.split('');

    let sum = numbers.reduce((acc, num) => {
        return acc + Number(num);
    }, 0)

    return sum;
}

num1 = 8943;
num2 = 3238;
num3 = 26425;

console.log(`The Sum of Digits of ${num1} is: ${digitSumArray(num1)}`);
console.log(`The Sum of Digits of ${num2} is: ${digitSumArray(num2)}`);
console.log(`The Sum of Digits of ${num3} is: ${digitSumArray(num3)}`);