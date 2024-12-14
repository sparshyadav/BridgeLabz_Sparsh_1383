// Decorators
function logFunctionCall(func) {
    return function (...args) {
        console.log(`Calling Function: ${func.name}`);
        return func(...args);
    };
}

function sayHello(name) {
    return `Hello, ${name}`;
}

const print = logFunctionCall(sayHello);
console.log(print("Sparsh"));