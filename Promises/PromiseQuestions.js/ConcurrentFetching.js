// Write a function that fetches data from two APIs simultaneously using Promise.all(). Assume you have two API endpoints that return user information and post data. Print the results when both APIs return their data.
function fetchUsers() {
    return fetch("https://dummyjson.com/users");
}

function fetchPosts() {
    return fetch("https://dummyjson.com/posts");
}

function combinedFetching(fun1, fun2) {
    Promise.all([fun1(), fun2()])
        .then((responses) => {
            return Promise.all(responses.map(response => response.json()));
        })
        .then((data) => {
            console.log("Users Data: ", data[0]);
            console.log("Posts Data: ", data[1]);
        })
        .catch((error) => {
            console.log("Error: ", error);
        })
}

combinedFetching(fetchUsers, fetchPosts);