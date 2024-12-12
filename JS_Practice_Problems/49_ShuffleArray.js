// Shuffle a String Array
function generateRandom(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

function shuffleArray(arr) {
    let n = arr.length;

    let newArr = [];
    let st = new Set();

    let count = 0;
    while (count < n) {
        let random = generateRandom(0, n - 1);

        if (!st.has(random)) {
            newArr[random] = arr[count];
            st.add(random);
            count++;
        }
    }

    return newArr;
}

let arr = ["hi", "how", "are", "you", "doing", "these", "days"];
let newArr = shuffleArray(arr);
console.log(newArr);
