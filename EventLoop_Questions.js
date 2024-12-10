// 1
console.log("Start");
const a = 10;

setTimeout(() => {
    console.log("Timeout");
}, 0)

setImmediate(() => {
    console.log("Immediate");
}, 0)

async function fun() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await data.json();
    console.log(result);
}
fun();

Promise.resolve().then(() => {
    console.log("Promise");
})

console.log("End");



