// let arr=[1, 2, 3, 4];
// let arr2=arr;
// arr2[1]=10;
// console.log(arr);


let arr = [1, 2, [3, 4], [5, [6, 7, [8]]]];
let arr2 = JSON.parse(JSON.stringify(arr));
console.log(arr2);


let arr3=structuredClone(arr2);
console.log(arr3);
