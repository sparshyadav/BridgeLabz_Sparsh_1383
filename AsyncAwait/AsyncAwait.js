// Basic Async Function
async function greet() {
    return "Hello Async World";
}

greet().then(console.log);



// Basic Async Await 
async function getData(){
    const promise=new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data Received");
        }, 1000);
    });

    const result=await promise;
    console.log(result);
}

getData();