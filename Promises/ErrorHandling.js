function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Network Error");
        }, 1000);
    });
}

fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error: ", error);
    })



function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 Completed");
            resolve(10);
        });
    });
}

function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 2 Completed");
            reject("Error in Step 2");
        });
    });
}

function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 3 Completed");
            resolve(30);
        });
    });
}

step1()
    .then((data) => {
        console.log("Resule from Step 1: ", data);
        return step2();
    })
    .then((data) => {
        console.log("Result from Step 2: ", data);
        return step3();
    })
    .then((result) => {
        console.log("Final Result: ", result);
    })
    .catch((error) => {
        console.log("Error Occurred: ", error);
    });

