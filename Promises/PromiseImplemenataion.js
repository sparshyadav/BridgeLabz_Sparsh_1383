const myPromise = new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
        if (success) {
            resolve("Operation is Successfull");
        }
        else {
            reject("Operation Failed");
        }
    }, 2000);
});

myPromise
    .then((message) => {
        console.log("Fulfilled: ", message);
    })
    .catch((error) => {
        console.log("Rejected: ", error);
    })
    .finally(() => {
        console.log("Promise Completed");
    })



// Fetching Data from Server Using Promises
const fetchData=new Promise((resolve, reject)=>{
    let data=fetch('https://dummyjson.com/test');

    if(data){
        resolve(data);
    }
    else{
        reject("Failed to Fetch User Data");
    }
});

fetchData
    .then((data)=>{
        console.log("Data Received: ", data);
    })
    .catch((error)=>{
        console.log("An Error Occurred: ", error);
    })
    .finally(()=>{
        console.log("Request Completed");
    })

