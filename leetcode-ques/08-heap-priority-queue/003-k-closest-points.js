/*
 * Problem: K Closest Points to Origin
 * Difficulty: Medium
 * Companies: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 *
 * Problem Statement:
 * Given an array of points where points[i] = [xi, yi] represents a point
 * on the X-Y plane and an integer k, return the k closest points to the
 * origin (0, 0).
 *
 * The distance between a point (x, y) and the origin (0, 0) is
 * sqrt(x^2 + y^2). You may return the answer in any order. The answer
 * is guaranteed to be unique (except for the order it is in).
 *
 * Example 1:
 * Input: points = [[3,3],[5,-1],[-2,4]], k = 2
 * Output: [[3,3],[-2,4]]
 * Explanation: The distance from origin for [3,3] is sqrt(18) ≈ 4.24,
 *              for [5,-1] is sqrt(26) ≈ 5.10, for [-2,4] is sqrt(20) ≈ 4.47.
 *              Two closest are [3,3] and [-2,4].
 *
 * Example 2:
 * Input: points = [[1,3],[-2,2]], k = 1
 * Output: [[-2,2]]
 * Explanation: The distance from origin for [1,3] is sqrt(10) ≈ 3.16,
 *              for [-2,2] is sqrt(8) ≈ 2.83. The closest is [-2,2].
 *
 * Example 3:
 * Input: points = [[2,2],[2,2],[2,2]], k = 2
 * Output: [[2,2],[2,2]]
 * Explanation: Any two of the three points are equally close.
 */

/*
 * Hinglish Logic Explanation:
 * ----------------------------
 * Approach: Max-Heap of size k
 *
 * Hum ek max-heap maintain karenge jiska size hamesha k se zyada nahi hoga.
 * Heap mein distance ka max-heap rakhte hain — matlab jo point sabse door
 * hai origin se, woh heap ke top par hoga.
 *
 * Har naye point ko heap mein daalte hain:
 * 1. Pehle point ko heap mein push karo.
 * 2. Heap ko distance ke according sort karo (ascending order).
 *    Isse sabse bada distance end mein aa jayega.
 * 3. Agar heap ka size k se zyada ho jaye, toh end se pop karo —
 *    sabse door wala point nikal jayega.
 *
 * Is tarah se end mein heap mein sirf k sabse closest points bachenge.
 *
 * Yeh greedy approach hai — hum har waqt sirf k best candidates rakhte
 * hain aur baaki discard karte hain. Max-heap ensure karta hai ki agar
 * koi naya point kisi purane point se closer hai toh door wala nikal jaye.
 *
 * Alternative approach: Min-heap use karke saare points daalo aur k nikalo.
 * Ya phir sorting approach O(n log n). Par max-heap approach O(n log k) hai
 * jo better hai jab k << n ho.
 */

function kClosest(points, k) {
  const heap = [];

  const dist = (p) => p[0] * p[0] + p[1] * p[1];

  for (const point of points) {
    heap.push(point);
    // Sort ascending: smallest distance first, largest distance last
    heap.sort((a, b) => dist(a) - dist(b));
    // If heap exceeds size k, remove the farthest point (last element)
    if (heap.length > k) {
      heap.pop();
    }
  }

  return heap;
}

/*
 * Time Complexity: O(n * k log k)
 * - We iterate through n points. For each point, we sort the heap of size k.
 * - Sorting takes O(k log k). Total: O(n * k log k).
 *
 * Space Complexity: O(k)
 * - The heap stores at most k points at any time.
 */

// ======================== TEST CASES ========================

// Test Case 1: Basic example from LeetCode
// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Expected Output: [[3,3],[-2,4]]
console.log("Test 1:", kClosest([[3, 3], [5, -1], [-2, 4]], 2));
// Expected: [[3,3],[-2,4]] (order may vary)

// Test Case 2: Single closest point
// Input: points = [[1,3],[-2,2]], k = 1
// Expected Output: [[-2,2]]
console.log("Test 2:", kClosest([[1, 3], [-2, 2]], 1));
// Expected: [[-2,2]]

// Test Case 3: All points are same
// Input: points = [[2,2],[2,2],[2,2]], k = 2
// Expected Output: [[2,2],[2,2]]
console.log("Test 3:", kClosest([[2, 2], [2, 2], [2, 2]], 2));
// Expected: [[2,2],[2,2]]

// Test Case 4: Negative coordinates
// Input: points = [[-5,4],[-3,2],[1,0],[4,3]], k = 3
// Expected Output: [[-3,2],[1,0],[4,3]] or similar (distances: 13, 1, 1, 25)
console.log("Test 4:", kClosest([[-5, 4], [-3, 2], [1, 0], [4, 3]], 3));
// Expected: [[-3,2],[1,0],[4,3]] or [[1,0],[-3,2],[4,3]] (order varies)

// Test Case 5: k equals length of points
// Input: points = [[0,1],[1,0]], k = 2
// Expected Output: [[0,1],[1,0]] (both points returned)
console.log("Test 5:", kClosest([[0, 1], [1, 0]], 2));
// Expected: [[0,1],[1,0]]

module.exports = { kClosest };
