async function* delayedNumbers() {
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 3000);
    })

    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    })

    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3);
        }, 1000);
    })
}

async function iterateDelayed() {
    console.log("Starting Iteration...");
    for await (const num of delayedNumbers()) {
        console.log(`Received: ${num}`);
    }
    console.log("Iteration Completed");
}

iterateDelayed();