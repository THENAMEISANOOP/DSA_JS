class Graph {
    constructor() {
        this.adjList = {};
    }

    addNode(node) {
        if (!this.adjList[node]) {
            this.adjList[node] = [];
        }
    }

    addEdge(node1, node2, weight) {
        this.addNode(node1);
        this.addNode(node2);
        this.adjList[node1].push([node2, weight]);
        this.adjList[node2].push([node1, weight]); // remove this line if directed
    }

    dijkstra(start) {
        const dist = {};
        const visited = new Set();

        // Initialize distances
        for (let node in this.adjList) {
            dist[node] = Infinity;
        }
        dist[start] = 0;

        while (visited.size < Object.keys(this.adjList).length) {
            let currNode = null;
            let minDist = Infinity;

            for (let node in dist) {
                if (!visited.has(node) && dist[node] < minDist) {
                    minDist = dist[node];
                    currNode = node;
                }
            }

            if (currNode === null) break; // no reachable node left
            visited.add(currNode);

            for (let [neighbor, weight] of this.adjList[currNode]) {
                if (!visited.has(neighbor)) {
                    const newDist = dist[currNode] + weight;
                    if (newDist < dist[neighbor]) {
                        dist[neighbor] = newDist;
                    }
                }
            }
        }

        return dist;
    }

    printGraph() {
        for (let node in this.adjList) {
            console.log(`${node} -> ${this.adjList[node].map(n => `${n[0]}(${n[1]})`).join(', ')}`);
        }
    }
}


const g = new Graph();

g.addEdge('A', 'B', 1);
g.addEdge('A', 'C', 4);
g.addEdge('B', 'C', 2);
g.addEdge('B', 'D', 5);
g.addEdge('C', 'D', 1);

console.log("Graph:");
g.printGraph();

console.log("\nShortest distances from A:");
console.log(g.dijkstra('A'));
