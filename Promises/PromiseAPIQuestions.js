// // You have three APIs to fetch data:
// // Write a program using Promise.all() to fetch all three datasets and log them. If any API fails, handle the error gracefully.
// const fetchUsers = fetch("https://dummyjson.com/users").then((result) => result.json());
// const fetchPosts = fetch("https://dummyjson.com/posts").then((result) => result.json());
// const fetchComments = fetch("https://dummyjson.com/comments").then((result) => result.json());

// Promise.all([fetchUsers, fetchPosts, fetchComments])
//     .then((result) => {
//         console.log("Combined Results: ", result);
//     })
//     .catch((error) => {
//         console.log("Error Occurred: ", error);
//     })



// // You have three Promises:
// // A Promise that resolves with "User data loaded".
// // A Promise that rejects with "Error loading posts".
// // A Promise that resolves with "Comments loaded".
// // Write a program to log all results (success or failure) using Promise.allSettled().
// const promise1 = Promise.resolve("User Data Loaded");
// const promise2 = Promise.reject("Error Loading Posts");
// const promise3 = Promise.resolve("Comments Loaded");

// Promise.allSettled([promise1, promise2, promise3])
//     .then((result) => {
//         console.log("Result: ", result);
//     })
//     .catch(() => {
//         console.log("Error: ", error);
//     })



// You have three Promises:
// A Promise that resolves in 2 seconds with "Resolved in 2 seconds".
// A Promise that resolves in 1 second with "Resolved in 1 second".
// A Promise that rejects in 1.5 seconds with "Rejected in 1.5 seconds".
// Write a program to log the result of the fastest Promise using Promise.race().
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved in 2 Seconds");
    }, 2000);
});

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved in 1 Seconds");
    }, 1000);
});

const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Resolved in 1.5 Seconds");
    }, 1500);
});

Promise.race([promise4, promise5, promise6])
    .then((result) => {
        console.log("Result: ", result);
    })
    .catch((error) => {
        console.log("Error: ", error);
    })