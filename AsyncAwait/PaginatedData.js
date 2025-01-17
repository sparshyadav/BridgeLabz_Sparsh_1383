async function* fetchPaginatedData() {
    let page = 1;
    let hasMore = true;

    while (hasMore) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
        const data = await response.json();

        yield data;

        if (data.length < 5) {
            hasMore = false;
        }
        page++;
    }
}

async function processPaginatedData() {
    for await (const page of fetchPaginatedData()) {
        console.log(`Processing Page: ${ page }` );
    }

    console.log("All Pages Processed");
}

processPaginatedData();