# Graphs - Basics

## Graph Kya Hai?
Nodes (vertices) aur edges ka collection. Trees se zyada general hai - koi
parent-child relationship nahi hai.

```javascript
// Adjacency List (most common)
const graph = {
  0: [1, 2],
  1: [0, 3],
  2: [0],
  3: [1]
};

// Adjacency Matrix
const matrix = [
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [1, 0, 0, 0],
  [0, 1, 0, 0]
];
```

## Types

| Type | Directed? | Weighted? | Example |
|---|---|---|---|
| Undirected | No | No | Social network |
| Directed | Yes | No | Twitter follows |
| Weighted | Any | Yes | Road distances |

## BFS (Breadth First Search)

```javascript
function bfs(graph, start) {
  const visited = new Set([start]);
  const queue = [start];
  while (queue.length) {
    const node = queue.shift();
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return visited;
}
```
**Use:** Shortest path (unweighted), level-order, connected components.

## DFS (Depth First Search)

```javascript
// Recursive
function dfs(graph, node, visited = new Set()) {
  visited.add(node);
  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) dfs(graph, neighbor, visited);
  }
}

// Iterative with stack
function dfsIterative(graph, start) {
  const visited = new Set([start]);
  const stack = [start];
  while (stack.length) {
    const node = stack.pop();
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    }
  }
}
```
**Use:** Cycle detection, topological sort, path finding, connected components.

## Topological Sort (Kahn's Algorithm)

```javascript
function topologicalSort(numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0);
  const adj = Array.from({ length: numCourses }, () => []);
  for (const [course, prereq] of prerequisites) {
    adj[prereq].push(course);
    inDegree[course]++;
  }
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  const result = [];
  while (queue.length) {
    const course = queue.shift();
    result.push(course);
    for (const next of adj[course]) {
      inDegree[next]--;
      if (inDegree[next] === 0) queue.push(next);
    }
  }
  return result.length === numCourses ? result : []; // cycle exists if not all
}
```
**Use:** Course schedule, task ordering, dependency resolution.

## Union-Find

```javascript
class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }
  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  union(x, y) {
    const px = this.find(x);
    const py = this.find(y);
    if (px === py) return false;
    if (this.rank[px] < this.rank[py]) this.parent[px] = py;
    else if (this.rank[px] > this.rank[py]) this.parent[py] = px;
    else { this.parent[py] = px; this.rank[px]++; }
    return true;
  }
}
```
**Use:** Cycle detection, connected components, graph valid tree.

## Dijkstra's (Shortest Path Weighted)

```javascript
function dijkstra(graph, start) {
  const dist = new Array(Object.keys(graph).length).fill(Infinity);
  dist[start] = 0;
  const heap = [[0, start]]; // [distance, node]
  while (heap.length) {
    heap.sort((a, b) => a[0] - b[0]);
    const [d, node] = heap.shift();
    if (d > dist[node]) continue;
    for (const [neighbor, weight] of graph[node]) {
      if (dist[node] + weight < dist[neighbor]) {
        dist[neighbor] = dist[node] + weight;
        heap.push([dist[neighbor], neighbor]);
      }
    }
  }
  return dist;
}
```
**Use:** Network delay time, shortest path with weights.

## When to Use What?

| Problem | Approach |
|---|---|
| Shortest path (unweighted) | BFS |
| Shortest path (weighted) | Dijkstra |
| Cycle detection | DFS / Union-Find |
| Topological ordering | BFS (Kahn's) |
| Connected components | DFS / Union-Find |
| All paths | DFS backtracking |
| Islands/grid problems | DFS/BFS on grid |

## Interview Tips
- Grid problems = 4 directions (up, down, left, right)
- Adjacency list representation preferred (sparse graphs)
- Visited set lagao taaki infinite loop na ho
- "Number of islands" = DFS/BFS, "Rotting oranges" = multi-source BFS
- "Course schedule" = Topological sort
- "Graph valid tree" = n-1 edges + no cycle
