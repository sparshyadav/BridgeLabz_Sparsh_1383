// // Using Symbol.toPrimitive
// let obj={
//     [Symbol.toPrimitive](hint){
//         if(hint=="string"){
//             return "I am a String"
//         }
//         if(hint=="number"){
//             return 42;
//         }

//         return null;
//     }
// };

// console.log(String(obj)); // I am a String
// console.log(Number(obj)); // 42
// console.log(obj+""); // null



// // Overriding toString and valueOf
// let obj={
//     toString(){
//         return "Hello";
//     },
//     valueOf(){
//         return 100;
//     }
// };

// console.log(String(obj)); // Hello
// console.log(Number(obj)); // 100
// console.log(obj+""); // 100



// Use Cases
// String Concatenation
let user = {
    name: "Alice",
    toString() {
        return this.name;
    }
};
console.log("Hello" + user);

// Mathematical Operations
let counter = {
    value: 0,
    valueOf() {
        return this.value++;
    }
};
console.log(counter + 1);
console.log(counter + 1);
console.log(counter + 1);

