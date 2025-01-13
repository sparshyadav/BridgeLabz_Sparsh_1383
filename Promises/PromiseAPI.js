// // Promise.all() - Combines Multiple Promises, and Wait's for all of them to resolve
// const promise1 = Promise.resolve(10);
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(20);
//     }, 1000);
// });
// const promise3 = Promise.resolve(30);
// const promise4 = Promise.reject("Error Occurred");

// Promise.all([promise1, promise2, promise3])
//     .then((result) => {
//         console.log("Results: ", result);
//     })
//     .catch((error) => {
//         console.log("Error: ", error);
//     })

// Promise.all([promise2, promise3, promise4])
//     .then((result) => {
//         console.log("Results: ", result);
//     })
//     .catch((error) => {
//         console.log("Error: ", error);
//     })



// // Promise.allSettled() - Similar to Promise.all but waits for all the Promises to settle(either resolve or reject)
// const promise5 = Promise.resolve(100);
// const promise6 = Promise.reject("Error Occurred");
// const promise7 = Promise.resolve(300);

// Promise.allSettled([promise5, promise6, promise7])
//     .then((result) => {
//         console.log("Result: ", result);
//     })



// // Promise.race() - Resolves or Rejects as soon as the first Promise settles(fastest)
// const promise8 = new Promise((resolve) => setTimeout(() => resolve("First"), 5000));
// const promise9 = new Promise((resolve) => setTimeout(() => resolve("Second"), 10000));
// const promise10 = new Promise((resolve) => setTimeout(() => resolve("Third"), 1500));

// Promise.race([promise8, promise9, promise10])
//     .then((result) => {
//         console.log("Result: ", result);
//     })
//     .catch((error) => {
//         console.log("Error: ", error);
//     })



// // Promise.any() - Resolves with the first fullfilled Promise
// const promise11 = Promise.reject("Error 1");
// const promise12 = new Promise((resolve) => setTimeout(() => resolve("First Success"), 5000));
// const promise13 = Promise.reject("Error 3");

// Promise.any([promise11, promise12, promise13])
//     .then((result) => {
//         console.log("First Successfull Result: ", result);
//     })
//     .catch((error) => {
//         console.log("Error: ", error.errors);
//     })



// // Promise.resolve() - Creates a resolved Promise with a given value
// const promise = Promise.resolve("Quick Resolve");
// promise.then((result) => {
//     console.log("Result: ", result);
// })



// Promise.Reject() - Creates a Rejected Promise with a given Reason
const promisee = Promise.reject("Reject Promise");
promisee.catch((reason) => {
    console.log(reason);
})