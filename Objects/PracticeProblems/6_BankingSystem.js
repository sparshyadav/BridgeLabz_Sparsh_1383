// Banking System - Object to Number Conversion
class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    valueOf() {
        return this.balance;
    }
}

const acc1 = new Account("Sparsh", 1000000);
const acc2 = new Account("Rakshit", 5000000);

console.log(`Account Balance Addition: ${acc1 + acc2}`);
console.log(`Account Balance Substraction: ${acc2 - acc1}`);