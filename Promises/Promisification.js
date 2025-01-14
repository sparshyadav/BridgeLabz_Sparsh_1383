// const authenticateUser = (userId, callback) => {
//     if (userId) {
//         callback(null, { _id: userId, name: "John Doe", email: "john@example.com" });
//     } else {
//         callback(new Error("Error: User not found"), null);
//     }
// };

// const fetchProfile = (userId, callback) => {
//     callback(null, { profile: "userData" });
// };

// const fetchPosts = (profile, callback) => {
//     callback(null, { posts: ["post1", "post2", "post3"] });
// };

// // Using nested callbacks
// authenticateUser("user435", (err, user) => {
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     fetchProfile(user._id, (err, profile) => {
//         if (err) {
//             console.log(err.message);
//             return;
//         }
//         fetchPosts(profile.profile, (err, posts) => {
//             if (err) {
//                 console.log(err.message);
//                 return;
//             }
//             console.log(posts);
//         });
//     });
// });


const authPromise = (userId) => {
    return new Promise((resolve, reject) => {
        if (userId) {
            resolve({ _id: userId, name: "John Doe", email: "john@example.com" })
        }
        else {
            reject("No User Found");
        }
    })
}

const profilePromise = (userId) => {
    return new Promise((resolve, reject) => {
        resolve({ profile: "userData" });
    });
}

const postPromise = (profile) => {
    return new Promise((resolve, reject) => {
        resolve({ posts: ["post1", "post2", "post3"] });
    });
}

authPromise(1)
    .then((user) => {
        console.log("USER: ", user);
        return profilePromise(user._id);
    })
    .then((profile) => {
        console.log("PROFILE: ", profile);
        return postPromise(profile.profile);
    })
    .then((post) => {
        console.log("POST:", post);
    })
    .catch((error) => {
        console.log(error);
    })