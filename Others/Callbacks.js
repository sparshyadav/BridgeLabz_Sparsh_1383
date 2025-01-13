// Callbacks

// Create Transaction only if the Amount is lesser than Account Balance
function transaction(user, purchaseAmount, callback) {
    if (user.balance >= purchaseAmount) {
        console.log(`Initial Account Balance: ${user.balance}`);
        callback(user, purchaseAmount);
        console.log(`Purchase Successfull`);
        console.log(`Current Account Balance: ${user.balance}`);
    }
}

function makeTransaction(user, purchaseAmount) {
    user.balance -= purchaseAmount;
}

let user = {
    name: "Sparsh",
    balance: 100000
}

transaction(user, 20000, makeTransaction);
console.log();



// Delayed API Fetching
function delayedDataSend(callback) {
    let interval = setInterval(() => {
        callback();
    }, 2000);

    setTimeout(() => {
        clearInterval(interval);
    }, 10000)
}

function fetchData() {
    console.log(`Data sent via API`);
}

delayedDataSend(fetchData);