// // Function Decorator
// function logDecorator(func){
//     return function(...args){
//         console.log(`Calling Function with Arguments: ${args}`);
//         const result=func(...args);
//         console.log(`Function Returned: ${result}`);
//         return result;
//     };
// }

// function add(a, b){
//     return a+b;
// }

// const decoratedAdd=logDecorator(add);
// decoratedAdd(2, 3);



// Class Decorator
function logClass(target) {
    console.log(`Class ${target.name} was created`);
}

@logClass
class Person {
    constructor(name) {
        this.name = name;
    }
}

const p1 = new Person("Sparsh");
