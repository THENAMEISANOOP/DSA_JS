class Graph {
    constructor() {
        this.adjList = {};
    }

    addNode(node) {
        if (!this.adjList[node]) this.adjList[node] = [];
    }

    addEdge(node1, node2) {
        this.addNode(node1);
        this.addNode(node2);
        this.adjList[node1].push(node2);
        this.adjList[node2].push(node1); // Remove for directed graph
    }

    printGraph() {
        for (let node in this.adjList) {
            console.log(`${node} -> ${this.adjList[node].join(', ')}`);
        }
    }

    bfsShortestDistance(start) {
        const dist = {};
        const visited = new Set();
        const queue = [start];

        dist[start] = 0;
        visited.add(start);

        while (queue.length) {
            const node = queue.shift();

            for (let neighbor of this.adjList[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    dist[neighbor] = dist[node] + 1;
                    queue.push(neighbor);
                }
            }
        }

        return dist;
    }

    dfs(start, visited = new Set()) {
        console.log(start);
        visited.add(start);
        for (let neighbor of this.adjList[start]) {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited);
            }
        }
    }

    dfsPaths(start, end, path = [], allPaths = []) {
        path.push(start);

        if (start === end) {
            allPaths.push([...path]);
        } else {
            for (let neighbor of this.adjList[start]) {
                if (!path.includes(neighbor)) {
                    this.dfsPaths(neighbor, end, path, allPaths);
                }
            }
        }

        path.pop();
        return allPaths;
    }
}

const g = new Graph();

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'D');
g.addEdge('C', 'E');

console.log("Graph:");
g.printGraph();

console.log("\nBFS shortest distance from A:");
console.log(g.bfsShortestDistance('A'));

console.log("\nDFS from A:");
g.dfs('A');

console.log("\nAll paths from A to E (DFS backtracking):");
console.log(g.dfsPaths('A', 'E'));

