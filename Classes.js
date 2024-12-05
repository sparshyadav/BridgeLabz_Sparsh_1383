// // Creating a Class
// class Car {
//     constructor(brand, model) {
//         this.brand = brand;
//         this.model = model;
//     }

//     describe() {
//         console.log(`${this.brand} ${this.model}`);
//     }
// }

// // Instantiating a Class
// const car1 = new Car("Toyota", "Corolla");
// car1.describe();


// // Static Methods
// // They belong to the class, not the instance, and are called directly on the class
// class MathUtils {
//     static square(num) {
//         return num * num;
//     }
// }
// console.log(MathUtils.square(4));


// Inheritance 
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }
}

const dog = new Dog("Rex");
dog.speak();



