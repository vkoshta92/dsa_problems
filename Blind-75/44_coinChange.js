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
