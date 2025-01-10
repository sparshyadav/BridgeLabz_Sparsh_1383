// Shopping Cart
class Product {
    constructor(itemName, itemPrice) {
        this.itemName = itemName;
        this.itemPrice = itemPrice;
    }
}

class Cart {
    constructor() {
        this.items = [];
    }

    addProducts(product) {
        this.items.push(product);
    }

    removeProducts(product) {
        this.items = this.items.filter((item) => {
            return item.itemName != product.itemName;
        });
    }

    totalCartAmount() {
        let total = this.items.reduce((acc, item) => {
            return acc + item.itemPrice;
        }, 0);

        return total;
    }
}

const cart = new Cart();

const maggi = new Product("Maggi", 60);
const apple = new Product("Apple", 120);
const bread = new Product("Bread", 40);

cart.addProducts(maggi);
cart.addProducts(apple);
cart.addProducts(bread);

console.log(`Total Cart Amount is: ${cart.totalCartAmount()}`);
cart.removeProducts(bread);
console.log(`Total Cart Amount is: ${cart.totalCartAmount()}`);