/*
 * Problem: Non-overlapping Intervals
 * Difficulty: Medium
 * Companies: Amazon, Google, Microsoft, Meta, Apple
 *
 * Problem Statement:
 * Given an array of intervals intervals where intervals[i] = [starti, endi],
 * return the minimum number of intervals you need to remove to make the
 * rest of the intervals non-overlapping.
 *
 * Two intervals overlap if they share at least one common point.
 * For example, [1,3] and [2,4] overlap, but [1,3] and [4,5] do not.
 *
 * Example 1:
 *   Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
 *   Output: 1
 *   Explanation: Remove [1,3] and the rest [[1,2],[2,3],[3,4]] are non-overlapping.
 *
 * Example 2:
 *   Input: intervals = [[1,2],[1,2],[1,2]]
 *   Output: 2
 *   Explanation: You need to remove 2 intervals to have non-overlapping ones.
 *
 * Example 3:
 *   Input: intervals = [[1,2],[2,3]]
 *   Output: 0
 *   Explanation: They don't overlap, no need to remove any.
 */

/*
 * ======================== HINGLISH LOGIC EXPLANATION ========================
 *
 * Bhai, yeh classic greedy problem hai intervals wali. Humein minimum intervals
 * remove karne hain taaki baaki sab non-overlapping ho jayein.
 *
 * KEY INSIGHT: Yeh same hai "Maximum Non-overlapping Intervals" ka problem.
 * Agar hum maximum non-overlapping intervals rakh sakte hain, toh
 * (total - maximum non-overlapping) = minimum removals honge.
 *
 * Step 1: Intervals ko end time ke basis pe sort karo (ascending order).
 *   - Kyunki hum chahte hain ki jaldi khatam hone wale pehle aayein,
 *     taaki baaki ko zyada jagah mile.
 *
 * Step 2: Greedy approach:
 *   - Pehla interval hamesha rakhenge (remove count = 0).
 *   - 'lastEnd' = pehle interval ka end time.
 *   - Ab baaki intervals pe loop karo:
 *     * Agar current interval ka start >= lastEnd hai, toh overlap nahi hai.
 *       Isko rakh sakte hain. lastEnd = current interval ka end.
 *     * Agar current interval ka start < lastEnd hai, toh overlap hai.
 *       Humein ek interval remove karna hoga. Increment remove count.
 *       (Note: Hum current interval ko remove kar rahe hain kyunki
 *        end time ke basis pe sorted hain, toh current ka end >= lastEnd hai,
 *        isliye current ko remove karna better hai.)
 *
 * Step 3: Remove count return karo.
 *
 * Example walkthrough: intervals = [[1,2],[2,3],[3,4],[1,3]]
 *   - Sort by end: [[1,2],[2,3],[1,3],[3,4]]
 *   - lastEnd = 2 (pehla interval [1,2])
 *   - [2,3]: start(2) >= lastEnd(2)? Haan! lastEnd = 3
 *   - [1,3]: start(1) >= lastEnd(3)? Nahi! remove = 1
 *   - [3,4]: start(3) >= lastEnd(3)? Haan! lastEnd = 4
 *   - Result: 1
 *
 * ======================== TIME & SPACE COMPLEXITY ========================
 * Time Complexity:  O(n log n) - sorting ke liye
 * Space Complexity: O(1) - constant extra space (output space excluded)
 * ======================== TIME & SPACE COMPLEXITY ========================
 */

function eraseOverlapIntervals(intervals) {
    // Edge case: empty or single interval
    if (intervals.length <= 1) return 0;

    // End time ke basis pe sort karo
    intervals.sort((a, b) => a[1] - b[1]);

    let removeCount = 0;
    let lastEnd = intervals[0][1]; // pehle interval ka end

    // Baaki intervals pe iterate karo
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= lastEnd) {
            // Koi overlap nahi, isko rakh sakte hain
            lastEnd = intervals[i][1];
        } else {
            // Overlap hai, isko remove karna hoga
            removeCount++;
        }
    }

    return removeCount;
}

/*
 * ======================== TEST CASES ========================
 */

// Test Case 1: One removal needed
// Input: [[1,2],[2,3],[3,4],[1,3]]
// Expected Output: 1
console.log("Test 1 - [[1,2],[2,3],[3,4],[1,3]]:", eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]));
// Expected: 1

// Test Case 2: All overlapping
// Input: [[1,2],[1,2],[1,2]]
// Expected Output: 2
console.log("Test 2 - [[1,2],[1,2],[1,2]]:", eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]));
// Expected: 2

// Test Case 3: No overlap
// Input: [[1,2],[2,3]]
// Expected Output: 0
console.log("Test 3 - [[1,2],[2,3]]:", eraseOverlapIntervals([[1, 2], [2, 3]]));
// Expected: 0

// Test Case 4: Empty input
// Input: []
// Expected Output: 0
console.log("Test 4 - []:", eraseOverlapIntervals([]));
// Expected: 0

// Test Case 5: Complex overlapping
// Input: [[1,100],[11,22],[1,11],[2,12]]
// Expected Output: 2
console.log("Test 5 - [[1,100],[11,22],[1,11],[2,12]]:", eraseOverlapIntervals([[1, 100], [11, 22], [1, 11], [2, 12]]));
// Expected: 2

// Test Case 6: Single interval
// Input: [[1,2]]
// Expected Output: 0
console.log("Test 6 - [[1,2]]:", eraseOverlapIntervals([[1, 2]]));
// Expected: 0

module.exports = eraseOverlapIntervals;
