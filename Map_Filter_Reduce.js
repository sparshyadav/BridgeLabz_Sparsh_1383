let arr = [1, 2, 3, 4];

// for loop
console.log("for loop:");
for (let i = 0; i < arr.length; i++) {
    console.log(`${i}th Element is: ${arr[i]}`);
}
console.log(".....");


// while loop
let i = 0;
console.log("while loop:");
while (i < arr.length) {
    console.log(`${i}th Element is: ${arr[i]}`);
    i++;
}
console.log(".....");


// do while loop
i = 0;
console.log("do...while loop:");
do {
    console.log(`${i}th Element is: ${arr[i]}`);
    i++;
} while (i < arr.length);
console.log(".....");


// for in  Loop
console.log("for...in loop:");
for (let index in arr) {
    console.log(`${index}th Element is: ${arr[index]}`);
}
console.log(".....");


// for of Loop
console.log("for...of loop:");
for (let value of arr) {
    console.log(`Value is: ${value}`);
}
console.log(".....");


// forEach method
console.log("forEach method:");
arr.forEach((value, index) => {
    console.log(`${index}th Element is: ${value}`);
});
console.log(".....");


// map method
console.log("map method:");
let doubled = arr.map(value => value * 2);
console.log(doubled);
console.log(".....");


// filter method
console.log("filter method:");
let evenNumbers = arr.filter(value => value % 2 === 0);
console.log(evenNumbers);
console.log(".....");


// reduce method
console.log("reduce method:");
let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum);
console.log(".....");
