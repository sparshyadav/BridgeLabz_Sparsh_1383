// Write a function that simulates an API request. The function should return a Promise that resolves after a random delay between 1 and 5 seconds. Use setTimeout to simulate the delay and return a success message once the "request" is complete.
function fetchData() {
    let randomTime = Math.floor(Math.random() * (5) + 1);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Request Completed");
        }, randomTime*1000);
    });
}

fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    })