// Rest Parameters
// Used for gathering indefinite number of arguments in a function
function sum(...args){
    return args.reduce((acc, num)=>{
        return acc+num;
    })
}

console.log(sum(5));
console.log(sum(5, 23));
console.log(sum(54, 1, 46));
console.log(sum(53, 67, 453, 23));


// Spread Syntax
// Used to expand elements of an iterable into individual elements
// Spread on Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);


// Spread on Objects
const obj1 = {
    a: 1,
    b: 2
}

const obj2 = {
    c: 3,
    d: 4
}

const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);