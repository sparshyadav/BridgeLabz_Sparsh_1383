// Basic Custom Array Class - Fixed Sized
class CustomArray {
    constructor(size=10) {
        this.size = size;
        this.arr = new Array(size);
    }

    push(val) {
        this.arr.push(val);
    }

    pop() {
        this.arr.pop();
    }

    length() {
        return this.size;
    }

    get(idx) {
        return this.arr[idx];
    }
}

const arr = new CustomArray(5);
arr.push(10);
arr.push(20);
arr.push(30);

console.log(arr.get(0)); 
console.log(arr.get(1)); 
console.log(arr.get(2)); 

console.log(arr.length); 

console.log(arr.pop());  
console.log(arr.length); 
