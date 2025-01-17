// Create a function getTodosInParallel that:
// Fetches the same two URLs from the previous task in parallel using Promise.all.
// Logs the titles of both todos.

async function fetchMultiple() {
    try {
        let [response1, response2] = await Promise.all([fetch("https://jsonplaceholder.typicode.com/todos/1"), fetch("https://jsonplaceholder.typicode.com/todos/1")]);
        let book1 = await response1.json();
        let book2 = await response2.json();

        console.log([book1.title, book2.title]);
    }
    catch (error) {
        console.error(error.message);
    }
}

fetchMultiple();
