// // Create a Promise that resolves after 2 seconds with a "Task Complete!" message.
// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Task Complete");
//         resolve();
//     }, 2000);
// });

// promiseOne
//     .then(() => {
//         console.log("Promise Completed");
//     })
//     .catch((error) => {
//         console.log(error);
//     })


// const promiseTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Task Completee");
//         resolve();
//     }, 2000);
// });

// const consumePromiseTwo = async () => {
//     try {
//         let response = await promiseTwo;
//         console.log(response);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseTwo();



// // Create another Promise that rejects with "Something went wrong!" after 1 second.
// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let flag = false;
//         if (flag) {
//             resolve("Promise Resolved");
//         }
//         else {
//             reject("Something Went Wrong");
//         }
//     }, 1000);
// });

// promiseThree
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })


// const promiseFour=new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let flag = false;
//         if (flag) {
//             resolve("Promise Resolved");
//         }
//         else {
//             reject("Something Went Wrong");
//         }
//     }, 1000);
// });

// const consumePromiseFour=async()=>{
//     try{
//         let response=await promiseFour;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consumePromiseFour();



// Write a Promise function checkWeather that:
// Resolves with "It's sunny!" if the input is true.
// Rejects with "It's raining!" if the input is false.
function checkWeather(flag) {
    return new Promise((resolve, reject) => {
        if (flag) {
            resolve("It is Sunny");
        }
        else {
            reject("It is Raining");
        }
    });
};

checkWeather(true)
    .then((weather) => {
        console.log(weather);
    })
    .catch((error) => {
        console.log(error);
    })

checkWeather(false)
    .then((weather) => {
        console.log(weather);
    })
    .catch((error) => {
        console.log(error);
    })

