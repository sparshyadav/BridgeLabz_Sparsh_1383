function counter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        }
    }
}

let c = counter();
c.increment();
c.increment();
c.decrement();
c.increment();
c.decrement();