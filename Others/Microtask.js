const a = 100;
setTimeout(() => console.log("Timeout"), 1000);
setImmediate(() => console.log("Immediate"), 1000);
fs.readFile("./xyz", utf - 8, () => console.log("File Read"));
function A() {
    console.log("a= ", a);
}
console.log("Last Line");