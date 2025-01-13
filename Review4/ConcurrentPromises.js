// Write a function that runs multiple promises concurrently and handles the results when all of them are resolved.
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1");
    }, 3000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2");
    }, 5000);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3");
    }, 2000);
});

function multiplePromises() {
    Promise.all([promise1, promise2, promise3])
        .then((data) => {
            console.log(data);
        });
}

multiplePromises();