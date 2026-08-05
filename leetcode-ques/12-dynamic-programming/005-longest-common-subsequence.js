/*
 * ==========================================
 * Problem: Longest Common Subsequence
 * Difficulty: Medium
 * Companies: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * LeetCode: #1143
 * ==========================================
 *
 * Problem Statement:
 * Given two strings text1 and text2, return the length of their longest
 * common subsequence. If there is no common subsequence, return 0.
 *
 * A subsequence of a string is a new string generated from the original
 * string with some characters (can be none) deleted without changing the
 * relative order of the remaining characters.
 *
 * Example 1:
 * Input: text1 = "abcde", text2 = "ace"
 * Output: 3
 * Explanation: The longest common subsequence is "ace" and its length is 3.
 *
 * Example 2:
 * Input: text1 = "abc", text2 = "abc"
 * Output: 3
 * Explanation: The longest common subsequence is "abc" and its length is 3.
 *
 * Example 3:
 * Input: text1 = "abc", text2 = "def"
 * Output: 0
 * Explanation: There is no common subsequence, so the result is 0.
 *
 * Note: Subsequence ke elements consecutive nahi hone chahiye,
 *       but order maintain hona chahiye dono strings mein.
 */

/*
 * ==========================================
 * Hinglish Logic Explanation (Detailed)
 * ==========================================
 *
 * Bhai, yeh 2D Dynamic Programming ki classic problem hai.
 * Humein do strings ki longest common subsequence (LCS) nikalni hai.
 *
 * Concept:
 *   - Agar dono strings ke current characters match karte hain,
 *     toh unhe LCS mein include karo aur dono strings ke pehle characters hatao.
 *   - Agar match nahi karte, toh do options hain:
 *       1. Pehli string ka current character hatao
 *       2. Doosri string ka current character hatao
 *     Aur dono mein se jo maximum length de, woh le lo.
 *
 * Approach: 2D DP (Tabulation)
 *
 * Step 1: Ek 2D dp array banao of size (m+1) x (n+1)
 *         jahan m = text1.length aur n = text2.length
 *         dp[i][j] ka matlab hai: "text1 ke pehle i characters aur
 *         text2 ke pehle j characters ki LCS length kya hai?"
 *
 * Step 2: Base cases:
 *   - dp[0][j] = 0 for all j (text1 empty hai toh LCS 0)
 *   - dp[i][0] = 0 for all i (text2 empty hai toh LCS 0)
 *
 * Step 3: Har cell ke liye (i=1 to m, j=1 to n):
 *   - Agar text1[i-1] === text2[j-1] (characters match):
 *       dp[i][j] = 1 + dp[i-1][j-1]
 *       (Match mila! 1 add karo aur dono strings ke pehle characters hatao)
 *   - Agar match nahi:
 *       dp[i][j] = max(dp[i-1][j], dp[i][j-1])
 *       (Do options: ya toh text1 ka character hatao, ya text2 ka)
 *
 * Step 4: Answer dp[m][n] mein hai.
 *
 * Example walkthrough: text1 = "abcde", text2 = "ace"
 *   dp[3][3] tak compute karo:
 *   - 'a' == 'a' -> dp[1][1] = 1 + dp[0][0] = 1
 *   - 'b' != 'c' -> dp[2][1] = max(dp[1][1], dp[2][0]) = 1
 *   - 'b' == 'c'? No. 'c' == 'c'? Yes -> dp[2][2] = 1 + dp[1][1] = 2
 *   - ... continue...
 *   - dp[5][3] = 3 ("ace" LCS)
 *
 * Key Insight: Characters match karein toh diagonal se 1+ lelo,
 *              nahi match karein toh upar ya baad mein se max lelo.
 */

function longestCommonSubsequence(text1, text2) {
  const m = text1.length;
  const n = text2.length;

  // Step 1: 2D DP array banana - (m+1) x (n+1) size ka
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  // Step 2: Base cases already 0 hain (fill(0) se)

  // Step 3: Har cell compute karo
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      if (text1[i - 1] === text2[j - 1]) {
        // Characters match! 1 + diagonal value
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // Match nahi: max(upar, baad)
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Step 4: Answer last cell mein hai
  return dp[m][n];
}

/*
 * ==========================================
 * Time & Space Complexity Analysis
 * ==========================================
 *
 * Time Complexity: O(m * n)
 *   - 2D array fill karna hai (m+1) x (n+1) cells
 *   - Har cell O(1) computation
 *   - Total: O(m * n)
 *
 * Space Complexity: O(m * n)
 *   - 2D DP array of size (m+1) x (n+1)
 *   - Total: O(m * n)
 *   - Note: Space optimize ho sakta hai O(min(m,n)) tak
 *           using only 2 rows at a time
 */

// ==========================================
// Test Cases with Expected Output
// ==========================================

// Test Case 1: Partially matching strings
// Expected: 3 (LCS is "ace")
console.log(longestCommonSubsequence("abcde", "ace")); // 3

// Test Case 2: Identical strings
// Expected: 3 (LCS is "abc" - entire string)
console.log(longestCommonSubsequence("abc", "abc")); // 3

// Test Case 3: No common characters
// Expected: 0 (no common subsequence)
console.log(longestCommonSubsequence("abc", "def")); // 0

// Test Case 4: One character matching
// Expected: 1 (only "a" is common)
console.log(longestCommonSubsequence("a", "a")); // 1

// Test Case 5: One string empty
// Expected: 0 (empty string has no subsequence)
console.log(longestCommonSubsequence("", "abc")); // 0

module.exports = { longestCommonSubsequence };
