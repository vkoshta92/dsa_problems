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
