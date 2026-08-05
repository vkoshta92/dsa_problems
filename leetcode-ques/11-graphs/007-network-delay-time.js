/*
    Problem: Network Delay Time
    Difficulty: Medium
    Companies: Google, Amazon, Meta, Microsoft, Apple

    Problem Statement:
    You are given a network of n nodes, labeled from 1 to n. You are also given
    times, a list of travel times as directed edges times[i] = (ui, vi, wi),
    where ui is the source node, vi is the target node, and wi is the time it
    takes for a signal to travel from source to target.

    We will send a signal from a given node k. Return the minimum time it takes
    for all the n nodes to receive the signal. If it is impossible for all the
    nodes to receive the signal, return -1.

    Example 1:
    Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
    Output: 2
    Explanation: The signal travels 2 -> 1 (1 unit) and 2 -> 3 -> 4 (2 units).
    The minimum time for all nodes to receive is 2.

    Example 2:
    Input: times = [[1,2,1]], n = 2, k = 1
    Output: 1
    Explanation: Signal goes from node 1 to node 2, taking 1 unit of time.

    Example 3:
    Input: times = [[1,2,1]], n = 2, k = 2
    Output: -1
    Explanation: Node 2 cannot reach node 1, so not all nodes receive the signal.
*/

/*
    Hinglish Logic Explanation:

    Yeh problem shortest path finding ki hai ek source node (k) se saare nodes
    tak. Hume minimum time chahiye jisme saare nodes ko signal mil jaye.

    Approach: Dijkstra's Algorithm (Priority Queue / Min-Heap)

    1. Adjacency list banayenge times array se. Har edge (ui, vi, wi) ka matlab
       hai ki ui se vi jaane ka time wi hai.

    2. Ek distance array banayenge jo source (k) se har node tak ka shortest time
       store karegi. Initialize sabko Infinity se karenge, aur source ka distance
       0 rakhenge.

    3. Min-heap (priority queue) use karenge jo hamesha sabse chhota distance
       wala node pehle process kare.
       - Source node ko heap mein daalenge with distance 0.

    4. Jab tak heap khali nahi hoti:
       - Sabse chhota distance wala node nikalenge.
       - Agar uska distance pehle se shortest se zyada hai, to skip karenge.
       - Uske saare neighbors ke liye check karenge ki kya naya distance chhota
         hai. Agar hai to distance update karenge aur heap mein daal denge.

    5. Saare nodes process hone ke baad distance array mein se maximum value
       nikalenge. Agar koi node Infinity hai (unreachable), to return -1.
       Warna maximum value return karenge (woh time hai jab sabse last node
       ko signal milta hai).

    Key Points:
    - Dijkstra's algorithm O((V + E) log V) time leta hai min-heap ke saath.
    - Greedy approach: Har baar sabse shortest distance wala node process karte hain.
    - Negative weights mein Dijkstra kaam nahi karta, but yahan weights positive hain.
    - Max distance among all nodes = time when last node receives signal.
*/

function networkDelayTime(times, n, k) {
    // Step 1: Build adjacency list
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [u, v, w] of times) {
        adj[u].push([v, w]);
    }

    // Step 2: Initialize distances with Infinity
    const dist = new Array(n + 1).fill(Infinity);
    dist[k] = 0;

    // Step 3: Min-heap (using array + sort for simplicity)
    // In production, use a proper MinHeap implementation
    const heap = [[0, k]]; // [distance, node]

    while (heap.length > 0) {
        // Get node with minimum distance
        heap.sort((a, b) => a[0] - b[0]);
        const [d, u] = heap.shift();

        // Skip if we already found a shorter path
        if (d > dist[u]) continue;

        // Step 4: Process all neighbors
        for (const [v, w] of adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                heap.push([dist[v], v]);
            }
        }
    }

    // Step 5: Find maximum distance among all reachable nodes
    let maxDist = 0;
    for (let i = 1; i <= n; i++) {
        if (dist[i] === Infinity) return -1; // Unreachable node
        maxDist = Math.max(maxDist, dist[i]);
    }

    return maxDist;
}

/*
    Time Complexity: O((V + E) log V)
    - V = number of nodes (n)
    - E = number of edges (times.length)
    - Each node and edge is processed once.
    - Heap operations take O(log V) time.
    - With array-based heap (sorting each time), it's O((V + E) * V log V) worst case.

    Space Complexity: O(V + E)
    - Adjacency list takes O(V + E) space.
    - Distance array takes O(V) space.
    - Heap can store up to O(V) nodes.
*/

// Test Cases
console.log("Test 1 - Network delay:");
console.log("times: [[2,1,1],[2,3,1],[3,4,1]], n: 4, k: 2");
console.log("Expected: 2");
console.log("Output:", networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2));
console.log();

console.log("Test 2 - Simple two nodes:");
console.log("times: [[1,2,1]], n: 2, k: 1");
console.log("Expected: 1");
console.log("Output:", networkDelayTime([[1, 2, 1]], 2, 1));
console.log();

console.log("Test 3 - Unreachable node:");
console.log("times: [[1,2,1]], n: 2, k: 2");
console.log("Expected: -1");
console.log("Output:", networkDelayTime([[1, 2, 1]], 2, 2));
console.log();

console.log("Test 4 - Multiple paths:");
console.log("times: [[1,2,1],[2,3,1],[1,3,5]], n: 3, k: 1");
console.log("Expected: 2 (1->2:1, 1->2->3:2)");
console.log("Output:", networkDelayTime([[1, 2, 1], [2, 3, 1], [1, 3, 5]], 3, 1));
console.log();

module.exports = { networkDelayTime };
