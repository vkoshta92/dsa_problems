/*
 * ==========================================
 * Problem: Edit Distance
 * Difficulty: Hard
 * Companies: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * LeetCode: #72
 * ==========================================
 *
 * Problem Statement:
 * Given two strings word1 and word2, return the minimum number of operations
 * required to convert word1 to word2.
 *
 * You have the following three operations permitted on a word:
 *   1. Insert a character
 *   2. Delete a character
 *   3. Replace a character
 *
 * Example 1:
 * Input: word1 = "horse", word2 = "ros"
 * Output: 3
 * Explanation:
 *   horse -> rorse (replace 'h' with 'r')
 *   rorse -> rose (remove 'r')
 *   rose -> ros (remove 'e')
 *
 * Example 2:
 * Input: word1 = "intention", word2 = "execution"
 * Output: 5
 * Explanation:
 *   intention -> inention (remove 't')
 *   inention -> enention (replace 'i' with 'e')
 *   enention -> exention (replace 'n' with 'x')
 *   exention -> exection (replace 'n' with 'c')
 *   exection -> execution (insert 'u')
 *
 * Note: Hum minimum operations chahiye, har operation ka cost 1 hai.
 */

/*
 * ==========================================
 * Hinglish Logic Explanation (Detailed)
 * ==========================================
 *
 * Bhai, yeh classic 2D DP problem hai jise "Levenshtein Distance" bhi kehte hain.
 * Humein ek string ko doosri string mein convert karna hai minimum operations se.
 *
 * Operations:
 *   1. Insert: Ek character daalo (cost 1)
 *   2. Delete: Ek character hatao (cost 1)
 *   3. Replace: Ek character doosre se badlo (cost 1)
 *
 * Approach: 2D DP (Tabulation)
 *
 * Step 1: Ek 2D dp array banao of size (m+1) x (n+1)
 *         jahan m = word1.length, n = word2.length
 *         dp[i][j] ka matlab hai:
 *         "word1 ke pehle i characters ko word2 ke pehle j characters
 *          mein convert karne mein kitne minimum operations lagenge?"
 *
 * Step 2: Base cases:
 *   - dp[i][0] = i  (word1 ke i characters ko empty mein convert karna
 *                     = i deletions)
 *   - dp[0][j] = j  (empty string ko word2 ke j characters mein convert
 *                     = j insertions)
 *
 * Step 3: Har cell (i, j) ke liye:
 *   - Agar word1[i-1] === word2[j-1] (characters match):
 *       dp[i][j] = dp[i-1][j-1]
 *       (Match hai toh koi operation nahi chahiye, diagonal se value lelo)
 *
 *   - Agar match nahi:
 *       dp[i][j] = 1 + min(
 *         dp[i-1][j],     // Delete: word1 ka character hatao
 *         dp[i][j-1],     // Insert: word2 ka character daalo
 *         dp[i-1][j-1]    // Replace: character badlo
 *       )
 *
 * Step 4: Answer dp[m][n] mein hai.
 *
 * Example walkthrough: word1 = "horse", word2 = "ros"
 *   Base cases:
 *     dp[0][0]=0, dp[1][0]=1, dp[2][0]=2, dp[3][0]=3, dp[4][0]=4, dp[5][0]=5
 *     dp[0][1]=1, dp[0][2]=2, dp[0][3]=3
 *
 *   dp[1][1]: 'h' != 'r' -> 1 + min(dp[0][1], dp[1][0], dp[0][0]) = 1+0 = 1
 *   dp[2][1]: 'o' != 'r' -> 1 + min(dp[1][1], dp[2][0], dp[1][0]) = 1+1 = 2
 *   ...
 *   dp[5][3] = 3
 *
 * Key Insight: Match ho toh free (diagonal), nahi ho toh min(3 options) + 1
 */

function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // Step 1: 2D DP array banana
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  // Step 2: Base cases
  // word1 ke i characters ko empty string mein: i deletions
  for (let i = 0; i <= m; i += 1) dp[i][0] = i;

  // Empty string ko word2 ke j characters mein: j insertions
  for (let j = 0; j <= n; j += 1) dp[0][j] = j;

  // Step 3: Har cell compute karo
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      if (word1[i - 1] === word2[j - 1]) {
        // Characters match! Koi operation nahi, diagonal se value lelo
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // Match nahi: min of 3 operations + 1
        const deleteOp = dp[i - 1][j];     // Delete from word1
        const insertOp = dp[i][j - 1];     // Insert into word1
        const replaceOp = dp[i - 1][j - 1]; // Replace in word1
        dp[i][j] = 1 + Math.min(deleteOp, insertOp, replaceOp);
      }
    }
  }

  // Step 4: Answer
  return dp[m][n];
}

/*
 * ==========================================
 * Time & Space Complexity Analysis
 * ==========================================
 *
 * Time Complexity: O(m * n)
 *   - 2D array (m+1) x (n+1) fill karna hai
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

// Test Case 1: "horse" to "ros"
// Expected: 3 (replace h->r, remove r, remove e)
console.log(minDistance("horse", "ros")); // 3

// Test Case 2: "intention" to "execution"
// Expected: 5 (5 operations needed)
console.log(minDistance("intention", "execution")); // 5

// Test Case 3: Identical strings
// Expected: 0 (no operations needed)
console.log(minDistance("abc", "abc")); // 0

// Test Case 4: One empty string
// Expected: 3 (all characters of "abc" need to be deleted)
console.log(minDistance("abc", "")); // 3

// Test Case 5: Completely different strings
// Expected: 3 (replace all 3 characters)
console.log(minDistance("abc", "xyz")); // 3

module.exports = { minDistance };
