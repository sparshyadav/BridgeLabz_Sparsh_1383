class Stack {
    arr = [];

    push(value) {
        this.arr.push(value);
    }

    pop() {
        this.arr.pop();
    }

    peek() {
        let n = this.arr.length;
        return this.arr[n - 1];
    }

    isEmpty() {
        if (this.arr.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    size() {
        return this.arr.length;
    }

    print() {
        console.log(this.arr);
    }

    middle() {
        let n = this.arr.length;
        return this.arr[n / 2];
    }

    largest() {
        let maxi = Number.MIN_VALUE;
        for (let i = 0; i < this.arr.length; i++) {
            maxi = Math.max(this.arr[i], maxi);
        }

        return maxi;
    }
}

let st = new Stack();

console.log(st.isEmpty());

st.push(1);
st.push(13);
st.push(32);
st.push(534);
st.push(14);
st.push(100);

console.log(st.size());

st.print();

console.log(st.peek());

st.pop();
st.pop();

console.log(st.peek());

st.print();

console.log(st.middle());
console.log(st.largest());
console.log(st.isEmpty());
