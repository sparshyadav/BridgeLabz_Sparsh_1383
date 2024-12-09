// // setTimeout
// function greet(name){
//     console.log(`Hello ${name}`);
// }

// const greeting=setTimeout(greet, 2000, 'Sparsh');
// // clearTimeout(greeting)


// setInterval
function printTime() {
    console.log(`Current Time: ${new Date().toLocaleTimeString()}`);
}

let interval = setInterval(printTime, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 5000);

