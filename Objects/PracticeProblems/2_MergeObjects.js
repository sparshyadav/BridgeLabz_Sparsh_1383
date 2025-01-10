// Write a function mergeObjects(obj1, obj2) that merges two objects. If both objects have the same property, prefer the value from the second object.
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 20, d: 4 };

const mergedObject = mergeObjects(obj1, obj2);

console.log(mergedObject);