/* Edge List
/* Adjacency List
/* Graph of Node Objects (cloning graph problem)
/* Binary tree-like adjacency representation
/* Matrix-based graphs
/* Special cases (rooms, keys, islands, courses, unions)
*/

const Queue = require('../sequential/queue');

class Graph {
  constructor(size, isDirected = false) {
    this.size = size;
    this.isDirected = isDirected;
    this.list = Array.from({ length: size }, () => []);
  }

  addEdge(u, v) {
    this.list[u].push(v);
    if (!this.isDirected) {
      this.list[v].push(u);
    }
  }

  bfs(start) {
    const visited = new Array(this.size).fill(0);
    const queue = new Queue(this.size);
    queue.enqueue(start);
    visited[start] = 1;
    const result = [];

    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      result.push(node);
      visited[node] = 1;
      const neighbours = this.list[node];
      for (const neighbour of neighbours) {
        if (!visited[neighbour]) {
          visited[neighbour] = 1;
          queue.enqueue(neighbour);
        }
      }
    }
    return result;
  }

  dfs(start) {
    const visited = new Array(this.size).fill(0);
    const stack = [start];

    const result = [];
    while (stack.length > 0) {
      const node = stack.pop();

      if (!visited[node]) {
        visited[node] = 1;
        result.push(node);

        for (let i = this.list[node].length - 1; i >= 0; --i) {
          if (!visited[this.list[node][i]]) {
            stack.push(this.list[node][i]);
          }
        }
      }
    }
    return result;
  }
}

const g = new Graph(5);
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(4, 1);
g.addEdge(3, 4);

console.log(g.list);
console.log(g.dfs(1));
