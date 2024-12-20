class Stack {
    constructor() {
        this.arr = [];
    }

    push(val) {
        this.arr.push(val);
        return null;
    }

    pop() {
        this.arr.pop();
        return null;
    }

    getMin() {
        let mini = Number.MAX_VALUE;

        this.arr.forEach((num) => {
            mini = Math.min(num, mini);
        })

        return mini;
    }

    getMax() {
        let maxi = Number.MIN_VALUE;

        this.arr.forEach((num) => {
            maxi = Math.max(num, maxi);
        })

        return maxi;
    }

    rangeMinMax(min, max) {
        let mini = Number.MAX_VALUE;
        let maxi = Number.MIN_VALUE;
        this.arr.forEach((num) => {
            if (num >= min && num <= max) {
                maxi = Math.max(num, maxi);
                mini = Math.min(num, mini);
            }
        });

        return { minValue: mini, maxValue: maxi };
    }

    average() {
        let sum = this.arr.reduce((acc, num) => {
            return acc + num;
        }, 0);

        let average = sum / this.arr.length;
        return average.toFixed(2);
    }
}

let st = new Stack();
let ans = [st.push(5), st.push(2), st.getMin(), st.push(3), st.push(7), st.pop(), st.getMax(), st.push(6), st.push(8), st.push(9), st.push(4), st.average(), st.rangeMinMax(3, 15)];
console.log(ans);