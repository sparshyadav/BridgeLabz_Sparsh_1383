// Create a function that will convert a string in an array containing the ASCII codes of each character
function ASCIIChar(str) {
    let arr = str.split("");

    arr = arr.map((s) => {
        let ch = s.charCodeAt(0);
        return { s, ch };
    });

    return arr;
}

let str = "letsdoleetcode";
let arr = ASCIIChar(str);
console.log("The ASCII Characters are: ");
console.log(arr);