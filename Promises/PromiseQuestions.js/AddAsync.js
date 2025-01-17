//Promisify a function addAsync that takes two numbers and a callback. The callback is invoked with the sum of the numbers.
function addAsync(a, b, callback) {
    setTimeout(() => {
        callback(null, a + b);
    }, 1000);
}

function promisifiedAdd(a, b) {
    return new Promise((resolve, reject) => {
        addAsync(a, b, (error, result) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        })
    })
}

promisifiedAdd(5, 7)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    })