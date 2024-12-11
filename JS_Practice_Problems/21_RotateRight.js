// Rotate an Array to the Left by 1 Position

let arr = [646, 23, 75, 43, 23, 54, 23, 75];

// Approach 1 - Using Unshift and Pop
function rotateUsingUnshift(arr) {
    let n = arr.length;
    let last = arr[n - 1];
    arr.pop();
    arr.unshift(last);

    return arr;
}

console.log(`Original Array: ${arr}`);
const newArr = rotateUsingUnshift(arr);
console.log(`Rotated Array: ${newArr}`);


// Approach 2 - Using Reverse
function reverse(arr, i, j) {
    while (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }

    return arr;
}

function rotate(arr) {
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, 0);
    reverse(arr, 1, arr.length - 1);

    return arr;
}

console.log(`Original Array: ${arr}`);
let ans = rotate(arr);
console.log(`Rotated Array: ${ans}`);