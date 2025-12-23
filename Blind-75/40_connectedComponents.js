function countComponents(n, edges) {
  // Build adjacency list
  const graph = Array.from({ length: n }, () => []);

  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Array(n).fill(false);
  let components = 0;

  function dfs(node) {
    visited[node] = true;
    for (let nei of graph[node]) {
      if (!visited[nei]) dfs(nei);
    }
  }

  // Traverse all nodes
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      components++;
      dfs(i);
    }
  }

  return components;
}

// Test
console.log(countComponents(5, [[0,1],[1,2],[3,4]])); // 2
