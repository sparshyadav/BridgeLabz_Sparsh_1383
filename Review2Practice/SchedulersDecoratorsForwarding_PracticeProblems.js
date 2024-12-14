// // Beginner
// // Write a setTimeout function to log "Hello, world!" after 3 seconds.
// function sayHello() {
//     console.log("Hello World!");
// }

// setTimeout(sayHello, 3000);

// // Create a decorator that logs the arguments of a function before executing it.
// function logArgs(func) {
//     return function (...args) {
//         console.log(`Arguments: ${args}`);
//         return func.apply(this, args);
//     }
// }

// function add(a, b) {
//     return a + b;
// }

// const print = logArgs(add);
// console.log(print(5, 7));



// // Intermediate
// // Use setInterval to display a countdown from 10 to 1
// let count=10;
// const timer=setInterval(()=>{
//     console.log(count--);

//     if(count==0){
//         clearInterval(timer);
//     }
// }, 1000);


// Write a decorator that only allows a function to execute if all its arguments are numbers
function add(...args) {
    let sum = args.reduce((acc, num) => {
        return acc + num;
    }, 0);

    return sum;
}

function checkPositive(fun) {
    return function (...args) {
        let check = args.every((arg) => {
            return typeof (arg) == "number";
        })

        if (!check) {
            console.log('Only Numberic Arguments');
            return;
        }

        return fun.apply(this, args);
    }
}

let check = checkPositive(add);
console.log(check(5, 10));
check(5, "hello");
check(5, null);
