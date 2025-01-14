// Topic 1: Promises Chaining
// Question: Write a function that simulates a series of API calls where each call depends on the result of the previous one. Handle errors gracefully.
function apiCall(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value < 5) {
                resolve(value * 2);
            }
            else {
                reject(`Value ${value} is too high`);
            }
        }, 2000);
    });
}

function promiseChain() {
    apiCall(2)
        .then((result) => {
            console.log(`Result 1: ${result}`);
            return apiCall(result);
        })
        .then((result) => {
            console.log(`Result 2: ${result}`);
            return apiCall(result);
        })
        .then((result) => {
            console.log(`Result 3: ${result}`);
        })
        .catch((error) => {
            console.log(error);
        });
}

promiseChain();