/**
 * ============================================================================
 * PROBLEM: Decode Ways
 * ============================================================================
 * Given encoded message where 'A'=1, 'B'=2, ..., 'Z'=26, count number
 * of ways to decode it.
 * 
 * ============================================================================
 * APPROACH: Dynamic Programming
 * ============================================================================
 * Logic:
 * 1. dp[i] = number of ways to decode substring s[0...i-1]
 * 2. For each position, consider:
 *    - Single digit decode (s[i-1] != '0')
 *    - Two digit decode (10 <= s[i-2...i-1] <= 26)
 * 
 * Recurrence:
 * - Single digit: if s[i-1] != '0', dp[i] += dp[i-1]
 * - Two digit: if 10 <= twoDigit <= 26, dp[i] += dp[i-2]
 * 
 * Edge Cases:
 * - '0' cannot be decoded alone
 * - '0' can only be decoded as part of '10' or '20'
 * 
 * Example: s = "226"
 * - dp[0] = 1 (empty string)
 * - dp[1] = 1 ("2" → "B")
 * - dp[2]: "2" valid → dp[2] += dp[1] = 1
 *         "22" valid → dp[2] += dp[0] = 1 → dp[2] = 2
 * - dp[3]: "6" valid → dp[3] += dp[2] = 2
 *         "26" valid → dp[3] += dp[1] = 1 → dp[3] = 3
 * - Result: 3 ways ("BZF", "VF", "BBF")
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass through string
 * 
 * SPACE COMPLEXITY: O(n)
 * - DP array of size n+1
 * ============================================================================
 */

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
