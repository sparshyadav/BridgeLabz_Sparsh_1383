// 1. Deep Comparison
let obj1 = {
    country: {
        state: {
            town: "Meerut"
        }
    }
}

let obj2 = {
    country: {
        state: {
            town: "Delhi"
        }
    }
}

let obj3 = {
    country: {
        state: {
            town: "Meerut"
        }
    }
}

function areObjectsEqual(obj1, obj2) {
    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 == null || obj2 == null) {
        return obj1 === obj2;
    }

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!obj2.hasOwnProperty(key) || !areObjectsEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

console.log(areObjectsEqual(obj1, obj2));
console.log(areObjectsEqual(obj1, obj3));