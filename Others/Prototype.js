// //  Adding a Function to an Object's Prototype
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.greet = function () {
//     console.log(`Hi, my name is ${this.name}`);
// }

// const john = new Person("John David");
// john.greet();



// Basic Object Inheritance with Object.create()
const person = {
    name: "Default Name",
    age: 0,
    introduce() {
        console.log(`Hi, I am ${this.name} and I'm ${this.age} years old`);
    }
};

const student = Object.create(person);
console.log(student.__proto__);
student.grade = "4th Year";
student.study = function () {
    console.log(`I am Studying for Grade ${this.grade}`);
}

student.name = "Sparsh";
student.age = 22;
student.introduce();
student.study();