// Create a function to return the longest word in a string
function longestWord(str) {
    let arr = str.split(" ");

    let longWord = "";
    let longLength = 0;
    arr.forEach((word) => {
        if (word.length > longLength) {
            longLength = word.length;
            longWord = word;
        }
    });

    return longWord;
}

let str1 = "Hi ther let's do leetcode";
let str2 = "I am Sparsh Yadav";

console.log(`The Longest Word in ${str1} is: ${longestWord(str1)}`);
console.log(`The Longest Word in ${str2} is: ${longestWord(str2)}`);