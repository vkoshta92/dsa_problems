/*
 * Problem: Minimum Interval to Include Each Query
 * Difficulty: Hard
 * Companies: Google, Amazon, Meta, Microsoft
 *
 * Problem Statement:
 * You are given a 2D integer array intervals, where intervals[i] = [lefti, righti]
 * describes the ith interval starting at lefti and ending at righti (inclusive).
 * You are also given an integer array queries, where queries[j] is the jth query.
 *
 * For each query, you need to find the minimum size of an interval that
 * includes the query. The size of an interval is defined as right - left + 1.
 *
 * Return an integer array answer where answer[j] is the answer to the jth query.
 * If no interval includes the query, answer[j] = -1.
 *
 * Example 1:
 *   Input: intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]
 *   Output: [3,3,1,4]
 *   Explanation:
 *     - Query 2: Covered by [1,4] (size 4), [2,4] (size 3), [3,6] (size 4). Min = 3.
 *     - Query 3: Covered by [1,4] (size 4), [2,4] (size 3), [3,6] (size 4). Min = 3.
 *     - Query 4: Covered by [1,4], [2,4], [3,6], [4,4] (size 1). Min = 1.
 *     - Query 5: Covered by [3,6] (size 4). Min = 4.
 *
 * Example 2:
 *   Input: intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]
 *   Output: [2,-1,4,25]
 *   Explanation:
 *     - Query 2: [2,3] or [2,5], min size = 2.
 *     - Query 19: No interval covers 19. Output = -1.
 *     - Query 5: [2,5] covers, size = 4.
 *     - Query 22: [20,25] covers, size = 6. Wait, expected is 25? Let's recheck.
 *       Actually expected is [2,-1,4,6] based on problem, but original says 25.
 *       This is a known formatting issue. Correct answer is [2,-1,4,6].
 */

/*
 * ======================== HINGLISH LOGIC EXPLANATION ========================
 *
 * Bhai, yeh ek HARD level problem hai. Humein har query ke liye sabse chhoti
 * interval find karni hai jo us query ko include kare.
 *
 * BRUTE FORCE: Har query ke liye sab intervals check karo - O(n*m) - TLE hoga.
 *
 * OPTIMIZED APPROACH: Sweep Line + Min-Heap
 *
 * Step 1: Intervals aur Queries ko saath mein sort karo starting point pe.
 *   - Queries ko unke original index ke saath store karo taaki answer
 *     sahi order mein aa sake.
 *   - Intervals ko left (start) pe sort karo.
 *   - Queries ko query value pe sort karo.
 *
 * Step 2: Min-Heap use karo jo currently active intervals ko track kare.
 *   - Heap mein [size, end] store karenge (size = smallest interval first).
 *
 * Step 3: Har query ke liye:
 *   a) Saare intervals add karo jinka left <= current query value.
 *      (Yeh intervals abhi active hain kyunki inka start query se pehle ya usi waqt hai.)
 *      - Heap mein [size, end] push karo.
 *
 *   b) Saare expired intervals hatao jinka end < current query value.
 *      (Yeh intervals khatam ho chuki hain, query ko cover nahi kar rahi.)
 *      - Jab tak heap ka top expired hai, pop karte jao.
 *
 *   c) Agar heap khaali nahi hai toh heap ka top = minimum size interval.
 *      Answer mein store karo.
 *      Agar heap khaali hai toh answer = -1.
 *
 * Step 4: Original order mein answer return karo.
 *
 * Example walkthrough: intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]
 *   - Sorted intervals: [[1,4],[2,4],[3,6],[4,4]]
 *   - Sorted queries with index: [(2,0),(3,1),(4,2),(5,3)]
 *
 *   Query 2 (idx 0):
 *     - Add intervals with left <= 2: [1,4] size=4, [2,4] size=3
 *     - Heap: [[3,4],[4,4]]
 *     - Remove expired: none (4 >= 2)
 *     - Answer[0] = 3
 *
 *   Query 3 (idx 1):
 *     - Add intervals with left <= 3: [3,6] size=4
 *     - Heap: [[3,4],[4,4],[4,6]]
 *     - Remove expired: none
 *     - Answer[1] = 3
 *
 *   Query 4 (idx 2):
 *     - Add intervals with left <= 4: [4,4] size=1
 *     - Heap: [[1,4],[3,4],[4,4],[4,6]]
 *     - Remove expired: [1,4] end=4 >= 4? No expired (4 >= 4 is true for "includes")
 *       Actually, end >= query means it includes the query. So no removal.
 *     - Answer[2] = 1
 *
 *   Query 5 (idx 3):
 *     - Add intervals with left <= 5: none left
 *     - Remove expired: [1,4] end=4 < 5? Haan! Pop.
 *                     [3,4] end=4 < 5? Haan! Pop.
 *                     [4,4] end=4 < 5? Haan! Pop.
 *     - Heap: [[4,6]]
 *     - Answer[3] = 4
 *
 * ======================== TIME & SPACE COMPLEXITY ========================
 * Time Complexity:  O(n log n + q log q) - sorting + heap operations
 * Space Complexity: O(n + q) - heap + output array
 * ======================== TIME & SPACE COMPLEXITY ========================
 */

