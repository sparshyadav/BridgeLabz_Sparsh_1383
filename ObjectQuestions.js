// Create an object user with properties name and age, and a method sayHello that logs "Hello, my name is <name> and I am <age> years old.".
const user = {
    name: "Alice",
    age: 22,
    sayHello: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
}

user.sayHello();



// Write a function mergeObjects(obj1, obj2) that merges two objects. If both objects have the same property, prefer the value from the second object.
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 20, d: 4 };

const mergedObject = mergeObjects(obj1, obj2);

console.log(mergedObject);



// Write a function deepClone(obj) that performs a deep clone of an object (including nested objects).
