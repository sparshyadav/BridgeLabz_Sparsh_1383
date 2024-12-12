// Create a function that will convert an array containing ASCII codes in a string
function ASCIIToChar(arr) {
    arr = arr.map((num) => {
        let ch = String.fromCharCode(num);
        return { num, ch };
    });

    return arr;
}

let arr = [108, 101, 115, 99, 100, 120, 228, 75, 68];
let newArr = ASCIIToChar(arr);
console.log(newArr);
