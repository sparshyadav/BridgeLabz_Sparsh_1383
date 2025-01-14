class GraphList {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        this.addVertex(v1);
        this.addVertex(v2);

        if (!this.adjacencyList[v1].includes(v2)) {
            this.adjacencyList[v1].push(v2);
        }

        if (!this.adjacencyList[v2].includes(v1)) {
            this.adjacencyList[v2].push(v1);
        }
    }

    printGraph() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} -> ${this.adjacencyList[vertex].join(", ")}`);
        }
    }

    bfs(start) {
        const queue = [start];
        const visited = new Set();

        visited.add(start);

        while (queue.length > 0) {
            const vertex = queue.shift();
            console.log(vertex);

            for (const neighbour of this.adjacencyList[vertex]) {
                if (!visited.has(neighbour)) {
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }
        }
    }
}

const graph1 = new GraphList();

graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");

graph1.addEdge("A", "B");
graph1.addEdge("A", "C");
graph1.addEdge("B", "A");
graph1.addEdge("C", "A");

graph1.printGraph();
graph1.bfs("A");
