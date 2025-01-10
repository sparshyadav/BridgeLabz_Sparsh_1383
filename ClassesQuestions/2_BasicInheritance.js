// 2. Add Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log(`${this.name} Makes a Sound`);
    }
};

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    makeSound() {
        console.log(`Dog Barks`)
    }
}

let dog = new Dog("Tommy", "Golden Retriever");
console.log(dog.name);
console.log(dog.breed);
dog.sound();
dog.makeSound();