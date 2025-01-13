// Write a custom object that overrides the valueOf and toString methods to demonstrate the conversion to primitive values.
let obj = {
    a: "Sparsh",
    b: 30,
    valueOf() {
        return this.b;
    },
    toString() {
        return this.a;
    }
}

console.log(obj.valueOf());
console.log(obj.toString());