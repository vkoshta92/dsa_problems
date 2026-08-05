/*
|--------------------------------------------------------------------------
| Problem: Unique Paths
| Difficulty: Medium
| Companies: Amazon, Google, Meta, Microsoft, Apple, Bloomberg, Goldman Sachs
| LeetCode: #62
|--------------------------------------------------------------------------
|
| Problem Statement:
| A robot is located at the top-left corner of an m x n grid.
| The robot can only move either down or right at any point in time.
| The robot is trying to reach the bottom-right corner of the grid.
| How many possible unique paths are there?
|
| Example 1:
| Input: m = 3, n = 7
| Output: 28
|
| Example 2:
| Input: m = 3, n = 2
| Output: 3
| Explanation: From top-left, there are 3 ways:
|   - Right -> Down -> Down
|   - Down -> Down -> Right
|   - Down -> Right -> Down
|
| Example 3:
| Input: m = 3, n = 3
| Output: 6
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, robot ko top-left se bottom-right tak pahunchne ke tareeke ginne hain.
| Robot sirf right ya down move kar sakta hai.
|
| Approach: Dynamic Programming (2D)
| ----------------------------------
| 1. dp[i][j] = number of unique paths to reach cell (i, j)
|
| 2. Base Case:
|    - First row (i=0): sirf right se aaya ja sakta hai. dp[0][j] = 1
|    - First column (j=0): sirf down se aaya ja sakta hai. dp[i][0] = 1
|
| 3. Recurrence Relation:
|    dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
|    Matlab: current cell tak pahunchne ke raaste =
|            upar wali cell tak ke raaste + left wali cell tak ke raaste
|
| 4. Final answer: dp[m-1][n-1]
|
| Space Optimization: O(min(m, n))
| ---------------------------------
| Sirf ek row ya column ka DP array rakh sakte hain kyunki har cell
| sirf upar aur left pe depend karta hai.
|
| Dry Run: m = 3, n = 3
|
| Initial: dp = [1, 1, 1] (first row)
|
| Row 1:
|   dp[0] = 1 (first column, always 1)
|   dp[1] = dp[1] (old = 1) + dp[0] (new = 1) = 2
|   dp[2] = dp[2] (old = 1) + dp[1] (new = 2) = 3
|   dp = [1, 2, 3]
|
| Row 2:
|   dp[0] = 1
|   dp[1] = dp[1] (old = 2) + dp[0] (new = 1) = 3
|   dp[2] = dp[2] (old = 3) + dp[1] (new = 3) = 6
|   dp = [1, 3, 6]
|
| Answer: dp[2] = 6
|
| Combinatorial Insight: Total moves = (m-1) down + (n-1) right = (m+n-2)
| We choose (m-1) positions for down moves out of (m+n-2): C(m+n-2, m-1)
| C(4, 2) = 6 ✓
|--------------------------------------------------------------------------
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
    // Space optimization: use 1D array of size n
    const dp = new Array(n).fill(1);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // dp[j] = upar wali row ka dp[j] (old) + left wali dp[j-1] (new)
            dp[j] = dp[j] + dp[j - 1];
        }
    }

    return dp[n - 1];
}

/*
|--------------------------------------------------------------------------
| 2D DP version (easier to understand, O(m*n) space)
|--------------------------------------------------------------------------
*/
function uniquePaths2D(m, n) {
    const dp = Array.from({ length: m }, () => new Array(n).fill(0));

    // First row and first column = 1
    for (let i = 0; i < m; i++) dp[i][0] = 1;
    for (let j = 0; j < n; j++) dp[0][j] = 1;

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(m * n)
| - Har cell ek baar compute hota hai
| - Nested loops: m rows * n columns
|
| Space Complexity:
| - Optimized: O(n) - sirf ek row ka DP array
| - 2D version: O(m * n) - puri grid store karte hain
|--------------------------------------------------------------------------
*/

// ===================== TEST CASES =====================

console.log("=== Unique Paths ===");
console.log("");

// Test Case 1: Standard case
console.log("Test 1: m = 3, n = 7");
console.log("Expected: 28");
console.log("Output (1D DP):", uniquePaths(3, 7));
console.log("Output (2D DP):", uniquePaths2D(3, 7));
console.log("");

// Test Case 2: Small grid
console.log("Test 2: m = 3, n = 2");
console.log("Expected: 3");
console.log("Output (1D DP):", uniquePaths(3, 2));
console.log("Output (2D DP):", uniquePaths2D(3, 2));
console.log("");

// Test Case 3: Square grid
console.log("Test 3: m = 3, n = 3");
console.log("Expected: 6");
console.log("Output (1D DP):", uniquePaths(3, 3));
console.log("Output (2D DP):", uniquePaths2D(3, 3));
console.log("");

// Test Case 4: Single row
console.log("Test 4: m = 1, n = 5");
console.log("Expected: 1");
console.log("Output (1D DP):", uniquePaths(1, 5));
console.log("Output (2D DP):", uniquePaths2D(1, 5));

module.exports = { uniquePaths, uniquePaths2D };
