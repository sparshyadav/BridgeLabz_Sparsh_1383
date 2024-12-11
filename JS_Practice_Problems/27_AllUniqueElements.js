// Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
// Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second.
// Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second.

// Approach - Use a Set to store all Array1 Elements and then store only those elements of Array2 that are not in Array1
let arr1 = [646, 23, 75, 43, 23, 54, 23, 75];
let arr2 = [23, 64, 75, 23, 436, 136, 326];

function combineArrays(arr1, arr2) {
    let st = new Set(arr2);

    for (let item of arr1) {
        st.add(item)
    }

    let newArr = Array.from(st);
    return newArr;
}

console.log(`Original Array 1: ${arr1}`);
console.log(`Original Array 2: ${arr2}`);
let newArr = combineArrays(arr1, arr2);
console.log(`Combined Array: ${newArr}`);


