const weakMap=new WeakMap();

const obj1={};
const obj2={};

weakMap.set(obj1, "Value of obj1");
weakMap.set(obj2, "Value of obj2");

console.log(weakMap.get(obj1));
console.log(weakMap.get(obj2));
console.log(weakMap.has(obj2));
console.log(weakMap.has(obj3));