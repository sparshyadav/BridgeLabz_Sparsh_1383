// Reverse an Array

let arr = [646, 23, 75, 43, 23, 54, 23, 75];

// Approach 1 - Using 2 Pointers
function reverse(arr) {
    let n = arr.length;

    let i = 0;
    let j = n - 1;

    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }

    return arr;
}


console.log(`Original Array: ${arr}`);
let reversedArr = reverse(arr);
console.log(`Reversed Array: ${reversedArr}`);
console.log();


// Approach 2 - Using Inbuild Methods
console.log(`Original Array: ${arr}`);
console.log(`Reversed Array: ${arr.reverse()}`);
console.log();

console.log(`Original Array: ${arr}`);
let newArr = arr.toReversed();
console.log(`Reversed Array: ${newArr}`);
console.log();
