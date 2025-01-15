// Write a function that attempts to fetch data from an API using a Promise. If the API call fails (e.g., the server responds with an error), the function should retry the request up to 3 times before giving up. Use setTimeout to simulate the delays between retries.
async function fetchData() {
    let data = await fetch("httpsh://dummyjson.com/posts");
    data = await data.json();
    return data;
}

async function retryFetch() {
    let count = 0;
    let data;
    while (count < 3) {
        console.log(`API Call Number: ${count}`);
        try {
            data = await fetchData();
            break;
        }
        catch (error) {
            console.log(`An Error Occurred at ${count} API Call, ${error}`);
        }
        count++;
    }

    if (!data) {
        console.log("Couldn't Fetch Data");
    }
    else {
        console.log("Here's the Data", data);
    }
}

retryFetch();

