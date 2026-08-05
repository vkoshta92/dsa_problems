/*
|--------------------------------------------------------------------------
| Problem: Minimum Number of Taps to Open to Water a Garden
| Difficulty: Hard
| Companies: Google, Amazon, Meta, Apple, Microsoft
| LeetCode: #1326
|--------------------------------------------------------------------------
|
| Problem Statement:
| There is a one-dimensional garden on the x-axis. The garden starts at
| point 0 and ends at point n. (i.e., the length of the garden is n).
|
| There are n + 1 taps located at points [0, 1, ..., n] in the garden.
| Given an integer n and an integer array ranges of length n + 1 where
| ranges[i] (0-indexed) means the i-th tap can water the area
| [i - ranges[i], i + ranges[i]] if it was open.
|
| Return the minimum number of taps that should be open to water the whole
| garden. If the garden cannot be watered, return -1.
|
| Example 1:
| Input: n = 5, ranges = [3, 4, 1, 1, 0, 0]
| Output: 1
| Explanation: Tap at point 1 covers [-3, 5]. Single tap covers entire garden.
|
| Example 2:
| Input: n = 3, ranges = [0, 0, 0, 0]
| Output: -1
| Explanation: No tap can water any area. Garden cannot be watered.
|
| Example 3:
| Input: n = 5, ranges = [3, 3, 1, 1, 1, 1]
| Output: 2
| Explanation: Tap at 0 covers [0,3], tap at 1 covers [0,5]. Minimum 2 taps.
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, yeh problem "Jump Game II" jaisi hi hai! Sirf representation alag hai.
| Humein garden [0, n] ko minimum taps se cover karna hai.
|
| Step 1: Convert to Jump Game Form
| ----------------------------------
| Har tap i ke liye ek interval calculate karo:
|   - left = max(0, i - ranges[i])
|   - right = min(n, i + ranges[i])
|
| Ab array banate hain covers[] jahan:
|   covers[left] = max(covers[left], right)
|   Matlab: point 'left' se start karke hum 'right' tak pahunch sakte hain.
|
| Step 2: Greedy Jump Game
| -------------------------
| Same logic jaise Jump Game II:
|   - currentEnd: current tap se kitna door tak pahunch sakte hain
|   - farthest: ab tak ki maximum reach
|   - taps: kitne taps use ho chuke hain
|
| Algorithm:
|   - Har position i ko traverse karo 0 se n tak
|   - farthest = max(farthest, covers[i])
|   - Agar i == currentEnd:
|     - Agar farthest <= i: return -1 (aage nahi badh sakte, impossible)
|     - taps++ (naya tap khologe)
|     - currentEnd = farthest
|   - Agar currentEnd >= n: return taps (garden poora cover ho gaya)
|
| Key Insight: Taps ko Jump Game mein convert karne se problem simple
| greedy ban jati hai. Har step pe maximum reach extend karte jao.
|
| Dry Run: n = 5, ranges = [3, 4, 1, 1, 0, 0]
|
| Calculated intervals:
|   tap 0 (r=3): left=0, right=3   => covers[0] = 3
|   tap 1 (r=4): left=0, right=5   => covers[0] = 5
|   tap 2 (r=1): left=1, right=3   => covers[1] = 3
|   tap 3 (r=1): left=2, right=4   => covers[2] = 4
|   tap 4 (r=0): left=4, right=4   => covers[4] = 4
|   tap 5 (r=0): left=5, right=5   => covers[5] = 5
|
| covers = [5, 3, 4, 0, 4, 5]
|
| i=0: farthest=5, i==currentEnd(0)
|   farthest(5) > i(0): taps=1, currentEnd=5
|   currentEnd(5) >= n(5): return 1 ✓
|--------------------------------------------------------------------------
*/

/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
function minTaps(n, ranges) {
    // Step 1: Convert to Jump Game format
    // covers[i] = maximum right position reachable from position i
    const covers = new Array(n + 1).fill(0);

    for (let i = 0; i < ranges.length; i++) {
        const range = ranges[i];
        if (range === 0) continue;

        const left = Math.max(0, i - range);
        const right = Math.min(n, i + range);
        covers[left] = Math.max(covers[left], right);
    }

    // Step 2: Greedy Jump Game II
    let taps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < n; i++) {
        farthest = Math.max(farthest, covers[i]);

        // Agar current position pe pahunch gaye (need new tap)
        if (i === currentEnd) {
            // Agar aage nahi badh sakte, impossible
            if (farthest <= i) {
                return -1;
            }
            taps++;
            currentEnd = farthest;

            // Early exit: garden cover ho gaya
            if (currentEnd >= n) {
                return taps;
            }
        }
    }

    // Agar loop khatam hone ke baad bhi n tak nahi pahunche
    return currentEnd >= n ? taps : -1;
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(n)
| - Pehla loop: O(n) to build covers array
| - Doosra loop: O(n) for greedy traversal
| - Overall: O(n)
|
| Space Complexity: O(n)
| - covers array of size n+1
|--------------------------------------------------------------------------
*/

// ===================== TEST CASES =====================

console.log("=== Minimum Number of Taps ===");
console.log("");

// Test Case 1: Single tap covers all
console.log("Test 1: n = 5, ranges = [3, 4, 1, 1, 0, 0]");
console.log("Expected: 1");
console.log("Output:", minTaps(5, [3, 4, 1, 1, 0, 0]));
console.log("");

// Test Case 2: Impossible (all zero ranges)
console.log("Test 2: n = 3, ranges = [0, 0, 0, 0]");
console.log("Expected: -1");
console.log("Output:", minTaps(3, [0, 0, 0, 0]));
console.log("");

// Test Case 3: Multiple taps needed
console.log("Test 3: n = 5, ranges = [3, 3, 1, 1, 1, 1]");
console.log("Expected: 2");
console.log("Output:", minTaps(5, [3, 3, 1, 1, 1, 1]));
console.log("");

// Test Case 4: Sequential coverage
console.log("Test 4: n = 7, ranges = [1, 2, 1, 0, 2, 1, 0, 1]");
console.log("Expected: 3");
console.log("Output:", minTaps(7, [1, 2, 1, 0, 2, 1, 0, 1]));
console.log("");

module.exports = { minTaps };
