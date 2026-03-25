/**
 * ============================================================================
 * PROBLEM: Unique Paths
 * ============================================================================
 * A robot is at top-left corner of m x n grid. It can only move right or
 * down. Find number of unique paths to bottom-right corner.
 * 
 * ============================================================================
 * APPROACH: Dynamic Programming (Space Optimized)
 * ============================================================================
 * Logic:
 * 1. dp[j] = number of ways to reach cell in current row at column j
 * 2. To reach cell (i, j): come from top OR come from left
 * 3. dp[j] = dp[j] (from top) + dp[j-1] (from left)
 * 
 * Recurrence:
 * - From top: dp[j] already has this value from previous row
 * - From left: dp[j-1] has ways from current row
 * - Combined: dp[j] = dp[j] + dp[j-1]
 * 
 * Base Case:
 * - First row: only 1 way (all right moves)
 * - First column: only 1 way (all down moves)
 * - Initialize dp array with 1s
 * 
 * Example: m = 3, n = 7
 * - Initial dp = [1, 1, 1, 1, 1, 1, 1]
 * - Row 2: dp = [1, 2, 3, 4, 5, 6, 7]
 * - Row 3: dp = [1, 3, 6, 10, 15, 21, 28]
 * - Result: 28
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(m * n)
 * - Iterate through all m x n cells
 * 
 * SPACE COMPLEXITY: O(n)
 * - Only storing one row of size n
 * ============================================================================
 */

function uniquePaths(m, n) {
  // dp[j] = number of ways to reach current cell in row
  const dp = new Array(n).fill(1);
  // First row always has only 1 path

  // Start from second row
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // Current cell = from top (dp[j]) + from left (dp[j-1])
      dp[j] = dp[j] + dp[j - 1];
    }
  }

  return dp[n - 1];
}

// Test
console.log(uniquePaths(3, 7)); // 28
