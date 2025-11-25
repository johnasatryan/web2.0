const Queue = require('../sequential/queue');

class Graph {
  constructor(size, isDirected = false) {
    this.size = size;
    this.isDirected = isDirected;

    this.matrix = Array.from({ length: size }, () => Array(size).fill(0));
  }

  addEdge(u, v) {
    this.matrix[u][v] = 1;
    if (!this.isDirected) {
      this.matrix[v][u] = 1;
    }
  }

  bfs(start) {
    const visited = Array(this.size).fill(false);
    const queue = new Queue(this.size);
    const result = [];

    visited[start] = true;

    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      result.push(node);
      for (let neighor = 0; i < this.size; ++i) {
        if (this.matrix[node][neighor] === 1 && !visited[neighor]) {
          visited[neighor] = true;
          queue.push(neighor);
        }
      }
    }
    return result;
  }
  print() {
    console.log('Adjacency Matrix:');

    let header = '    ';
    for (let i = 0; i < this.size; i++) {
      header += i + ' ';
    }
    console.log(header);

    for (let i = 0; i < this.size; i++) {
      let row = i + ' | ';
      for (let j = 0; j < this.size; j++) {
        row += this.matrix[i][j] + ' ';
      }
      console.log(row);
    }
  }
}

const g = new Graph(8);

g.addEdge(1, 5);
g.addEdge(1, 4);
g.addEdge(1, 2);
g.addEdge(2, 7);
g.addEdge(2, 6);
g.addEdge(2, 3);

// g.print();
