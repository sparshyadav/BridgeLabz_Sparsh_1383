// Create a custom error class that extends the built-in Error class, and implement the toString() method to return a formatted string of the error message.
class CustomClass extends Error {
    constructor(message) {
        super(message);
        this.stack = new Error().stack;
    }

    toString(){
        return "An Error Occurred";
    }
}

try {
    let a = 10;
    let b = 0;

    if (b == 0) {
        throw new CustomClass("Divisor Cannot be 0").toString();
    }
}
catch (error) {
    console.log(`Error: ${error}`);
}