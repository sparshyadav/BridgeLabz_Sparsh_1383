// Create an object user with properties name and age, and a method sayHello that logs "Hello, my name is <name> and I am <age> years old.".
const user = {
    name: "Alice",
    age: 22,
    sayHello: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
}

user.sayHello();