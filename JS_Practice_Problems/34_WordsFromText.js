// Create a function that returns an array with words inside a text
function wordsFromString(str) {
    let arr = str.split(" ");
    return arr;
}

let str = "Hi there! I am Sparsh Yadav, a B.Tech CSE Student currently in 4th year";
let arr = wordsFromString(str);
console.log("The Words from Text are: ");
console.log(arr);