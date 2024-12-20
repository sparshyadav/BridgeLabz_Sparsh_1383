class HashTable {
    constructor(size = 50) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        if (typeof key === "number") {
            return key % this.size;
        }
        else if (typeof key === "string") {
            let hashVal = 0;
            for (let i = 0; i < key.length; i++) {
                hashVal += key.charCodeAt(i);
            }

            return hashVal % this.size;
        }
        else {
            throw new Error("Unsupported Key Type");
        }
    }

    set(value) {
        let hashVal = this.hash(value);

        if (!this.table[hashVal]) {
            this.table[hashVal] = [];
        }

        this.table[hashVal].push(value);
    }

    get(value) {
        let hasVal = this.hash(value);

        if (!this.table[hasVal]) {
            throw new Error("No Such Element in the HashTable");
        }

        let bucket = this.table[hasVal];
        for (let el of bucket) {
            if (el === value) {
                return true;
            }
        }

        throw new Error("No Such Element in the HashTable");
    }

    remove(value) {
        let hasVal = this.hash(value);

        if (!this.table[hasVal]) {
            throw new Error("No Such Element in the HashTable");
        }

        let bucket = this.table[hasVal];
        if (!bucket.includes(value)) {
            throw new Error("No Such Element in the HashTable");
        }

        let idx = bucket.indexOf(value);
        bucket.splice(idx, 1);
    }

    print() {
        console.log(this.table);
    }
}

let hs = new HashTable();
hs.set(53);
hs.set(33);
hs.set(433);
hs.set(863);
hs.set(235);
hs.set(8655);
hs.set(5426);
hs.set(5636);
hs.set("Sparsh");
hs.set("hsrapS");

console.log(hs.get(53));
console.log(hs.get("Sparsh"));
hs.remove("Sparsh");
// console.log(hs.get("Sparsh"));
hs.print();





