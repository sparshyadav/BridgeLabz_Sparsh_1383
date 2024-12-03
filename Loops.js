let arr = [1, 5, 67, 34, 76, 23, 6, 754, 1323];
let n = arr.length;

const obj = {
    name: "Sparsh",
    age: 22
}

// For Loop
// for(let i=0; i<n; i++){
//     console.log(`${arr[i] }`);
// }


// For Of Loop
// for(let el of arr){
//     console.log(`${el} `);
// }


// // for In Loop
// for(let key in obj){
//     console.log(`${key}: ${obj[key]}`);
// }


// // forEach 
// arr.forEach((num, idx)=>{
//     console.log(`Index ${idx}: ${num}`);
// })


const numbers = [1, 35, 63, 321, 6, 32];
// // Map
// const newArr=numbers.map((val)=>{
//     return val**2;
// })
// console.log(newArr);


// // Filter
// const newArr = numbers.filter((val) => {
//     return val % 2 != 0;
// })
// console.log(newArr);


// Reduce
const sum=numbers.reduce((add, val)=>{
    return add+val
}, 0);
console.log(sum);