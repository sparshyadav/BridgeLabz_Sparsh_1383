async function* generateNumbers() {
    yield Promise.resolve(1);
    yield Promise.resolve(3);
    yield Promise.resolve(2);
}

async function iterateNumbers() {
    for await (const num of generateNumbers()) {
        console.log(num);
    }
}

iterateNumbers();