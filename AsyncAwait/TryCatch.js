async function fetchData() {
    try {
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Fetch Failed");
            }, 2000);
        });

        console.log(response);
    }
    catch (error) {
        console.error("Error: ", error);
    }
}

fetchData();