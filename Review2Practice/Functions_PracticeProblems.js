// // Beginner
// // Write an IIFE that logs "Hello, world!"
// (()=>{
//     console.log("Hello World!");
// })();


// // Create an NFE to calculate the Fibonacci sequence recursively
// const fibonacci=(n)=>{
//     if(n==0 || n==1){
//         return n;
//     }

//     return fibonacci(n-1)+fibonacci(n-2);
// }

// console.log(fibonacci(5));
// console.log(fibonacci(10));



// // Intermediate
// // Use an IIFE to create a private counter with increment and decrement methods
// const Counter = ((count) => {
//     return {
//         increment() {
//             count++;
//             console.log(`Count: ${count}`);
//         },
//         decrement() {
//             count--;
//             console.log(`Count: ${count}`);
//         }
//     }
// })(0);

// Counter.increment();
// Counter.increment();
// Counter.decrement();


// // Write a new Function to evaluate a mathematical expression dynamically
// const expression = 'a-b';
// const calc = new Function("a", "b", `return ${expression}`);
// console.log(calc(5, 3));