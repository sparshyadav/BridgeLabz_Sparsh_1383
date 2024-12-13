// // Getter and Setters using Object Literal Syntax
// const user={
//     firstName: "Sparsh",
//     lastName: "Yadav",
//     get fullName(){ // Getter
//         return `${this.firstName} ${this.lastName}`
//     },
//     set fullName(value){ // Setter
//         const name=value.split(' ');
//         this.firstName=name[0];
//         this.lastName=name[1];
//     }
// }

// console.log(user.fullName);
// user.fullName="S Y";
// console.log(user.fullName);



// // Getter and Setters using Object.defineProperty
// let obj={};
// Object.defineProperty(obj, "name", {
//     get(){
//         return "Alice";
//     },
//     set(value){
//         console.log(`Setting the Name to ${value}`);
//     }
// })
// console.log(obj.name);
// obj.name="Bob";
// console.log(obj.name);



// Example
let person = {
    _age: 25, // Private Property

    get age() { // Getter
        return this._age;
    },

    set age(age) {
        if (age < 0) {
            console.error("Age cannot be Negative");
        }
        else {
            this._age = age;
        }
    }
};

console.log(person.age);
person.age = 30;
console.log(person.age);
person.age = -5;
