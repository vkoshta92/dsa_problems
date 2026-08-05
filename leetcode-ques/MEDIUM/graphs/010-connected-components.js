/*
|--------------------------------------------------------------------------
| Problem: Number of Connected Components in an Undirected Graph
| Difficulty: Medium
| Companies: Amazon, Google, Meta, Microsoft, Apple, LinkedIn
| LeetCode: #323 (Premium)
|--------------------------------------------------------------------------
|
| Problem Statement:
| You have a graph of n nodes. You are given an integer n and an array edges
| where edges[i] = [ai, bi] indicates that there is an edge between ai and bi
| in the graph.
|
| Return the number of connected components in the graph.
|
| Example 1:
| Input: n = 5, edges = [[0,1],[1,2],[3,4]]
| Output: 2
| Explanation: Component 1: 0-1-2, Component 2: 3-4
|
| Example 2:
| Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
| Output: 1
| Explanation: All nodes are connected in one component.
|
| Example 3:
| Input: n = 4, edges = [[0,1],[2,3]]
| Output: 2
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, humein graph mein total isolated groups (connected components) ginne hain.
| Do approach hain: Union-Find aur DFS. Dono dekh lete hain.
|
| Approach 1: Union-Find (Disjoint Set Union - DSU)
| -------------------------------------------------
| 1. Har node ko apna parent banao (initialize).
| 2. Har edge [u, v] ke liye union(u, v) karo.
| 3. Find with path compression: recursive look parent[parent[...]] tak pahuncho.
| 4. Union: do nodes ke roots find karo, agar alag hain to ek ko doosre ka child banao.
| 5. Components count: initially n. Har successful union pe count--.
|
| Approach 2: DFS
| ---------------
| 1. Adjacency list banao edges se.
| 2. Visited set maintain karo.
| 3. Har unvisited node ke liye DFS shuru karo aur saare connected nodes
|    ko visited mark kar do. Components count badhao.
|
| Key Insight: DSU mein union operation ke saath component count track
| karna easy hai. DFS mein visited set ka use karte hain.
|
| Dry Run (DFS): n = 5, edges = [[0,1],[1,2],[3,4]]
| adj = {0:[1], 1:[0,2], 2:[1], 3:[4], 4:[3]}
| visited = {}
| Node 0 not visited: DFS(0) -> visit 0,1,2. count=1
| Node 1 visited, skip
| Node 2 visited, skip
| Node 3 not visited: DFS(3) -> visit 3,4. count=2
| Node 4 visited, skip
| Output: 2
|--------------------------------------------------------------------------
*/

/**
 * Union-Find approach
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function countComponents(n, edges) {
    // Initialize: each node is its own parent
    const parent = Array.from({ length: n }, (_, i) => i);

    // Find with path compression
    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    }

    // Union: returns 1 if actually united, 0 if already same set
    function union(x, y) {
        const rootX = find(x);
        const rootY = find(y);

        if (rootX === rootY) return 0;

        parent[rootY] = rootX;
        return 1;
    }

    let components = n;

    for (const [u, v] of edges) {
        components -= union(u, v);
    }

    return components;
}

/*
|--------------------------------------------------------------------------
| DFS approach (alternative)
|--------------------------------------------------------------------------
*/
function countComponentsDFS(n, edges) {
    // Build adjacency list
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u); // Undirected graph
    }

    const visited = new Set();
    let components = 0;

    function dfs(node) {
        visited.add(node);
        for (const neighbor of adj[node]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            components++;
            dfs(i);
        }
    }

    return components;
}

/*
|--------------------------------------------------------------------------
| Time Complexity (Union-Find):
| - Union and Find with path compression: O(α(n)) ≈ O(1) amortized
| - Processing all edges: O(E * α(n))
| - Overall: O(E + n) practically linear
|
| Time Complexity (DFS):
| - Building adjacency list: O(E)
| - DFS traversal: O(V + E)
| - Overall: O(V + E)
|
| Space Complexity (Union-Find): O(n) for parent array
| Space Complexity (DFS): O(V + E) for adjacency list + O(V) recursion stack
|--------------------------------------------------------------------------
*/

// ===================== TEST CASES =====================

console.log("=== Number of Connected Components (Union-Find) ===");
console.log("");

// Test Case 1: Two components
console.log("Test 1: n = 5, edges = [[0,1],[1,2],[3,4]]");
console.log("Expected: 2");
console.log("Output (UF):", countComponents(5, [[0, 1], [1, 2], [3, 4]]));
console.log("Output (DFS):", countComponentsDFS(5, [[0, 1], [1, 2], [3, 4]]));
console.log("");

// Test Case 2: Single component (all connected)
console.log("Test 2: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]");
console.log("Expected: 1");
console.log("Output (UF):", countComponents(5, [[0, 1], [1, 2], [2, 3], [3, 4]]));
console.log("Output (DFS):", countComponentsDFS(5, [[0, 1], [1, 2], [2, 3], [3, 4]]));
console.log("");

// Test Case 3: No edges (all isolated)
console.log("Test 3: n = 4, edges = []");
console.log("Expected: 4");
console.log("Output (UF):", countComponents(4, []));
console.log("Output (DFS):", countComponentsDFS(4, []));
console.log("");

// Test Case 4: Components with single nodes
console.log("Test 4: n = 3, edges = [[0,1]]");
console.log("Expected: 2");
console.log("Output (UF):", countComponents(3, [[0, 1]]));
console.log("Output (DFS):", countComponentsDFS(3, [[0, 1]]));

module.exports = { countComponents, countComponentsDFS };
