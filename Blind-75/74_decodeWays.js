function numDecodings(s) {
  if (s[0] === "0") return 0;

  // dp[i] = number of ways to decode till index i
  const dp = new Array(s.length + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= s.length; i++) {
    // Single digit decode
    if (s[i - 1] !== "0") {
      dp[i] += dp[i - 1];
    }

    // Two digit decode
    const twoDigit = Number(s.slice(i - 2, i));
    if (twoDigit >= 10 && twoDigit <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[s.length];
}

// Test
console.log(numDecodings("226")); // 3
