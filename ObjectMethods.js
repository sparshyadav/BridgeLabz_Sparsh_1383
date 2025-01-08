// Object Property Methods
const obj = { a: 1, b: 2 };

// Object.keys(obj) - Returns an Array of given Object's property names(Keys)
console.log(Object.keys(obj));


// Object.values(obj) - Returns an Array of a given Object's property Values
console.log(Object.values(obj));


// Object.entries(obj) - Returns an Array of Object's properties [Key, Value] pairs
console.log(Object.entries(obj));


// Object.hasOwnProperty(property) - Checks if the Object has a Specific Property
console.log(obj.hasOwnProperty('a'));
console.log(obj.hasOwnProperty('c'));