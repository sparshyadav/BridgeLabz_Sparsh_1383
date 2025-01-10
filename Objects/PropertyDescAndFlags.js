// Property Descriptors and Flags

// Hiding Sensitive Data from Iterations - enumerable
const user = {
    name: "Sparsh Yadav"
}

Object.defineProperty(user, "email", {
    value: "sparsh@gmail.com",
    writable: true,
    enumerable: false,
    configurable: true
});

console.log(user.email);

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
console.log();



// Stock Market - writable
const stock = {};

Object.defineProperty(stock, "price", {
    value: 1000,
    writable: false,
    enumerable: true,
    configurable: true
});

console.log(stock);

Object.defineProperty(stock, "updatePrice", {
    value: function (newPrice) {
        const time = new Date();
        const hour = time.getHours();

        if (hour >= 9 && hour <= 15) {
            Object.defineProperty(stock, "price", {
                value: newPrice,
                writable: true,
                enumerable: true,
                configurable: true
            });
        }
        else {
            console.log(`Price Cannot be Changed During this Hour`);
        }
    }
});

console.log(`Initial Stock Price: ${stock.price}`);

stock.updatePrice(1500);
console.log(`Updated Price: ${stock.price}`);
console.log();



// Locking Sensitive Data - Configurable
const userProfile = {
    name: "Sparsh Yadav"
};

Object.defineProperty(userProfile, "password", {
    value: "thisisapassword",
    writable: true,
    enumerable: true,
    configurable: false
});

console.log(`User Password: ${userProfile.password}`);
delete userProfile.password;
console.log(`User Password: ${userProfile.password}`);