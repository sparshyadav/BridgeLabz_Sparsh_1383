// // Beginner
// // Write a function that accepts a variable number of arguments using the rest parameter and calculates their sum
// function sum(...args) {
//     let add = args.reduce((acc, num) => {
//         return acc + num;
//     }, 0);

//     return add;
// }

// console.log(sum(1, 2, 3));
// console.log(sum(1));
// console.log(sum(1, 43, 54, 23, 76, 54));

// // Demonstrate the use of spread syntax to merge two arrays
// function merge2Arrays(arr1, arr2) {
//     let newArr = [...arr1, ...arr2];

//     return newArr;
// }

// let arr1 = [43, 46, 23, 645, 33];
// let arr2 = [23, 6431, 35, 32, 64];
// console.log(merge2Arrays(arr1, arr2));



// Intermediate
// Use the rest parameter to write a function that accepts a name and a list of hobbies, and logs each hobby with the person's name
function hobbies(name, ...args) {
    console.log(`${name}'s Hobbies are: `);
    args.forEach((hob) => {
        console.log(hob);
    });
    console.log();
}

hobbies("Sparsh", "Cricket", "Movies", "Travelling");
hobbies("Rakshit", "Workout");
hobbies("Akshit", "Resting", "Sweets Eating");



// Advanced
// Write a function using closures that keeps track of how many times it has been called
function callCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(`This Function has been Called ${count} times`);
    };
}

const counter = callCounter();
counter();
counter();
counter();

// Demonstrate variable scoping by creating a global variable and two nested functions, with each accessing the global variable
let global = "I am Global";

function outer() {
    let outer = "I am Outer";

    function inner() {
        console.log(global);
        console.log(outer);
    }

    inner();
}

outer();