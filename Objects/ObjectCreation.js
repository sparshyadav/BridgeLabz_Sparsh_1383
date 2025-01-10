// Object Literal
const person = {
    name: "Sparsh",
    age: 22,
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}

person.greet();



// new Object()
const obj = new Object();
obj.name = "Sparsh Yadav";

console.log(obj.name);



// Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hi this is ${this.name}, and I am ${this.age} years old`);
    }
}

const p = new Person("Alice", 30);
p.greet();



// Using Classes
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi this is ${this.name} and I am ${this.age} years old`);
    }
}

const people = new People("Bob", 25);
people.greet();
