// // Callback Based Event Loop
// console.log("Start");
// setTimeout(()=>{
//     console.log("Inside SetTimeout");
// }, 0);
// console.log("End");


// // Promise Based EventLoop
// console.log("Start");
// const promise = new Promise((resolve, reject) => {
//     // console.log("Inside Promise");
//     resolve("Inside Promise");
// })
// promise.then((data) => {
//     console.log(data);
// }).then(() => {
//     console.log("Promise 2");
// });
// console.log("End");


// // Promise and Callback Queue
// console.log("Start");
// setTimeout(()=>{
//     console.log("Inside SetTimeout");
// }, 0);
// Promise.resolve().then(()=>{
//     console.log("Inside Promise");
// }) 
// console.log("End");


// // Async/Await
// console.log("Start");
// async function fun(){
//     console.log("Before Await");
//     await Promise.resolve();
//     console.log("After Await");
// }
// fun();
// console.log("End");


// // SetTimeout and Async/Await
// console.log("Start");
// setTimeout(() => {
//     console.log("Inside SetTimeout");
// }, 0)
// async function fun() {
//     console.log("Before Await");
//     await Promise.resolve();
//     console.log("After Await");
// }
// fun();
// console.log("End");