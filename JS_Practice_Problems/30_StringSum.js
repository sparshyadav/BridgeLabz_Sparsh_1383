// The numbers are received as strings and the result should be also provided as string.
function stringSum(str1, str2) {
    let num1 = Number(str1);
    let num2 = Number(str2);

    let sum = num1 + num2;
    return String(sum);
}

let str1 = "123";
let str2 = "5674";
let sum = stringSum(str1, str2);
console.log(`The Sum of ${str1} and ${str2} is ${sum}`);