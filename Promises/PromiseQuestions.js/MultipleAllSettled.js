// You have multiple asynchronous tasks, some of which may fail. Write a function that handles an array of Promises using Promise.allSettled(), logging the results and errors separately.
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 Resolved");
    }, 2500);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 2 Failed");
    }, 2500);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 Resolved");
    }, 2500);
});

let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 4 Failed");
    }, 2500);
});

function handlePromise(arr) {
    Promise.allSettled(arr)
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
}

handlePromise([promise1, promise2, promise3, promise4]);

