// // Array Creation and Access
// // Array() - Creates a new Array
// const arr = new Array(5); // Creates an Empty array of size 5
// const arr2 = Array.of(1, 2, 3); // Creates an array with values
// console.log(arr);
// console.log(arr2);


// // Array.isArray() - Checks if a Variable is an Array
// console.log(Array.isArray([1, 2, 3]));
// console.log(Array.isArray(1, 2, 3));
// console.log(Array.isArray("Hello"));


// // at() - Accesses an Array Element by Index (Supports Negative Indexes)
// const arr = [10, 20, 30, 40];
// console.log(arr.at(2));
// console.log(arr.at(4));
// console.log(arr.at(-2));



// // Adding/Removing Elements
// // push() - Adds Elements to the end of the Array
// const arr = [1, 2];
// arr.push(3, 4, 5, 6);
// console.log(arr);


// // pop() - Removes the Last Element of the Array
// const arr = [1, 2, 3, 5];
// console.log(arr);
// arr.pop();
// console.log(arr);


// // unshift() - Adds Elements to the Beginning of the Array
// const arr=[2, 3, 4];
// console.log(arr);
// arr.unshift(0, 1);
// console.log(arr);


// // shift() - Removes and Returns the First Element
// const arr = [1, 2, 3, 4];
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);


// // splice() - Adds, Removes, or Replaces Elements in an Array 
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.splice(1, 2, 'a', 'b', 'c');
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);


// // concat() - Merge Arrays into a New Array
// const arr1 = [1, 2];
// const arr2 = [5, 6, 7];
// const result = arr1.concat(arr2);
// console.log(result);



// // Iteration
// // forEach() - Executes a Callback for each Element
// const arr=[12, 43, 54, 23, 23, 64];
// arr.forEach((num)=>{
//     console.log(num);
// });


// // map() - Creates a New Array by Applying a function to each Element
// const arr = [21, 35, 64, 56, 86, 34];
// const doubledArr = arr.map((num) => {
//     return num * 2;
// });
// console.log(doubledArr);


// // filter() - Creates a new Arary with Elements that pass a test
// const arr = [64, 645, 23, 12364, 75, 54];
// const oddNum = arr.filter((num) => {
//     return num % 2 != 0;
// });
// console.log(oddNum);


// // reduce() - Reduces an Array into a Single Value
// const arr = [43, 546, 23, 21, 76];
// const sum = arr.reduce((acc, num) => {
//     return acc + num;
// }, 0);
// console.log(sum);


// // // reduceRight() - Reduces an Array into a Single Value from the Right
// const arr = [43, 546, 23, 21, 76];
// const sum = arr.reduceRight((acc, num) => {
//     return acc + num;
// }, 0);
// console.log(sum);


// // some() - Checks if Atleast One Element passes the Test
// const arr = [32, 53, 21, 64, 75, 43];
// const hasEven = arr.some((num) => {
//     return num % 2 !== 0;
// });
// console.log(hasEven);


// // every() - Checks if all Elements pass a test
// const arr = [12, 53, 35, 53, 23, 64];
// const allPositive = arr.every((num) => {
//     return num > 0;
// });
// console.log(allPositive);



// // Seachcing and Finding
// // indexOf() - Returns the first inded of an Element
// const arr=[32, 53, 43, 64, 234];
// console.log(arr.indexOf(43));
// console.log(arr.indexOf(433));


// // lastIndexOf() - Returns the Last Index of an Element
// const arr=[43, 64, 32, 645, 43];
// console.log(arr.lastIndexOf(43));


// // includes() - Checks if an Array contains a Specific Value
// const arr = [1, 2, 43, 532, 132];
// console.log(arr.includes(43));
// console.log(arr.includes(433));


// // find() - Returns the First Element that satisfies a Condition
// const arr = [1, 2, 3, 4];
// const even = arr.find((num) => {
//     return num % 2 == 0;
// });
// const negative=arr.find((num)=>{
//     return num<0;
// });
// console.log(even);
// console.log(negative); // Undefined


// // findIndex() - Returns index of the First Element that satisfies a Condition
// const arr = [1, 2, 3, 4];
// const even = arr.findIndex((num) => {
//     return num % 2 == 0;
// });
// const negative = arr.findIndex((num) => {
//     return num < 0;
// });
// console.log(even);
// console.log(negative); // -1



// // Sorting and Reordering
// // sort() - Sorts Elements in place
// const arr = [32, 443, 32, 43, 53, 32];
// console.log(arr);
// arr.sort((a, b) => a - b); // Ascending Order
// console.log(arr);
// arr.sort((a, b) => b - a); // Descending Order
// console.log(arr);


// // reverse() - Reverses the order of Elements
// const arr = [32, 443, 32, 43, 53, 32];
// console.log(arr);
// arr.reverse();
// console.log(arr);


// // fill() - Fills an Array with a Static Value
// const arr = new Array(3).fill(0);
// console.log(arr);



// // Extraction and Slicing
// // slice() - Returns a Shallow Copy of a Portion of the Array
// const arr=[32, 645, 43, 75, 234, 42];
// console.log(arr.slice(2, 5));
// console.log(arr);


// // join() - Joins Array Elements into a String
// const arr=['H', 'e', 'l', 'l', 'o'];
// let str=arr.join("");
// console.log(str);


// // split() - Converst a String into an Array
// const str='hello';
// let arr=str.split('');
// console.log(arr);



// // Conversion
// // toString() - Converts the Array to a String
// let arr=[3, 32, 64, 75, 3];
// console.log(arr.toString());


// // toLocaleString() - Converts the Array to a Localized String
// const arr = [32, 64, 34, 75, 43];
// console.log(arr.toLocaleString());



// Utility Methods
// flat() - Flattens nested arrays to a specified depth
const arr = [1, [2, 3], [4, [5, 6]]];
console.log(arr.flat(3));
