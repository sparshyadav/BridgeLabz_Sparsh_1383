// Temperature Class- Using Symbo.toPrimitive
class Temperature {
    constructor(temp) {
        this.temp = temp;
    }

    [Symbol.toPrimitive](hint) {
        if (hint === "number") {
            return this.temp;
        }
        else if (hint === "string") {
            return `The Temperature is: ${this.temp}° Celcius `;
        }

        return null;
    }
}

const temp1 = new Temperature(10);
const temp2 = new Temperature(35);

console.log(Number(temp1));
console.log(String(temp2));
