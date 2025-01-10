// Objects, Object Methods - assign, entries, forOf, spread

// Convert Object Properties into a String URL
const obj = {
    name: "Sparsh",
    age: 22,
    city: "Meerut",
    email: "sparsh@gmail.com"
}

function convertURL(obj) {
    let str = "";
    for (let key in obj) {
        str += key;
        str += '=';
        str += obj[key];
        str += '&';
    }

    let url = str.substring(0, str.length - 1);

    return url;
}

const convertUrl = (obj) => {
    let str = Object.entries(obj).map(([key, value]) => {
        return `${key}=${value}`;
    }).join(`&`);

    return str;
}

let ans1 = convertURL(obj);
let ans2 = convertUrl(obj);

console.log(ans1);
console.log(ans2);
console.log();



// Grouping an Array of Objects by Keys
const arr = [
    { name: "Sparsh", year: "3rd" },
    { name: "Raghav", year: "2nd" },
    { name: "Rakshit", year: "3rd" },
    { name: "David", year: "1st" },
    { name: "Josh", year: "3rd" },
    { name: "Kevin", year: "2nd" },
    { name: "Stacey", year: "1st" },
    { name: "Rohit", year: "1st" },
    { name: "Virat", year: "2nd" },
    { name: "Pat", year: "3rd" },
];

function convertYearWise(arr) {
    let obj = {};

    for (let ob of arr) {
        if (!obj.hasOwnProperty(ob.year)) {
            obj[ob.year] = [];
        }

        obj[ob.year].push(ob);
    }

    return obj;
}

let ans = convertYearWise(arr);
console.log(ans);
console.log();



// Merging Multiple Objects with Priority
const obj1 = { name: "Sparsh", age: 22 };
const obj2 = { age: 23, city: "Delhi" };
const obj3 = { city: "Mumbai", country: "India" };

function mergeObjects(obj1, obj2, obj3) {
    let ans = Object.assign({}, obj1, obj2, obj3);
    return ans;
}

function mergeObj(obj1, obj2, obj3) {
    let ans = { ...obj1, ...obj2, ...obj3 };
    return ans;
}

let ans3 = mergeObjects(obj1, obj2, obj3);
let ans4 = mergeObj(obj1, obj2, obj3);

console.log(ans3);
console.log(ans4);
