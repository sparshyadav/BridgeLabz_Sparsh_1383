// Create a function that will return the number of words in a text

let str = "Hi there! I am Sparsh Yadav, a B.Tech CSE Student currently in 4th year";

function countWords(str) {
    let arr = str.split(" ");
    return arr.length;
}

console.log(`The Number of Words in - ${str} is: ${countWords(str)}`);