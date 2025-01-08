// Shallow Copy
const obj = { a: 1, b: { c: 2 } };
const shallowCopy = { ...obj };

shallowCopy.a = 2;
console.log(obj.a);



// Deep Copy
const obj2 = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.a = 7;
console.log(obj2.a);