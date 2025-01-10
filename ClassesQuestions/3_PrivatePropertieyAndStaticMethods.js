// Intermediate
// 1. Encapsule with Private Properties
// 2. Add Static Method
class Animal {
    #sound = "";
    constructor(name, sound) {
        this.name = name;
        this.#sound = sound;
    }

    get sound() {
        return this.#sound;
    }

    set sound(value) {
        this.#sound = value;
    }

    static describe() {
        console.log(`Animals are living Beings`);
    }
}

let lion = new Animal("Simba", "Roar");
console.log(lion.sound);
lion.sound = "Roarrrr";
console.log(lion.sound);
Animal.describe();