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
