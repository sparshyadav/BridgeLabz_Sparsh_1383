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
