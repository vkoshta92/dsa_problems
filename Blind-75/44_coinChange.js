/**
 * ============================================================================
 * PROBLEM: Coin Change
 * ============================================================================
 * Given coins of different denominations and a total amount, find the
 * minimum number of coins to make that amount. Return -1 if impossible.
 * 
 * ============================================================================
 * APPROACH: Dynamic Programming (Bottom-Up)
 * ============================================================================
 * Logic:
 * 1. dp[i] = minimum coins needed to make amount i
 * 2. dp[0] = 0 (zero coins for zero amount)
 * 3. For each amount from 1 to target:
 *    - Try each coin
 *    - dp[i] = min(dp[i], dp[i - coin] + 1)
 * 4. dp[amount] gives answer (or -1 if still Infinity)
 * 
 * Recurrence Relation:
 * dp[i] = min(dp[i - coin] + 1) for all valid coins
 * 
 * Why +1?
 * - dp[i - coin] = coins needed for remaining amount
 * - +1 for the current coin we're using
 * 
 * Example: coins = [1, 2, 5], amount = 11
 * - dp[0] = 0
 * - dp[1] = min(dp[0]+1) = 1 (use coin 1)
 * - dp[2] = min(dp[1]+1, dp[0]+1) = min(2, 1) = 1 (use coin 2)
 * - dp[5] = 1 (use coin 5)
 * - dp[10] = min(dp[5]+1, dp[8]+1, dp[9]+1) = 2 (use coin 5 twice)
 * - dp[11] = min(dp[6]+1, dp[9]+1, dp[10]+1) = 3 (5+5+1)
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(amount * n)
 * - amount = target amount
 * - n = number of coins
 * - Nested loops: amount × coins
 * 
 * SPACE COMPLEXITY: O(amount)
 * - DP array of size amount + 1
 * ============================================================================
 */

function coinChange(coins, amount) {
  // dp[i] = minimum coins needed for amount i
  const dp = new Array(amount + 1).fill(Infinity);

  // Base case
  dp[0] = 0;

  // Build DP table
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  // If unreachable, return -1
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Test
console.log(coinChange([1,2,5], 11)); // 3
