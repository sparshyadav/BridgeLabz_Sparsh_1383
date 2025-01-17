//Write an async generator that emits a sequence of random numbers with a delay of 2 seconds between each number.
function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function* generateNumbers() {
    let random1 = Math.floor(Math.random() * (10));
    let random2 = Math.floor(Math.random() * (10));
    let random3 = Math.floor(Math.random() * (10));

    await delay(2000);
    yield random1;

    await delay(2000);
    yield random2;

    await delay(2000);
    yield random3;
}

async function iterateNumbers() {
    for await (const num of generateNumbers()) {
        console.log(`Number: ${num}`);
    }
}

iterateNumbers();

