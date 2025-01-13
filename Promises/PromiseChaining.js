// function step1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Step1 Completed");
//             resolve(10);
//         }, 1000);
//     });
// }

// function step2(result) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Step 2 Complete");
//             resolve(result * 2);
//         }, 1000);
//     });
// }

// function step3(result) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Step 3 Complete");
//             resolve(result * 10);
//         }, 1000);
//     })
// }

// step1()
//     .then((result) => step2(result))
//     .then((result) => step3(result))
//     .then((result) => {
//         console.log(`Final Result: ${result}`);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .then(() => {
//         console.log("Successful");
//     })



function step1() {
    return Promise.resolve("Step 1 success");
}

function step2() {
    return Promise.reject("Error in Step 2");
}

function step3() {
    return Promise.resolve("Step 3 success");
}

step1()
    .then((result) => {
        console.log(result);
        return step2();
    })
    .catch((error) => {
        console.error("Final error handler:", error);
    })
    .then(() => step3())
    .then((result) => {
        console.log(result);
    })
