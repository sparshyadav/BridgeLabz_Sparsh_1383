// Create a function that takes an Array as Input ana returns positive numbers

function positive(arr) {
    let newArr = arr.filter((num) => {
        return num >= 0;
    })

    return newArr;
}

let arr = [-21, 53, 775, 43, -643, -42, 23, 75];
let positiveArr = positive(arr);
console.log(positiveArr);