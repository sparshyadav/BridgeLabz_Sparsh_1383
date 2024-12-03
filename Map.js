// // Creating a New Map
// const map=new Map();

// // Adding Elements into the Map
// map.set("name", "Sparsh");
// map.set("age", 22);
// map.set("HomeTown", "Meerut");

// // // Printing out the entire Map
// // console.log(map);

// // Size of the Map
// console.log(map.size);

// // Retrieving Values
// console.log(map.get("name"));
// console.log(map.get("age"));
// console.log(map.get("HomeTown"));

// // Checkting if Value Exists
// console.log(map.has("name"));
// console.log(map.has("surname"));

// // Deleting a key-value pair by key
// console.log(map);
// map.delete("HomeTown");
// console.log(map);

// // Removing All Key Value Pair
// map.clear();
// console.log(map);



// // Iteration Methods
// const map = new Map([
//     ['a', 1],
//     ['b', 2],
//     ['c', 3],
//     ['d', 4],
//     ['e', 5],
// ]);

// // Keys() - Iterating over Keys
// for(const key of map.keys()){
//     console.log(key);
// }

// // values() - Iterating over Values
// for(const value of map.values()){
//     console.log(value);
// }

// // entries() - Iterating over entire Key Value Pair
// for(const [key, value] of map.entries()){
//     console.log(`${key}: ${value}`);
// }

// // forEach - calls the callback for each key-value pair
// map.forEach((val, key) => {
//     console.log(`${key} -> ${val}`);
// })



// Converting Array into Map
let arr = [['a', 1], ['b', 2], ['c', 3]];
const map = new Map(arr);
console.log(map);

// Converting Map to Array
const array = Array.from(map);
console.log(array);

// Converting Map to Object
const obj = Object.fromEntries(map);
console.log(obj);

// Converting Object to Map
const mapp = new Map(Object.entries(obj));
console.log(mapp);