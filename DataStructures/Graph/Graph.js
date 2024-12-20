// // Adjacency List 
// class ListGraph {
//     constructor() {
//         this.adjacencyList = {};
//     }

//     addVertex(vertex) {
//         if (!this.adjacencyList[vertex]) {
//             this.adjacencyList[vertex] = [];
//         }
//     }

//     addEdge(vertex1, vertex2) {
//         if (!this.adjacencyList[vertex1]) {
//             this.addVertex(vertex1);
//         }

//         if (!this.adjacencyList[vertex2]) {
//             this.addVertex(vertex2);
//         }

//         this.adjacencyList[vertex1].push(vertex2);
//         this.adjacencyList[vertex2].push(vertex1);
//     }

//     printGraph() {
//         for (let vertex in this.adjacencyList) {
//             console.log(`${vertex} -> ${this.adjacencyList[vertex]}`);

//         }
//     }
// }

// const graph = new ListGraph();

// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");

// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "C");

// graph.printGraph();



// Adjacency Matrix
class MatrixGraph {
    constructor(size) {
        this.size = size;
        this.matrix = Array.from({ length: size }, () => Array(size).fill(0));
    }

    addEdge(v1, v2) {
        this.matrix[v1][v2] = 1;
        this.matrix[v2][v1] = 1;
    }

    printGraph() {
        for (let row of this.matrix) {
            console.log(row);
        }
    }
}

const graph = new MatrixGraph(4);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);

graph.printGraph();