/**
 * ============================================================================
 * PROBLEM: Clone Graph
 * ============================================================================
 * Given a reference to a node in a connected undirected graph, return a
 * deep copy (clone) of the graph. Each node has a value and list of neighbors.
 * 
 * ============================================================================
 * APPROACH: DFS with Hash Map
 * ============================================================================
 * Logic:
 * 1. Use a hash map: original node → cloned node
 * 2. DFS through the graph
 * 3. If node already cloned, return from map
 * 4. Otherwise, create clone, store in map, clone neighbors recursively
 * 
 * Why Hash Map?
 * - Graph can have cycles
 * - Map prevents infinite recursion and duplicate clones
 * - Ensures each original node maps to exactly one clone
 * 
 * Cloning Process:
 * 1. Check if already cloned (in map)
 * 2. Create new node with same value
 * 3. Store in map BEFORE cloning neighbors (handles cycles)
 * 4. Recursively clone each neighbor and add to clone's neighbors
 * 
 * Example:
 * Original: 1 -- 2
 *           |    |
 *           4 -- 3
 * - Clone 1: create node(1), map[1] = clone1
 * - Clone neighbor 2: create node(2), map[2] = clone2
 * - Clone neighbor 3: create node(3), map[3] = clone3
 * - Clone neighbor 4: create node(4), map[4] = clone4
 * - Connect all clones as in original
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(V + E)
 * - V = number of vertices (nodes)
 * - E = number of edges
 * - Visit each node and edge once
 * 
 * SPACE COMPLEXITY: O(V)
 * - Hash map stores all nodes
 * - Recursion stack: O(V) in worst case
 * ============================================================================
 */

// Graph Node definition
function Node(val, neighbors = []) {
  this.val = val;
  this.neighbors = neighbors;
}

function cloneGraph(node) {
  if (!node) return null;

  // Map to store original → cloned node
  const map = new Map();

  function dfs(curr) {
    // If already cloned, return it
    if (map.has(curr)) return map.get(curr);

    // Create clone
    const clone = new Node(curr.val);
    map.set(curr, clone);

    // Clone neighbors
    for (let nei of curr.neighbors) {
      clone.neighbors.push(dfs(nei));
    }

    return clone;
  }

  return dfs(node);
}
