// Functional Scope
// function test(){
//     let letVariable=25;
//     var varVariable=50;
//     const constVariable=100;
// }

// console.log(letVariable); // ReferenceError as letVariable is not defined
// console.log(varVariable); // ReferenceError as varVariable is not defined
// console.log(constVariable); // ReferenceError as constVariable is not defined



// Block Scope
// let letVariable=20;
// if (true) {
//     let letVariable = 25;
//     var varVariable = 50;
//     const constVariable = 100;
// }

// console.log(letVariable); // ReferenceError as letVariable is not defined
// console.log(varVariable); // 50
// console.log(constVariable); // ReferenceError as constVariable is not defined



// Redeclaration and Reassignment
// let a=5;
// var b=7;
// const c=10;

// var b=25; // b=25
// b=30; // b=30

// let a=11; // SyntaxError as 'a' has already been declared
// b=12; // b=12

// const c=15; // SyntaxError as 'c' has already been declared
// c=20; // TypeError: Assignment to constant variable.


