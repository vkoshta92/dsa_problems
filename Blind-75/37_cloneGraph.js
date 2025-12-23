// Graph Node definition
function Node(val, neighbors = []) {
  this.val = val;
  this.neighbors = neighbors;
}

function cloneGraph(node) {
  if (!node) return null;

  // Map to store original -> cloned node
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
