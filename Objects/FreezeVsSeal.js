const obj = {
    name: "Sparsh",
    age: 22,
    city: "Meerut",
    college: "Chitkara University"
}

// Object.seal()
Object.seal(obj);
obj.country = "India";
obj.city = "Noida"

console.log(obj);


// Object.freeze()
Object.freeze(obj);
delete obj.college;
obj.name = "Sparsh Yadav";
console.log(obj);