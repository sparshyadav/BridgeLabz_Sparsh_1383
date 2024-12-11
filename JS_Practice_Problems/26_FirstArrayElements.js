// Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second.
// Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second.

// Approach - Use a Set to store all Array1 Elements and then store only those elements of Array2 that are not in Array1
let arr1 = [646, 23, 75, 43, 23, 54, 23, 75];
let arr2 = [23, 64, 75, 23, 436, 136, 326];

function combineArrays(arr1, arr2) {
    let st = new Set(arr2);
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!st.has(arr1[i])) {
            newArr.push(arr1[i]);
        }
    }

    return newArr;
}

console.log(`Original Array 1: ${arr1}`);
console.log(`Original Array 2: ${arr2}`);
let newArr = combineArrays(arr1, arr2);
console.log(`Combined Array: ${newArr}`);


