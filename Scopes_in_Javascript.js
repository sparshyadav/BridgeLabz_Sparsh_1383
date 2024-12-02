// Global Scope
// let globalVariable="Global Variable";

// function fun(){
//     console.log(globalVariable); // Global Variable
// }
// fun();

// console.log(globalVariable); // Global Variable



// Function Scope/ Local Scope
// function fun(){
//     let functionLetVariable="Function Variable";

//     var functionVarVariable="Function Variable";
//     console.log(functionVarVariable);
// }
// fun(); // Function Variable
// console.log(functionVarVariable); // ReferenceError as functionVariable is not defined



// Block Scope
// {
//     let blockLetVariable = "Block Let Variable";
//     const blockConstVariable = "Block Const Variable";
//     var blockVarVariable = "Block Var Variable";

//     console.log(blockLetVariable); // Block Let Variable
//     console.log(blockConstVariable); // Block Const Variable
//     console.log(blockVarVariable); // Block Var Variable
// }

// console.log(blockLetVariable); // ReferenceError as blockLetVariable is not defined
// console.log(blockConstVariable); // ReferenceError as blockConstVariable is not defined
// console.log(blockVarVariable); // Block Var Variable