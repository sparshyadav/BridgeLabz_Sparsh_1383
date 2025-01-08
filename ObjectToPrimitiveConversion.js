// // Object to String Conversion
// const obj = {
//     toString() {
//         return "I am a String";
//     },
//     valueOf() {
//         return 5;
//     }
// }

// console.log(String(obj));
// console.log(obj + "Cool");



// Object to Number Conversion
const obj = {
    toString() {
        return "123";
    },
    valueOf() {
        return 53;
    }
}

console.log(Number(obj));
console.log(obj - 10);



// // Symbol to Primitive 
// const obj = {
//     [Symbol.toPrimitive](hint) {
//         if (hint === "string") {
//             return "Primitive String";
//         }
//         else if (hint === "number") {
//             return 124;
//         }
//         return null;
//     }
// }

// console.log(String(obj));
// console.log(Number(obj));
// console.log(obj + "Test");
// console.log(obj + 5);
