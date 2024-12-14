// // Beginner Level
// // Write a Funciton Sum and use Call to invoke with a specific context
// function add(a, b){
//     return a+b;
// }

// let sum=add.call(null, 5, 10);
// console.log(sum);


// // Find Minimum in an Array using Apply
// const numbers=[25, 17, 30, 11];
// const min=Math.min.apply(null, numbers);
// console.log(min);



// // Intermediate
// // Use Bind to prebind a function multiply to always multiplye by 10;
// function mul(a, b) {
//     return a * b;
// }

// const mulBy10 = mul.bind(null, 10);
// console.log(mulBy10(5));
// console.log(mulBy10(3));


// // Use Call to brorow method calcArea from one Object
// let plot = {
//     len: 50,
//     bre: 35,
//     calcArea() {
//         return this.len * this.bre;
//     }
// }

// const plot2 = {
//     len: 30,
//     bre: 25
// }

// let areaPlot2 = plot.calcArea.call(plot2);
// console.log(areaPlot2);



// Advanced
// Implement a Logger funciton that prefixed all log messages with [INFO] using Bind
function logger(prefix, message) {
    console.log(`${prefix} ${message}`);
}

const infoLogger = logger.bind(null, "[INFO]:");
infoLogger("This is an info message");


// Create a Polfyfill for bind() and test it
Function.prototype.myBind = function (context, ...args) {
    const fn = this;
    return function (...newArgs) {
        return fn.apply(context, [...args, ...newArgs]);
    };
};

function greet(greeting, name) {
    console.log(`${greeting}, ${name}`);
}

const greetUser = greet.myBind(null, "Hello");
greetUser("Sparsh");