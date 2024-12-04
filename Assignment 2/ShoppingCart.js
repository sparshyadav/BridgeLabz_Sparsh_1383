// // Q1.
// // Approach 1
// // a. Users can add items in a cart
// function addItemsToCart(itemName, itemPrice) {
//     const item = {
//         name: itemName,
//         price: itemPrice
//     }

//     cart.push(item);
// }

// let cart = [];
// addItemsToCart("Mobile", 3999);
// addItemsToCart("Fruits", 439);
// addItemsToCart("Table", 533);
// addItemsToCart("chair", 539);
// addItemsToCart("Monitor", 439);
// addItemsToCart("Keyboard", 339);
// console.log(cart);

// // b. Find out the total price of items in a cart
// let totalPriceOfCart = cart.reduce((sum, obj) => {
//     return sum + obj.price;
// }, 0);
// console.log(`The Total Value of Cart is: ${totalPriceOfCart}`);

// // c. Remove items by name
// function removeItem(itemName) {
//     const UpdatedCart = cart.filter((obj) => {
//         return obj.name.toLowerCase() !== itemName.toLowerCase();
//     })

//     cart = UpdatedCart;
// }
// console.log(cart);
// removeItem("Mobile")
// console.log(cart);


// // Approach 2 - OOPS
// class Cart {
//     #cart = [];

//     addItems(itemName, itemPrice) {
//         let obj = {
//             name: itemName,
//             price: itemPrice
//         }

//         this.#cart.push(obj);
//         // console.log(this.#cart);
//     }

//     totalPrice() {
//         let price = this.#cart.reduce((sum, obj) => {
//             return sum + Number(obj.price);
//         }, 0)

//         return price;
//     }

//     removeItems(itemName) {
//         let updatedCart = this.#cart.filter((obj) => {
//             return obj.name != itemName;
//         })

//         this.#cart = updatedCart;
//     }

//     displayCart() {
//         console.log(this.#cart);
//     }
// }

// let cart = new Cart();
// cart.addItems("Mobile", 3999);
// cart.addItems("Fruits", 439);
// cart.addItems("Table", 533);
// cart.addItems("chair", 539);
// cart.addItems("Monitor", 439);
// cart.addItems("Keyboard", 339);

// cart.displayCart();
// console.log(cart.totalPrice());
// cart.removeItems("Mobile");
// cart.displayCart();