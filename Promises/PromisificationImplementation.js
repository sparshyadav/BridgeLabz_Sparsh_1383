function asyncTask(callback) {
    setTimeout(() => {
        callback(null, "Task Completed");
    }, 1000);
}

function promisifiedAsyncTask() {
    return new Promise((resolve, reject) => {
        asyncTask((error, result) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
    });
}

promisifiedAsyncTask()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })