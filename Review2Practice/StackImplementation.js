class Stack {
    constructor(size) {
        this.size = size;
        this.arr = [];
    }

    push(value) {
        if (this.arr.length == this.size) {
            console.log("Stack Overflow! Cannot Push: ", value);
            return;
        }

        this.arr.push(value);
    }

    pop() {
        if (this.arr.length == 0) {
            console.log("Stack Underflow! Cannot Pop");
            return;
        }

        this.arr.pop();
    }

    peek() {
        if (this.arr.length == 0) {
            console.log("Stack is Emply! No Top Element");
            return null;
        }
        let n = this.arr.length;
        let last = this.arr[n - 1];
        return last;
    }

    isEmpty() {
        return this.arr.length === 0;
    }

    isFull() {
        return this.arr.length == this.size;
    }

    sizee() {
        return this.size;
    }

    print() {
        console.log(this.arr);
    }
}

let st = new Stack(5);
console.log(st.isEmpty());
st.push(1);
st.push(2);
st.push(3);
st.push(4);
st.push(5);
st.push(6);
console.log(st.peek());
console.log(st.sizee());
console.log("Is Full? ", st.isFull());
st.print();