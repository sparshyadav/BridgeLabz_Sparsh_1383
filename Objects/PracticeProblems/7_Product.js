// Product Class - Object to String Conversion
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    toString() {
        let str = `Product Name: ${this.name}, Product Price: ${this.price}, Product Quantity: ${this.quantity}`;
        return str;
    }
}

let p1 = new Product("Bat", 12000, 5);
let p2 = new Product("Batting Gloves", 5000, 10);

console.log(String(p1));
console.log(String(p2));