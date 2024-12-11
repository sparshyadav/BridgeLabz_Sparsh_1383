// Reverse a String

let str = "letsdoleetcode";

// Approach 1 - Converting the String into an Array and Using 2 Pointers
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

function reverseString(str) {
    let arr = str.split('');
    let reversedArr = reverse(arr);

    let newStr = "";
    reversedArr.forEach((s) => {
        newStr += s;
    })

    return newStr;
}

console.log(`Original String: ${str}`);
let reversedStr = reverseString(str);
console.log(`Reversed String: ${reversedStr}`);
console.log();


// Approach 2 - Using Spread Operator, InBuilt Methods
console.log(`Original Array: ${str}`);
let newStr = [...str].reverse().join('');
console.log(`Reversed Array: ${newStr}`);
console.log();

