/*
    Problem: Graph Valid Tree
    Difficulty: Medium
    Companies: Amazon, Google, Meta, Microsoft

    Problem Statement:
    You have a list of n nodes labeled from 0 to n - 1 and a list of undirected
    edges where edges[i] = [ai, bi] indicates that there is an undirected edge
    between nodes ai and bi.

    Return true if the edges form a valid tree, and false otherwise.

    Note: For a graph to be a valid tree:
    1. It must have exactly n - 1 edges.
    2. All nodes must be connected (there's a path between every pair of nodes).
    3. There should be no cycles.

    Example 1:
    Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
    Output: true

    Example 2:
    Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
    Output: false
    Explanation: There is a cycle (1-2-3-1), so it's not a tree.

    Example 3:
    Input: n = 4, edges = [[0,1],[2,3]]
    Output: false
    Explanation: The graph is not connected (two separate components).
*/

/*
    Hinglish Logic Explanation:

    Yeh problem mein hume check karna hai ki given graph ek valid tree hai ya nahi.

    Tree hone ke liye 2 conditions satisfy honi chahiye:
    1. Exact n-1 edges hone chahiye (n nodes ke liye).
    2. Saare nodes connected hone chahiye (single component).

    Note: Agar n-1 edges hain aur saare nodes connected hain, to automatically
    cycle nahi hoga (tree property).

    Approach: BFS + Edge Count Check

    1. Pehle check karenge ki edges.length == n-1 hai ya nahi. Agar nahi hai,
       to false return karenge (condition 1 fail).

    2. Adjacency list banayenge undirected graph ke liye.

    3. BFS karenge node 0 se aur visited set maintain karenge.

    4. BFS ke baad check karenge ki visited set ki size == n hai ya nahi.
       Agar hai to saare nodes connected hain (condition 2 pass).

    5. Dono conditions pass ho gayin to true return karenge, warna false.

    Alternative Approach: Union-Find
    - Har edge ke liye find karenge ki dono nodes ka different root hai ya same.
    - Agar same root hai to cycle hai (return false).
    - Agar n-1 edges process ho gaye bina cycle ke, to valid tree hai.

    Key Points:
    - n nodes ke liye exactly n-1 edges chahiye tree ke liye.
    - Connectivity check karna zaroori hai.
    - BFS ya DFS dono use kar sakte hain connectivity check ke liye.
*/

function validTree(n, edges) {
    // Condition 1: Tree must have exactly n-1 edges
    if (edges.length !== n - 1) return false;

    // Build adjacency list for undirected graph
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    // BFS from node 0 to check connectivity
    const visited = new Set();
    const queue = [0];
    visited.add(0);

    while (queue.length > 0) {
        const node = queue.shift();
        for (const neighbor of adj[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    // Condition 2: All nodes must be visited (connected)
    return visited.size === n;
}

/*
    Time Complexity: O(n + e)
    - n = number of nodes
    - e = number of edges (which is n-1 for a valid tree)
    - Building adjacency list O(e) time leta hai.
    - BFS O(n + e) time leta hai.

    Space Complexity: O(n + e)
    - Adjacency list O(n + e) space leti hai.
    - Visited set O(n) space leta hai.
    - Queue mein maximum n nodes ho sakti hain.
*/

// Test Cases
console.log("Test 1 - Valid tree:");
console.log("n: 5, edges: [[0,1],[0,2],[0,3],[1,4]]");
console.log("Expected: true");
console.log("Output:", validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]));
console.log();

console.log("Test 2 - Has cycle:");
console.log("n: 5, edges: [[0,1],[1,2],[2,3],[1,3],[1,4]]");
console.log("Expected: false");
console.log("Output:", validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]));
console.log();

console.log("Test 3 - Not connected:");
console.log("n: 4, edges: [[0,1],[2,3]]");
console.log("Expected: false");
console.log("Output:", validTree(4, [[0, 1], [2, 3]]));
console.log();

console.log("Test 4 - Single node:");
console.log("n: 1, edges: []");
console.log("Expected: true");
console.log("Output:", validTree(1, []));
console.log();

console.log("Test 5 - Two nodes, one edge:");
console.log("n: 2, edges: [[0,1]]");
console.log("Expected: true");
console.log("Output:", validTree(2, [[0, 1]]));
console.log();

module.exports = { validTree };
