/**
 * ============================================================================
 * PROBLEM: Counting Bits
 * ============================================================================
 * Given an integer n, return an array ans where ans[i] is the number of 1's
 * in the binary representation of i (for all 0 <= i <= n).
 * 
 * ============================================================================
 * APPROACH: Dynamic Programming with Bit Manipulation
 * ============================================================================
 * Logic:
 * 1. dp[i] = number of 1s in binary of i
 * 2. Key insight: i >> 1 is i with last bit removed
 * 3. dp[i] = dp[i >> 1] + (i & 1)
 *    - dp[i >> 1]: count of 1s in i without last bit
 *    - (i & 1): last bit (0 or 1)
 * 
 * Why This Works:
 * - Every number i can be written as: i = 2 * (i >> 1) + (i & 1)
 * - The number of 1s in i equals:
 *   - Number of 1s in i >> 1 (same bits shifted right)
 *   - Plus the last bit (which is 0 or 1)
 * 
 * Example for n = 5:
 * - dp[0] = 0 (binary: 0)
 * - dp[1] = dp[0] + 1 = 1 (binary: 1)
 * - dp[2] = dp[1] + 0 = 1 (binary: 10)
 * - dp[3] = dp[1] + 1 = 2 (binary: 11)
 * - dp[4] = dp[2] + 0 = 1 (binary: 100)
 * - dp[5] = dp[2] + 1 = 2 (binary: 101)
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass through 0 to n
 * 
 * SPACE COMPLEXITY: O(n)
 * - DP array of size n + 1
 * ============================================================================
 */

function countBits(n) {
  // dp[i] = number of 1s in binary of i
  const dp = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    // i & 1 checks last bit
    // i >> 1 shifts right
    dp[i] = dp[i >> 1] + (i & 1);
  }

  return dp;
}

// Test
console.log(countBits(5)); // [0,1,1,2,1,2]
