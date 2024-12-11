// Create a Function to Convect Celcius to Fahrenheit
function convert(temp) {
    let fahreinheitTemp = temp * (9 / 5) + 32;
    let newTemp = fahreinheitTemp.toFixed(2);
    return newTemp;
}

let t1 = 10;
let t2 = 50;
let t3 = 99;

console.log(`${t1} degree Celcius in Fahreinheit is: ${convert(t1)}`);
console.log(`${t2} degree Celcius in Fahreinheit is: ${convert(t2)}`);
console.log(`${t3} degree Celcius in Fahreinheit is: ${convert(t3)}`);