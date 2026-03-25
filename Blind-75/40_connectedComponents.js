/**
 * ============================================================================
 * PROBLEM: Number of Connected Components in Undirected Graph
 * ============================================================================
 * Given n nodes and edges list, return the number of connected components.
 * A connected component is a group of nodes where any two nodes are
 * connected by a path, and no node in the group is connected to outside.
 * 
 * ============================================================================
 * APPROACH: DFS/BFS Count
 * ============================================================================
 * Logic:
 * 1. Build adjacency list from edges
 * 2. Track visited nodes
 * 3. For each unvisited node, start DFS/BFS to mark entire component
 * 4. Increment count for each new component found
 * 
 * Key Insight:
 * - Each DFS/BFS from an unvisited node explores ONE entire component
 * - All nodes in that component get marked visited
 * - Count = number of times we start a new DFS/BFS
 * 
 * Example: n = 5, edges = [[0,1], [1,2], [3,4]]
 * Graph: 0 -- 1 -- 2    3 -- 4
 *        (component 1)   (component 2)
 * - Start DFS at 0: visits 0, 1, 2 → component 1
 * - Node 3 unvisited: start DFS, visits 3, 4 → component 2
 * - Total components: 2
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(V + E)
 * - V = n (nodes), E = edges.length
 * - Build graph: O(E)
 * - DFS visits each node/edge once: O(V + E)
 * 
 * SPACE COMPLEXITY: O(V + E)
 * - Adjacency list: O(V + E)
 * - Visited array: O(V)
 * - Recursion stack: O(V)
 * ============================================================================
 */

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
