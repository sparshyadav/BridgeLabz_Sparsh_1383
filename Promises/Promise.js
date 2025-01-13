const promieOne = new Promise((resolve, reject) => {
    // Do an Async Task
    // DB Calls, Cryptography

    setTimeout(() => {
        console.log("Async Task is Complete");
        resolve(); 
    }, 1000);
});

promieOne.then(() => {
    console.log("Promise Consumed");
})



new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
        console.log("Async Task 2");
    }, 1000);
})
    .then(() => {
        console.log("Async 2 Resolved");
    })



const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ userName: "Sparsh", email: "sparsh@gmail.com" });
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user);
})



const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ userName: "Sparsh", password: "123" });
        }
        else {
            reject("Error: Something Went Wrong");
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.userName;
    })
    .then((name) => {
        console.log(name);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("PromiseFour Completed");
    })



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ userName: "Sparsh", password: "123" });
        }
        else {
            reject("Error: Something Went Wrong");
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}

consumePromiseFive();



// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();



fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error => {
        console.log(error);
    }))
