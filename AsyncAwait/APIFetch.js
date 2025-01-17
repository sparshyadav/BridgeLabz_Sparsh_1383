async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user = await response.json();
        console.log(user);
    }
    catch (error) {
        console.error("Failed to Fetch User: ", error);
    }
}

fetchData();