// Create a Function to Convert Fahrenheit to Celcius
function convert(temp) {
    let fahreinheitTemp = (temp - 32) * (5 / 9);
    let newTemp = fahreinheitTemp.toFixed(2);
    return newTemp;
}

let t1 = 100;
let t2 = 175;
let t3 = 220;

console.log(`${t1} degree Fahreinheit in Celcius is: ${convert(t1)}`);
console.log(`${t2} degree Fahreinheit in Celcius is: ${convert(t2)}`);
console.log(`${t3} degree Fahreinheit in Celcius is: ${convert(t3)}`);