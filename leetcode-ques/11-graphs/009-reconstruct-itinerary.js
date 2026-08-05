/*
    Problem: Reconstruct Itinerary
    Difficulty: Hard
    Companies: Google, Amazon, Microsoft, Meta, Apple

    Problem Statement:
    You are given a list of airline tickets where tickets[i] = [fromi, toi]
    represent the departure and arrival airports of one flight. Reconstruct the
    itinerary in order and return it.

    All of the tickets belong to a man who departs from "JFK". Thus, the
    itinerary must begin with "JFK". If there are multiple valid itineraries,
    you should return the itinerary with the smallest lexical order when read
    as a single string.

    Note: From one city there will be multiple flights and all of them are from
    the same city and to the same city.

    Example 1:
    Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
    Output: ["JFK","MUC","LHR","SFO","SJC"]

    Example 2:
    Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
    Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
    Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"]
    but it is larger in lexical order.

    Example 3:
    Input: tickets = [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]
    Output: ["JFK","NRT","JFK","KUL"]
*/

/*
    Hinglish Logic Explanation:

    Yeh problem Eulerian path finding ki hai. Hume saare tickets (flights) use
    karte hue ek itinerary banana hai jo "JFK" se start ho.

    Approach: DFS with Sorted Adjacency List (Hierholzer's Algorithm)

    1. Adjacency list banayenge jo departure airport se destination airports ki
       list store karegi.

    2. Important: Har adjacency list ko sorted order mein rakhenge taaki
       lexical smallest itinerary mile.

    3. DFS karenge "JFK" se:
       - Jab tak current airport se koi flight ja rahi hai, use lete jao.
       - Har flight use karne ke baad usse adjacency list se hata do (taaki
         duplicate use na ho).
       - Recursion mein neeche jaao jab tak koi flight na bache.
       - Jab backtrack karo, current airport ko result mein add karo.

    4. Final result reverse karna hai kyunki DFS mein airports reverse order
       mein add hote hain.

    Key Points:
    - Yeh Eulerian path problem hai (har edge exactly ek baar use hona chahiye).
    - Hierholzer's algorithm O(E) time leta hai where E = number of edges.
    - Sorted adjacency list ensure karti hai lexical order.
    - DFS mein jab koi option na bache, to current node result mein add hota hai.
    - Result reverse karne se correct order milta hai.
*/

function findItinerary(tickets) {
    // Step 1: Build adjacency list
    const adj = {};
    for (const [from, to] of tickets) {
        if (!adj[from]) adj[from] = [];
        adj[from].push(to);
    }

    // Step 2: Sort each adjacency list (for lexical order)
    for (const from in adj) {
        adj[from].sort();
    }

    const result = [];

    // Step 3: DFS from JFK
    function dfs(airport) {
        const destinations = adj[airport] || [];

        while (destinations.length > 0) {
            const next = destinations.shift(); // Get smallest lexical destination
            dfs(next);
        }

        result.push(airport); // Add after visiting all destinations
    }

    dfs("JFK");

    // Step 4: Reverse to get correct order
    return result.reverse();
}

/*
    Time Complexity: O(E * log E)
    - E = number of tickets (edges)
    - Building adjacency list: O(E)
    - Sorting each adjacency list: O(E * log E) total
    - DFS visits each edge exactly once: O(E)
    - Total: O(E * log E)

    Space Complexity: O(E)
    - Adjacency list stores E edges.
    - Recursion stack depth can be up to E in worst case.
    - Result array stores E + 1 airports.
*/

// Test Cases
console.log("Test 1 - Simple itinerary:");
console.log("tickets: [['MUC','LHR'],['JFK','MUC'],['SFO','SJC'],['LHR','SFO']]");
console.log("Expected: ['JFK','MUC','LHR','SFO','SJC']");
console.log("Output:", findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]));
console.log();

console.log("Test 2 - Multiple valid itineraries (lexical smallest):");
console.log("tickets: [['JFK','SFO'],['JFK','ATL'],['SFO','ATL'],['ATL','JFK'],['ATL','SFO']]");
console.log("Expected: ['JFK','ATL','JFK','SFO','ATL','SFO']");
console.log("Output:", findItinerary([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]]));
console.log();

console.log("Test 3 - Cycle with branch:");
console.log("tickets: [['JFK','KUL'],['JFK','NRT'],['NRT','JFK']]");
console.log("Expected: ['JFK','NRT','JFK','KUL']");
console.log("Output:", findItinerary([["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]]));
console.log();

console.log("Test 4 - Linear path:");
console.log("tickets: [['JFK','ATL'],['ATL','SFO'],['SFO','LAX']]");
console.log("Expected: ['JFK','ATL','SFO','LAX']");
console.log("Output:", findItinerary([["JFK", "ATL"], ["ATL", "SFO"], ["SFO", "LAX"]]));
console.log();

module.exports = { findItinerary };
