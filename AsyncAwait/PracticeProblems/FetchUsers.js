// Write an async function that:
// Fetches user data from the API: https://jsonplaceholder.typicode.com/users.
// Returns only the names of the users.
// Includes error handling for failed requests.

async function fetchUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await response.json();

        let userNames = users.map((user) => {
            return user.name;
        });

        console.log(userNames);
    }
    catch (error) {
        console.error("Error: ", error.message);
    }
}

fetchUsers();