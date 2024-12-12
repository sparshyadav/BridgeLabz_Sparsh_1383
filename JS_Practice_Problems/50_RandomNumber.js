// Create a function that will receive n as argument and return an array of n random numbers from 1 to n. The numbers should be unique inside the array.
function generateRandom(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

function createUnique(n) {
    let arr = [];

    let st = new Set();
    let count = 0;

    while (count < n) {
        let random = generateRandom(1, n);

        if (!st.has(random)) {
            st.add(random);
            arr.push(random);
            count++;
        }
    }

    return arr;
}

let n1 = 15;
let n2 = 55;
let n3 = 100;

console.log(createUnique(n1));
console.log(createUnique(n2));
console.log(createUnique(n3));