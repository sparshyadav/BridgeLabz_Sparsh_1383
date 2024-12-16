// class Array {
//     arr = [];
//     constructor() {

//     }

//     append(value) {
//         this.arr.push(value);
//     }

//     remove() {
//         this.arr.pop();
//     }

//     print() {
//         console.log(this.arr);
//     }
// }

// let arr = new Array();
// arr.append(4);
// arr.append(1);
// arr.append(3);
// arr.append(6);

// arr.print();


class CustomArray extends Array {
    constructor(){
        super();
    }

    sum(){
        let add=this.reduce((acc, num)=>{
            return acc+num;
        }, 0);

        return add;
    }

    product(){
        let mul=this.reduce((acc, num)=>{
            return acc*num;
        }, 1);

        return mul;
    }
}

let cs = new CustomArray();
cs.push(1);
cs.push(2);
cs.push(3);
cs.push(4);
console.log(cs);

console.log(cs.sum());
console.log(cs.product());
