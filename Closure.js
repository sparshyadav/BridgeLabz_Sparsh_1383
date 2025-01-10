function counter() {
    let count = 0;

    function increment() {
        console.log(count);
        count++;
    }

    return increment;
}

let c = counter();
c();
c();
c();