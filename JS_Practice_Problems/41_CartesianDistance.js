// Create a function to calculate the distance between two points defined by their x, y coordinates

// Approach - Using the Cartiesian Distance Formula 
function distance(x1, x2, y1, y2) {
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    let distance = Math.sqrt((xDiff ** 2) + (yDiff ** 2));

    return distance;
}

let x1 = 2;
let x2 = 5;
let y1 = 6;
let y2 = 5;

let dist = distance(x1, x2, y1, y2).toFixed(2);
console.log(`The Distance between the Two Points is: ${dist}`);