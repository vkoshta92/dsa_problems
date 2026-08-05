/*
    Problem: Clone Graph
    Difficulty: Medium
    Companies: Amazon, Google, Microsoft, Meta, Apple, Bloomberg

    Problem Statement:
    Given a reference of a node in a connected undirected graph, return a deep copy
    (clone) of the graph. Each node in the graph contains a value (int) and a list
    (List[Node]) of its neighbors.

    The graph is given as an adjacency list representation. You are given a node
    (reference node) and you need to return the clone of the given node.

    Example 1:
    Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
    Output: [[2,4],[1,3],[2,4],[1,3]]
    Explanation: There are 4 nodes in the graph.
    Node 1's neighbors are 2 and 4.
    Node 2's neighbors are 1 and 3.
    Node 3's neighbors are 2 and 4.
    Node 4's neighbors are 1 and 3.

    Example 2:
    Input: adjList = [[]]
    Output: [[]]
    Explanation: The graph has one node with no neighbors.

    Example 3:
    Input: adjList = []
    Output: []
    Explanation: The graph is empty.
*/

/*
    Hinglish Logic Explanation:

    Yeh problem mein hume graph ka deep copy banana hai. Deep copy ka matlab hai
    ki har node ka ek naya independent copy hona chahiye, old wale se koi connection
    nahi hona chahiye.

    Approach: BFS/DFS with HashMap

    1. Pehle hum ek HashMap (visitedMap) banayenge jo original node ko uske clone se
       map karegi. Isse hum track rakhenge ki kaunsi node already clone ho chuki hai.

    2. BFS approach use karenge:
       - Queue mein starting node daalenge aur uska clone bana lenge.
       - Jab queue se node nikalenge, to uske saare neighbors ko process karenge.
       - Agar neighbor pehle se clone nahi hua hai, to uska clone banayenge aur
         queue mein daalenge.
       - Current node ke clone mein cloned neighbor add karenge.

    3. DFS approach bhi use kar sakte hain (recursion):
       - Agar node already cloned hai to woh clone return kardo.
       - Nahi to naya node banao, map mein store karo, aur saare neighbors ke
         liye recursively clone karo.

    Key Points:
    - Har node ko exactly ek baar clone karna hai.
    - HashMap ensure karta hai ki duplicate nodes na bane.
    - Graph may contain cycles, isliye visited tracking zaroori hai.
*/

// Definition for a Node
class Node {
    constructor(val, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

// BFS Approach
function cloneGraphBFS(node) {
    if (!node) return null;

    const visitedMap = new Map();
    const queue = [node];
    const clone = new Node(node.val);
    visitedMap.set(node, clone);

    while (queue.length > 0) {
        const current = queue.shift();

        for (const neighbor of current.neighbors) {
            if (!visitedMap.has(neighbor)) {
                visitedMap.set(neighbor, new Node(neighbor.val));
                queue.push(neighbor);
            }
            visitedMap.get(current).neighbors.push(visitedMap.get(neighbor));
        }
    }

    return clone;
}

// DFS Approach (Recursive)
function cloneGraphDFS(node) {
    if (!node) return null;

    const visitedMap = new Map();

    function dfs(current) {
        if (visitedMap.has(current)) {
            return visitedMap.get(current);
        }

        const clone = new Node(current.val);
        visitedMap.set(current, clone);

        for (const neighbor of current.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }

        return clone;
    }

    return dfs(node);
}

/*
    Time Complexity: O(V + E)
    - V = number of vertices (nodes)
    - E = number of edges
    - Har node aur har edge exactly ek baar visit hoti hai.
    - HashMap operations O(1) average time lete hain.

    Space Complexity: O(V)
    - VisitedMap mein V nodes store hoti hain.
    - Queue/Recursion stack mein maximum V nodes ho sakti hain.
    - Overall space O(V) hai.
*/

// Helper function to create graph from adjacency list
function createGraph(adjList) {
    if (adjList.length === 0) return null;
    const nodes = adjList.map((_, i) => new Node(i + 1));
    adjList.forEach((neighbors, i) => {
        neighbors.forEach(n => {
            nodes[i].neighbors.push(nodes[n - 1]);
        });
    });
    return nodes[0];
}

// Helper function to serialize graph for comparison
function serialize(node) {
    if (!node) return [];
    const visited = new Set();
    const result = {};
    const queue = [node];
    visited.add(node.val);

    while (queue.length > 0) {
        const current = queue.shift();
        result[current.val] = current.neighbors.map(n => n.val).sort((a, b) => a - b);

        for (const neighbor of current.neighbors) {
            if (!visited.has(neighbor.val)) {
                visited.add(neighbor.val);
                queue.push(neighbor);
            }
        }
    }

    return result;
}

// Test Cases
const adjList1 = [[2, 4], [1, 3], [2, 4], [1, 3]];
const graph1 = createGraph(adjList1);
const clone1 = cloneGraphBFS(graph1);
console.log("Test 1 - Clone via BFS:");
console.log("Original:", serialize(graph1));
console.log("Clone:", serialize(clone1));
console.log("Are they same object?", graph1 === clone1); // Expected: false
console.log();

const adjList2 = [[]];
const graph2 = createGraph(adjList2);
const clone2 = cloneGraphBFS(graph2);
console.log("Test 2 - Single node with no neighbors:");
console.log("Original:", serialize(graph2));
console.log("Clone:", serialize(clone2));
console.log("Are they same object?", graph2 === clone2); // Expected: false
console.log();

const adjList3 = [[2, 4], [1, 3], [2, 4], [1, 3]];
const graph3 = createGraph(adjList3);
const clone3 = cloneGraphDFS(graph3);
console.log("Test 3 - Clone via DFS:");
console.log("Original:", serialize(graph3));
console.log("Clone:", serialize(clone3));
console.log("Are they same object?", graph3 === clone3); // Expected: false
console.log();

const adjList4 = [[2], [1, 3], [2]];
const graph4 = createGraph(adjList4);
const clone4 = cloneGraphBFS(graph4);
console.log("Test 4 - Linear graph:");
console.log("Original:", serialize(graph4));
console.log("Clone:", serialize(clone4));
console.log("Are they same object?", graph4 === clone4); // Expected: false
console.log();

module.exports = { Node, cloneGraphBFS, cloneGraphDFS };
