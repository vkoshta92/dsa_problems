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