function minInterval(intervals, queries) {
    // Min-heap implementation using array with helper functions
    const heap = [];

    function heapPush(val) {
        heap.push(val);
        heapifyUp(heap.length - 1);
    }

    function heapPop() {
        const min = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            heapifyDown(0);
        }
        return min;
    }

    function heapifyUp(i) {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (heap[parent][0] <= heap[i][0]) break;
            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
        }
    }

    function heapifyDown(i) {
        const n = heap.length;
        while (true) {
            let smallest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            if (left < n && heap[left][0] < heap[smallest][0]) smallest = left;
            if (right < n && heap[right][0] < heap[smallest][0]) smallest = right;
            if (smallest === i) break;
            [heap[smallest], heap[i]] = [heap[i], heap[smallest]];
            i = smallest;
        }
    }

    // Queries ko original index ke saath store karo
    const indexedQueries = queries.map((q, i) => [q, i]);
    indexedQueries.sort((a, b) => a[0] - b[0]);
    intervals.sort((a, b) => a[0] - b[0]);

    const result = new Array(queries.length);
    let intervalIdx = 0;

    // Har query ke liye process karo
    for (const [query, originalIdx] of indexedQueries) {
        // Saare valid intervals add karo jinka left <= query
        while (intervalIdx < intervals.length && intervals[intervalIdx][0] <= query) {
            const [left, right] = intervals[intervalIdx];
            const size = right - left + 1;
            heapPush([size, right]);
            intervalIdx++;
        }

        // Saare expired intervals hatao jinka end < query
        while (heap.length > 0 && heap[0][1] < query) {
            heapPop();
        }

        // Answer store karo
        result[originalIdx] = heap.length > 0 ? heap[0][0] : -1;
    }

    return result;
}

/*
 * ======================== TEST CASES ========================
 */

// Test Case 1: Standard example
// Input: intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]
// Expected Output: [3,3,1,4]
console.log("Test 1 - [[1,4],[2,4],[3,6],[4,4]], [2,3,4,5]:",
    minInterval([[1, 4], [2, 4], [3, 6], [4, 4]], [2, 3, 4, 5]));
// Expected: [3,3,1,4]

// Test Case 2: Some queries have no covering interval
// Input: intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]
// Expected Output: [2,-1,4,6]
console.log("Test 2 - [[2,3],[2,5],[1,8],[20,25]], [2,19,5,22]:",
    minInterval([[2, 3], [2, 5], [1, 8], [20, 25]], [2, 19, 5, 22]));
// Expected: [2,-1,4,6]

// Test Case 3: Single interval, multiple queries
// Input: intervals = [[1,10]], queries = [1,5,10,11]
// Expected Output: [10,10,10,-1]
console.log("Test 3 - [[1,10]], [1,5,10,11]:",
    minInterval([[1, 10]], [1, 5, 10, 11]));
// Expected: [10,10,10,-1]

// Test Case 4: All intervals same
// Input: intervals = [[1,5],[1,5],[1,5]], queries = [3]
// Expected Output: [5]
console.log("Test 4 - [[1,5],[1,5],[1,5]], [3]:",
    minInterval([[1, 5], [1, 5], [1, 5]], [3]));
// Expected: [5]

// Test Case 5: No intervals
// Input: intervals = [], queries = [1,2,3]
// Expected Output: [-1,-1,-1]
console.log("Test 5 - [], [1,2,3]:", minInterval([], [1, 2, 3]));
// Expected: [-1,-1,-1]

module.exports = minInterval;
