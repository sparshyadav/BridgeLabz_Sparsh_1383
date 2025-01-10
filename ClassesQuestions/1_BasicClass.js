// 1. Basic Class Creation
class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log(`${this.name} Makes a Sound`);
    }
};

const dog = new Animal("Tommy");
dog.sound();