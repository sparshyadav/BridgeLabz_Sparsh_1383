// 1. Creating a Simple Object
const person={
    name: "Sparsh",
    age: 22,
    greet(){
        console.log(`Hello my Name is ${this.name}`);
    }
}

console.log(person.name);
console.log(person.age);
person.greet();

// 2. Iterating Over it
function printObject(obj){
    for(let key in obj){
        console.log(`${key}: ${obj[key]}`);
    }
}
printObject(person);