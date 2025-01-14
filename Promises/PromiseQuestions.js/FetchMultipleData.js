// Topic 2: Promises API
// Question: Write a function that uses Promise.all to fetch data from multiple simulated APIs and handles errors for all.
function fetchData(apiNumber) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (apiNumber % 2 === 0) {
                resolve(`Data from API: ${apiNumber}`);
            }
            else {
                reject(`Error from API: ${apiNumber}`)
            }
        })
    })
}

function fetchAllData() {
    const promises = [fetchData(6), fetchData(2), fetchData(8), fetchData(4)];
    Promise.all(promises)
        .then((result) => {
            console.log(`All Data: ${result}`);
        })
        .catch((error) => {
            console.error(`Error Encountered: ${error}`);
        })
}

fetchAllData();