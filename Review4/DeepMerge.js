// Write a function deepMerge that takes two objects and recursively merges them, preserving the deep structure.
function deepMerge(obj1, obj2) {
    const ansObj = { ...obj1 };

    for (const key in obj2) {
        if (typeof obj2[key] === "object") {
            ansObj[key] = deepMerge(ansObj[key], obj2[key]);
        }
        else {
            ansObj[key] = obj2[key];
        }
    }

    return ansObj;
}

const obj1 = { a: 1, b: 2, c: { d: 5 } };
const obj2 = { x: 7, y: 8, z: { p: 15 } };

const newObj = deepMerge(obj1, obj2);
console.log(newObj);