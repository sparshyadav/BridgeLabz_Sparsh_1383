// // Call
// function greet(greeting, punctuation) {
//     console.log(`${greeting}, ${this.name}${punctuation}`);
// }

// const person = { name: "Sparsh" };

// greet.call(person, "Hi", '!');


// // Apply
// function sum(a, b, c) {
//     return a + b + c;
// }

// const numbers = [10, 20, 30, 40];
// const add = sum.apply(null, numbers);
// console.log(add);


// // Bind
// const person = {
//     name: "Sparsh",
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// };

// const per = {
//     name: "Rakshit"
// };

// const p1 = person.greet.bind(per);
// p1();



// // Usecases 
// // Borrowing Methods Using Call
// const person1 = { name: "Alice" };
// const person2 = { name: "Bob" };

// function introduce() {
//     console.log(`Hi, I am ${this.name}`);
// }

// introduce.call(person1);
// introduce.call(person2);


// Max/Min Using Apply
const numbers=[3, 53, 21, 46, 54];
const max=Math.max.apply(null, numbers);
console.log(max);

