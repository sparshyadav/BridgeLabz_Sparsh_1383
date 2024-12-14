// // setTimeout
// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// setTimeout(greet, 2000, "Sparsh");


// setInterval
function showTime() {
    console.log(new Date().toLocaleTimeString());
}

const interval = setInterval(showTime, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 10000);