// For + operator if any of the operrand is a string, the whole thing will convert into a string
// else for any other operator if there is a number the whole thing will get converted into a number

// // Implicit Type Conversions
// // String Conversion - When a non-string value is concatenated with a string, JS converts the non-string value into a string
// let result = 10 + "20";
// console.log(result);

// result = true + " is a boolean";
// console.log(result);


// // Numeric Conversion - When a string or other values is used in a mathematical operation, JS tries to convert it into a number
// let result = "5" - 3;
// console.log(result);

// result = "4" * "4";
// console.log(result);

// result = "abc" - 2;
// console.log(result);


// Boolean Conversion - JS converts values to true of false
// Falsy Values - 0, null, undefined, NaN, ""(empty string), and false.
// Truthy Values - All other values



// Explicit Type Conversion
// Converting to String
// 1. String() Function
// 2. .toString() method
let num = 100;
console.log(String(num));
console.log(num.toString());

let bool = false;
console.log(String(num));
console.log(num.toString());


// Converting to Number
// 1. Number() Function
// 2. Unary + Operator
let str = "124";
console.log(Number(str));
console.log(+str);

bool = true;
console.log(Number(bool));
console.log(+bool);
