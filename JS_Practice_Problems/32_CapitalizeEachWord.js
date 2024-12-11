// Create a function that will capitalize the first letter of each word in a text
let str = "hi there! I am sparsh yadav, a B.Tech CSE student currently in 4th year";

function capitalizeWords(str) {
    let arr = str.split(" ");
    arr = arr.map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    });

    return arr.join(" ");
}

console.log(`Capitalized String is: ${capitalizeWords(str)}`);