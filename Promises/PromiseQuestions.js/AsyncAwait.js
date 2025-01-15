// Write an async function that performs two sequential asynchronous operations (such as fetching two pieces of data from different APIs). Use await to make sure the second operation only starts once the first one has completed.
async function fetchData() {
    let userData = await fetch("https://dummyjson.com/users");
    let users = await userData.json();

    let postData = await fetch("https://dummyjson.com/posts");
    let posts = await postData.json();

    return { ...users, ...posts };
}

try {
    let data = await fetchData();
    console.log(data);
}
catch (error) {
    console.log(error);
}