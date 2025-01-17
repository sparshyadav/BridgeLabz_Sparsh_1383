// Create a function getTwoTodos that:
// Fetches https://jsonplaceholder.typicode.com/todos/1 and https://jsonplaceholder.typicode.com/todos/2 one after the other using await.
// Logs the titles of both todos.
// Handles errors properly.

async function getTwoTodos() {
    try {
        let t1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let todo1 = await t1.json();

        let t2 = await fetch("https://jsonplaceholder.typicode.com/todos/2");
        let todo2 = await t2.json();

        console.log([todo1.title, todo2.title]);
    }
    catch (error) {
        console.error("Error: ", error.message);
    }
}

getTwoTodos();