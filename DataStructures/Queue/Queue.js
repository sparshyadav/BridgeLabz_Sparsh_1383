class Queue {
    constructor(capacity) {
        this.capacity = capacity;
        this.arr = [];
    }

    enqueue(val) {
        if (this.arr.length === this.capacity) {
            console.log("Queue is Full, Cannot Add: ", val);
            return;
        }

        this.arr.unshift(val);
    }

    dequeue() {
        if (this.arr.length == 0) {
            console.log("Queue is Already Empty, Cannot Remove Value");
            return;
        }

        this.arr.pop();
    }

    peek() {
        let n = this.arr.length;
        if (n == 0) {
            console.log("Queue is Already Empty, Cannot Display Top Element");
        }
        let lastElement = this.arr[n - 1];

        return lastElement;
    }

    isEmpty() {
        if (this.arr.length == 0) {
            return true;
        }

        return false;
    }

    size() {
        return this.arr.length;
    }

    print() {
        console.log(this.arr);
    }
}

let q = new Queue(5);
console.log(`Is Queue Empty: ${q.isEmpty()}`);
q.enqueue(5);
q.enqueue(4);
q.enqueue(3);
q.enqueue(2);
q.enqueue(2);
console.log(`The Size of Queue is: ${q.size()}`);
q.print();
q.dequeue();
q.dequeue();
console.log(`The Top Element of Queue is: ${q.peek()}`);
