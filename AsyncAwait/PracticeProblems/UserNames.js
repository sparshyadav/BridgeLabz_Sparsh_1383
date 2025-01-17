// Write a function getUserDetails that fetches details of multiple users from https://jsonplaceholder.typicode.com/users and logs their names and email addresses using async/await.
async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();

    data.map((user) => {
        console.log(`User ${user.id} - Name: ${user.name}, Email: ${user.email}`);
    })
}

fetchData();