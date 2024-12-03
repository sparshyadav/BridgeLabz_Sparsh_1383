// Destructring Arrays
// let numbers = [1, 2, 4, 5, 2];

// // Basic Example
// const [first, second, third, fourth, fifth] = numbers;
// console.log(`${first}, ${second}, ${third}, ${fourth}, ${fifth}`);


// // Skipping Values
// const [first, , second, , third] = numbers;
// console.log(`${first}, ${second}, ${third}`);


// // Default Values
// const [first, , second, , , sixth=11]=numbers;
// console.log(`${first}, ${second}, ${sixth}`);


// // Swapping Values
// let a=10;
// let b=20;
// [a, b]=[b, a];
// console.log(`a=${a}, b=${b}`);


// // Rest Pattern in Arrays
// const [first, ...rest]=numbers;
// console.log(`${first}, ${rest}`);



// Destructuring Objects
const user = {
    name: "Sparsh",
    age: 22,
    town: "Meerut"
}

// // Basic Examples
// const {name, age}=user;
// console.log(`${name}, ${age}`);


// // Renaming Variables
// const {name: userName, age: userAge}=user;
// console.log(`${userName}, ${userAge}`);


// // Default Values
// const {name, age, town="Meerut"}=user;
// console.log(`${name}, ${age}, ${town}`);


// Rest Pattern in Objects
const { name, ...rest } = user;
console.log(rest);










