// Find the frequency of letters inside a string. Return the result as an array of arrays. Each subarray has 2 elements: letter and number of occurrences
function freq(str) {
    let ans = [];
    let mp = new Map();

    for (let s of str) {
        if (mp.has(s)) {
            mp.set(s, mp.get(s) + 1);
        } else {
            mp.set(s, 1);
        }
    }

    for (let [key, value] of mp.entries()) {
        ans.push([key, value]);
    }

    return ans;
}

let str1 = "letsdoleetcode";
let str2 = "iamsparshyadav";

console.log(freq(str1));
console.log(freq(str2)); 