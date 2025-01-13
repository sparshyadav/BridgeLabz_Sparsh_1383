let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 1");
        resolve(50);
    })
});

promise1
    .then((data) => {
        console.log("Data 1: ", data);
        return data / 2;
    })
    .then((data) => {
        console.log("Data 2: ", data);
        return data / 2;
    })
    .then((data) => {
        console.log("Data 3: ", data);
    })
    .catch((error) => {
        console.log(error);
    })