function alienOrder(words) {
  // Adjacency list for graph
  const graph = {};
  const indegree = {};

  // Initialize graph nodes
  for (let word of words) {
    for (let ch of word) {
      graph[ch] = [];
      indegree[ch] = 0;
    }
  }

  // Build graph by comparing adjacent words
  for (let i = 0; i < words.length - 1; i++) {
    let w1 = words[i];
    let w2 = words[i + 1];

    // Invalid case: prefix problem
    if (w1.startsWith(w2) && w1.length > w2.length) {
      return "";
    }

    // Find first different character
    for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
      if (w1[j] !== w2[j]) {
        graph[w1[j]].push(w2[j]);
        indegree[w2[j]]++;
        break;
      }
    }
  }

  // Topological sort (Kahn's BFS)
  const queue = [];
  for (let ch in indegree) {
    if (indegree[ch] === 0) queue.push(ch);
  }

  let result = "";

  while (queue.length) {
    let curr = queue.shift();
    result += curr;

    for (let nei of graph[curr]) {
      indegree[nei]--;
      if (indegree[nei] === 0) queue.push(nei);
    }
  }

  // If cycle exists, result length will be less
  return result.length === Object.keys(graph).length ? result : "";
}

// Test
console.log(alienOrder(["wrt","wrf","er","ett","rftt"]));
// Output: "wertf"
