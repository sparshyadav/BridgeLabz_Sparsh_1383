// Non Strict Code where y is not defined but still used
// let x=10;
// y=20;
// console.log(y);

// 'use strict'
// let x=10;
// y=20;
// console.log(y); // ReferenceError: y is not defined


// Function Level Use Strict
function myFun(){
    'use strict';
    let x=20;
    y=40;
    console.log(x, y);
}

function myFun2(){
    x=30;
    console.log(x);
}

myFun2(); // 30
myFun(); // ReferenceError y is not defined

