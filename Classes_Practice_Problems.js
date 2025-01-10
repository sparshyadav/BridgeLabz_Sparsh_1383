// // Beginner
// // 1. Basic Class Creation
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     sound() {
//         console.log(`Animal Makes a Sound`);
//     }
// };


// // 2. Add Inheritance
// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }

//     makeSound() {
//         console.log(`Dog Barks`)
//     }
// }

// let dog=new Dog("Tommy", "Golden Retriever");
// console.log(dog.name);
// console.log(dog.breed);
// dog.sound();
// dog.makeSound();



// // Intermediate
// // 1. Encapsule with Private Properties
// // 2. Add Static Method
// class Animal {
//     #sound = "";
//     constructor(name, sound) {
//         this.name = name;
//         this.#sound = sound;
//     }

//     get sound() {
//         return this.#sound;
//     }

//     set sound(value) {
//         this.#sound = value;
//     }

//     static describe() {
//         console.log(`Animals are living Beings`);
//     }
// }

// let lion = new Animal("Simba", "Roar");
// console.log(lion.sound);
// lion.sound = "Roarrrr";
// console.log(lion.sound);
// Animal.describe();



// Advanced
// 1. Create a Vector Class for 2D Vectors
class Vectors {
    #arr;
    constructor() {
        this.#arr = [];
    }

    add(value) {
        this.#arr.push(value);
    }

    remove() {
        this.#arr.pop();
    }

    size() {
        return this.#arr.length;
    }

    display() {
        console.log(this.#arr);
    }
}

let vec = new Vectors();
vec.display();
console.log(vec.size());
vec.add([1, 2, 3]);
vec.add([5, 6, 7]);
vec.display();
vec.remove();
console.log(vec.size);
vec.display();
