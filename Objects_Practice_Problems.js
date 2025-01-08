// // Beginner
// // 1. Creating a Simple Object
// const person={
//     name: "Sparsh",
//     age: 22,
//     greet(){
//         console.log(`Hello my Name is ${this.name}`);
//     }
// }

// console.log(person.name);
// console.log(person.age);
// person.greet();

// // 2. Iterating Over it
// function printObject(obj){
//     for(let key in obj){
//         console.log(`${key}: ${obj[key]}`);
//     }
// }
// printObject(person);



// // Intermediate
// // 1. Dynamic Key-Value Assignment
// let obj = {};
// let obj2={};

// function addProperty(obj, key, value) {
//     obj[key] = value;
// };

// console.log(obj);
// addProperty(obj, "firstName", "Sparsh");
// addProperty(obj, "lastName", "Yadav");
// console.log(obj);

// console.log(obj2);
// addProperty(obj2, "fullName", "Raghav Khattar");
// console.log(obj2);

// // 2. Merge Two Objects
// function mergeObjects(obj1, obj2){
//     let newObj={...obj2, ...obj1};
//     return newObj;
// }

// const newObj=mergeObjects(obj, obj2);
// console.log(newObj);



// // Advanced
// // 1. Deep Comparison
// let obj1 = {
//     country: {
//         state: {
//             town: "Meerut"
//         }
//     }
// }

// let obj2 = {
//     country: {
//         state: {
//             town: "Delhi"
//         }
//     }
// }

// let obj3 = {
//     country: {
//         state: {
//             town: "Meerut"
//         }
//     }
// }

// function areObjectsEqual(obj1, obj2) {
//     if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 == null || obj2 == null) {
//         return obj1 === obj2;
//     }

//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);
//     if (keys1.length !== keys2.length) {
//         return false;
//     }

//     for (let key of keys1) {
//         if (!obj2.hasOwnProperty(key) || !areObjectsEqual(obj1[key], obj2[key])) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(areObjectsEqual(obj1, obj2));
// console.log(areObjectsEqual(obj1, obj3));