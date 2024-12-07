// Logical Operator
// if any of the value if falsy, it returns the first falsy value
let value=0;
let result=value && 'hello';
console.log(result);

// If Both Values are truthy, it returns the second value
value=1;
result=value && 'hello';
console.log(result);


// // Nullish Coalescing Operator
// // It is used to provide default values only when the left hand operand is either null or undefined
// // If the left hand operand is null or undefined, it returns the right hand value, else return the left hand value
// // Null or Undefined Value
// let value=null;
// let val;
// let result=value??42;
// let res=val??50;
// console.log(result);
// console.log(res);

// // Non Null/ Non Undefined Values
// value=10;
// result=value??42;
// console.log(result);

