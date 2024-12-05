// // Variables that hold the objects share reference to the objects
// const obj1 = {
//     name: "Sparsh"
// }

// const obj2 = obj1;
// obj2.name = "Alice";
// console.log(obj1.name);

// // Comparing Objects
// const a = { val: 10 };
// const b = { val: 10 };
// const c = a;

// console.log(a === b);
// console.log(a == b);
// console.log(a == c);
// console.log(a === c);


// Copying Objects
const original = {
    name: "Alice",
    details: {
        age: 25
    }
}

// // Shallow Copy
// // A shallow copy creates a new objcet but only copies the top level properties.
// const copy={...original};

// copy.details.age=30;
// console.log(original.details.age);

// Deep Copy
// A deep copy creates a completely independent copy of an object, including all nested objects
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.details.age = 30;
console.log(original.details.age);

