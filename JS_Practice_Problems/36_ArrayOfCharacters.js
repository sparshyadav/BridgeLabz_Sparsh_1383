// Create a function that converts a string to an array of characters
function wordsFromString(str) {
    let arr = str.split("");
    return arr;
}

let str = "letsdoleetcode";
let arr = wordsFromString(str);
console.log("The Characters from String are: ");
console.log(arr);