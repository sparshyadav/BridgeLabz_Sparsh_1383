function deepCopy(obj) {
    let newObj = JSON.parse(JSON.stringify(obj));
    return newObj;
}

function shallowCopy(obj) {
    let newObj = { ...obj };
    return newObj;
}

function alternateCopy(arr) {
    let newArr = arr.map((obj, idx) => {
        return idx % 2 === 0 ? deepCopy(obj) : shallowCopy(obj);
    });

    return newArr;
}

let arr = [{ a: 5 }, { b: 32 }, { c: { d: 27 } }];
let newArr = alternateCopy(arr);

newArr[0].a = 55;
console.log("Original arr[0].a:", arr[0].a);

newArr[1].b = 55;
console.log("Original arr[1].b:", arr[1].b);

newArr[2].c.d = 99;
console.log("Original arr[2].c.d:", arr[2].c.d);

newArr[1].newKey = "test";
console.log("Original arr[1]:", arr[1]);
console.log("New arr[1]:", newArr[1]); 