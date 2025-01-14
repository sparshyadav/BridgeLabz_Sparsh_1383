// Write a function promiseWithTimeout that takes a promise and a timeout value (in milliseconds). The function should reject the promise if it does not resolve within the timeout period.
function promiseWithTimeout(promise, timeoutValue) {
    return Promise.race([
        promise, new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("Promise Timed Out"));
            }, timeoutValue);
        })
    ])
}

const slowPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done");
    }, 3000);
});

promiseWithTimeout(slowPromise, 2000)
    .then(console.log)
    .catch(console.error);