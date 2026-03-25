/**
 * ============================================================================
 * PROBLEM: Climbing Stairs
 * ============================================================================
 * You are climbing a staircase with n steps. You can climb 1 or 2 steps
 * at a time. How many distinct ways can you climb to the top?
 * 
 * ============================================================================
 * APPROACH: Dynamic Programming (Fibonacci Pattern)
 * ============================================================================
 * Logic:
 * 1. To reach step n, you can come from:
 *    - Step n-1 (taking 1 step)
 *    - Step n-2 (taking 2 steps)
 * 2. ways(n) = ways(n-1) + ways(n-2)
 * 3. This is the Fibonacci sequence!
 * 
 * Base Cases:
 * - ways(1) = 1 (only one way: 1 step)
 * - ways(2) = 2 (two ways: 1+1 or 2)
 * 
 * Recurrence:
 * ways(n) = ways(n-1) + ways(n-2)
 * 
 * Example: n = 5
 * - ways(1) = 1
 * - ways(2) = 2
 * - ways(3) = 1 + 2 = 3
 * - ways(4) = 2 + 3 = 5
 * - ways(5) = 3 + 5 = 8
 * 
 * Space Optimization:
 * - Only need previous two values
 * - No need to store entire DP array
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single loop from 3 to n
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only storing two previous values
 * ============================================================================
 */

// 🔥 BATCH 9 – DYNAMIC PROGRAMMING

function climbStairs(n) {
  // If only 1 or 2 steps, ways = n
  if (n <= 2) return n;

  // dp[i] = number of ways to reach step i
  let prev2 = 1; // ways to reach step 1
  let prev1 = 2; // ways to reach step 2

  // Build solution bottom-up
  for (let i = 3; i <= n; i++) {
    let curr = prev1 + prev2; // ways from i-1 and i-2
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
}

// Test
console.log(climbStairs(5)); // 8
