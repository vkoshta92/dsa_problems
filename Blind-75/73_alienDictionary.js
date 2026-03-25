/**
 * ============================================================================
 * PROBLEM: Alien Dictionary
 * ============================================================================
 * Given a sorted dictionary of alien language, find order of characters.
 * Words are sorted lexicographically according to alien language rules.
 * 
 * ============================================================================
 * APPROACH: Topological Sort (Kahn's Algorithm)
 * ============================================================================
 * Logic:
 * 1. Build graph by comparing adjacent words
 * 2. First different character gives ordering relation
 * 3. Use topological sort to find character order
 * 4. If cycle exists, return "" (invalid ordering)
 * 
 * Building Graph:
 * - Compare adjacent words character by character
 * - First mismatch: word1[j] comes before word2[j]
 * - Add edge: word1[j] → word2[j]
 * 
 * Edge Case:
 * - If word1 is prefix of word2 and longer: invalid
 * - Example: ["abc", "ab"] is invalid
 * 
 * Example: ["wrt", "wrf", "er", "ett", "rftt"]
 * - wrt vs wrf: t → f
 * - wrf vs er: w → e
 * - er vs ett: r → t
 * - ett vs rftt: e → r
 * - Graph: w→e→r→t→f
 * - Order: "wertf"
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(C)
 * - C = total characters across all words
 * - Building graph: O(C)
 * - Topological sort: O(V + E) where V = unique chars
 * 
 * SPACE COMPLEXITY: O(V + E)
 * - Graph and indegree storage
 * ============================================================================
 */

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
