// Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting

// Approach - 2 Circles are only intersecting if the distance between their centers is less than or equal to the sum of their radius
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
let r1 = 2;
let r2 = 2;

let dist = distance(x1, x2, y1, y2).toFixed(2);
let sumOfRadius = r1 + r2;

if (sumOfRadius >= dist) {
    console.log(`The Circles Intersect as the Sum of Radius ${sumOfRadius} is greater than the Distance between their Centers ${dist}`);
}
else {
    console.log(`The Circles don't Intersect as the Sum of Radius ${sumOfRadius} is not greater than the Distance between their Centers ${dist}`);

}