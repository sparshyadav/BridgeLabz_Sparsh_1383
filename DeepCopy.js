let arr = [1, 2, [3, 4], [5, [6, 7, [8]]]];

function deepCopy(arr, newArr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let nestedArr = [];
            deepCopy(arr[i], nestedArr);
            newArr.push(nestedArr);
        }
        else {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

let newArr = deepCopy(arr, []);
console.log(newArr);
console.log(newArr[3]);