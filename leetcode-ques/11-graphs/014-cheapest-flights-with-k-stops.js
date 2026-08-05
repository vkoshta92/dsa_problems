/*
 * ==========================================
 * Problem: Cheapest Flights Within K Stops
 * Difficulty: Medium
 * Companies: Amazon, Google, Meta, Microsoft
 * LeetCode: #787
 * ==========================================
 *
 * Problem Statement:
 * There are n cities connected by some number of flights. You are given an
 * array flights where flights[i] = [fromi, toi, pricei] indicates that there
 * is a flight from city fromi to city toi with cost pricei.
 *
 * You are also given three integers: src, dst, and k.
 * Return the cheapest price from src to dst with at most k stops.
 * If there is no such route, return -1.
 *
 * Example 1:
 * Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
 * Output: 700
 * Explanation: The optimal path with at most 1 stop from city 0 to 3 is
 * 0 -> 1 -> 3 with total cost 100 + 600 = 700.
 * Note: path 0 -> 1 -> 2 -> 3 is cheaper (400) but has 2 stops, which exceeds k=1.
 *
 * Example 2:
 * Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
 * Output: 200
 * Explanation: 0 -> 1 -> 2 (cost 200, 1 stop)
 *
 * Example 3:
 * Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
 * Output: 500
 * Explanation: 0 -> 2 direct (cost 500, 0 stops)
 */

/*
 * ==========================================
 * Hinglish Logic Explanation (Detailed)
 * ==========================================
 *
 * Bhai, yeh problem Dijkstra ka modified version hai jisme humein ek extra
 * constraint handle karna hai: max K stops. Simple Dijkstra mein hum bas
 * cost optimize karte hain, lekin yahan stops bhi limit mein hone chahiye.
 *
 * Approach: BFS with K+1 Levels (Bellman-Ford variant)
 *
 * Step 1: Ek cost array banao of size n, sabko Infinity se initialize karo.
 *         cost[src] = 0 karo kyunki source tak pahunchne ka cost 0 hai.
 *
 * Step 2: Main logic: Hum BFS karenge exactly K+1 iterations tak.
 *         Kyun? Kyunki:
 *         - K stops ka matlab hai: src -> stop1 -> stop2 -> ... -> stopK -> dst
 *         - Yeh path mein total K+1 edges (flights) hain
 *         - Isliye hume K+1 times relax karna padega
 *
 * Step 3: Har iteration mein:
 *         - Ek temporary copy banao current costs ki (taaki ek hi iteration
 *           mein multiple updates ek doosre ko affect na karein)
 *         - Saari flights par loop lagao
 *         - Agar cost[from] != Infinity hai (matlab yahan tak pahunch sakte hain)
 *           aur cost[from] + price < temp[to] hai, toh temp[to] update karo
 *
 * Step 4: K+1 iterations ke baad, agar cost[dst] == Infinity hai toh -1 return
 *         karo, warna cost[dst] return karo.
 *
 * Example Walkthrough (n=4, flights as above, src=0, dst=3, k=1):
 *
 * Initial: cost = [0, Inf, Inf, Inf]
 *
 * Iteration 0 (0 stops, i.e., direct flight from src):
 *   temp = [0, Inf, Inf, Inf]
 *   Flight [0,1,100]: cost[0]=0, 0+100=100 < temp[1]=Inf => temp[1]=100
 *   Flight [1,2,100]: cost[1]=Inf, skip
 *   Flight [2,0,100]: cost[2]=Inf, skip
 *   Flight [1,3,600]: cost[1]=Inf, skip
 *   Flight [2,3,200]: cost[2]=Inf, skip
 *   cost becomes: [0, 100, Inf, Inf]
 *
 * Iteration 1 (1 stop):
 *   temp = [0, 100, Inf, Inf] (copy of current cost)
 *   Flight [0,1,100]: cost[0]+100=100, not < temp[1]=100, skip
 *   Flight [1,2,100]: cost[1]=100, 100+100=200 < temp[2]=Inf => temp[2]=200
 *   Flight [2,0,100]: cost[2]=Inf, skip
 *   Flight [1,3,600]: cost[1]=100, 100+600=700 < temp[3]=Inf => temp[3]=700
 *   Flight [2,3,200]: cost[2]=Inf, skip
 *   cost becomes: [0, 100, 200, 700]
 *
 * k=1 ke liye hume 2 iterations (0 stops + 1 stop) karni thin.
 * Answer: cost[3] = 700
 *
 * NOTE: Hum 0 -> 1 -> 2 -> 3 (cost 400) nahi le sakte kyunki usme 2 stops hain.
 *
 * Key Insight: Temp array isliye zaroori hai kyunki hum ek iteration mein
 * multiple flights process karte hain. Agar temp na ho, toh ek flight ka
 * updated cost doosri flight ko usi iteration mein affect kar sakta hai,
 * jo effectively extra stops add kar dega bina count kiye.
 */

function findCheapestPrice(n, flights, src, dst, k) {
    // Step 1: Cost array initialize - source se destination tak ka minimum cost
    let cost = new Array(n).fill(Infinity);
    cost[src] = 0;

    // Step 2: K+1 iterations (max K stops = K+1 edges)
    for (let stops = 0; stops <= k; stops++) {
        // Temp array - ek iteration mein multiple updates ko isolate karne ke liye
        const temp = [...cost];

        for (const [from, to, price] of flights) {
            // Agar source city tak pahunch nahi sakte toh skip
            if (cost[from] === Infinity) continue;

            // Agar current path se better cost milti hai toh update karo temp mein
            if (cost[from] + price < temp[to]) {
                temp[to] = cost[from] + price;
            }
        }

        // Update cost for next iteration
        cost = temp;
    }

    return cost[dst] === Infinity ? -1 : cost[dst];
}

/*
 * ==========================================
 * Time & Space Complexity Analysis
 * ==========================================
 *
 * Time Complexity: O(E * K)
 *   - where E = flights.length (number of edges)
 *   - where K = max stops limit
 *   - K+1 iterations, each processing all E flights
 *   - Total: O(E * K)
 *
 * Space Complexity: O(N)
 *   - cost array: O(n)
 *   - temp array: O(n)
 *   - Total: O(N) where N = number of cities
 */

// ===========================================
// Test Cases with Expected Output
// ===========================================

// Test Case 1: Standard case with stop limit
console.log("Test 1: K=1 stops (0->1->3)");
const n1 = 4, flights1 = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]];
console.log("Expected: 700  |  Output:", findCheapestPrice(n1, flights1, 0, 3, 1));
console.log();

// Test Case 2: Multiple paths, K=1
console.log("Test 2: Multiple paths with K=1");
const n2 = 3, flights2 = [[0, 1, 100], [1, 2, 100], [0, 2, 500]];
console.log("Expected: 200  |  Output:", findCheapestPrice(n2, flights2, 0, 2, 1));
console.log();

// Test Case 3: Direct flight only, K=0
console.log("Test 3: Only direct flight allowed (K=0)");
const n3 = 3, flights3 = [[0, 1, 100], [1, 2, 100], [0, 2, 500]];
console.log("Expected: 500  |  Output:", findCheapestPrice(n3, flights3, 0, 2, 0));
console.log();

// Test Case 4: No possible route
console.log("Test 4: Destination unreachable");
const n4 = 3, flights4 = [[0, 1, 100]];
console.log("Expected: -1  |  Output:", findCheapestPrice(n4, flights4, 0, 2, 0));
console.log();

module.exports = { findCheapestPrice };
