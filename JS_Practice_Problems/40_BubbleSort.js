// Implement the bubble sort algorithm for an array of numbers
function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

let arr = [646, 23, 75, 43, 23, 54, 23, 75];
let newArr = bubbleSort(arr);
console.log(newArr);