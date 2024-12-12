// Create a function that will convert a string containing a binary number into a number
function convert(str) {
    let num = parseInt(str, 2);

    return num;
}

let str1 = "1001";
let str2 = "111";
let str3 = "10101";

console.log(`${str1} in Number is: ${convert(str1)}`);
console.log(`${str2} in Number is: ${convert(str2)}`);
console.log(`${str3} in Number is: ${convert(str3)}`);