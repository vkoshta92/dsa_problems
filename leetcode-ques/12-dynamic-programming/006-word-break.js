/*
 * ==========================================
 * Problem: Word Break
 * Difficulty: Medium
 * Companies: Amazon, Google, Meta, Microsoft, Apple, Bloomberg
 * LeetCode: #139
 * ==========================================
 *
 * Problem Statement:
 * Given a string s and a dictionary of strings wordDict, return true if s
 * can be segmented into a space-separated sequence of one or more dictionary
 * words.
 *
 * Note that the same word in the dictionary may be reused multiple times
 * in the segmentation.
 *
 * Example 1:
 * Input: s = "leetcode", wordDict = ["leet", "code"]
 * Output: true
 * Explanation: Return true because "leetcode" can be segmented as "leet code".
 *
 * Example 2:
 * Input: s = "applepenapple", wordDict = ["apple", "pen"]
 * Output: true
 * Explanation: Return true because "applepenapple" can be segmented as
 *              "apple pen apple".
 *
 * Example 3:
 * Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * Output: false
 *
 * Note: Dictionary ke words baar baar use kar sakte hain.
 */

/*
 * ==========================================
 * Hinglish Logic Explanation (Detailed)
 * ==========================================
 *
 * Bhai, yeh DP ki problem hai jismein hume check karna hai ki
 * string ko dictionary words mein break kar sakte hain ya nahi.
 *
 * Approach: DP with String Slicing
 *
 * Concept:
 *   - dp[i] ka matlab hai: "string ka pehla i characters (s[0..i-1])
 *     dictionary words se break ho sakta hai ya nahi?"
 *   - Agar kahin bhi aisa split mil jaye ki:
 *       1. dp[j] = true hai (pehle j characters break ho sakte hain)
 *       2. Aur s[j..i-1] wordDict mein hai (baaki ka substring dictionary mein hai)
 *     Toh dp[i] = true ho jayega.
 *
 * Step 1: Ek Set banao wordDict se O(1) lookup ke liye.
 *
 * Step 2: Ek dp array banao of size (s.length + 1).
 *         dp[0] = true (empty string hamesha break ho sakta hai - base case)
 *         Baaki sab ko false initialize karo.
 *
 * Step 3: Har position i ke liye (1 se s.length tak):
 *   - Har possible split point j try karo (0 se i-1 tak):
 *       - Agar dp[j] = true hai (pehle j chars break ho sakte hain)
 *         AUR s.slice(j, i) wordDict mein hai
 *       - Toh dp[i] = true aur break karo (aur split dhundne ki zaroorat nahi)
 *
 * Step 4: Return dp[s.length] - poori string break ho sakti hai ya nahi.
 *
 * Example walkthrough: s = "leetcode", wordDict = ["leet", "code"]
 *   dp[0] = true
 *   i=1: j=0 -> dp[0]=true, s[0..0]="l" in dict? No
 *   i=2: j=0 -> dp[0]=true, s[0..1]="le" in dict? No
 *   ...
 *   i=4: j=0 -> dp[0]=true, s[0..3]="leet" in dict? Yes! dp[4]=true
 *   i=5: j=0..4 -> koi valid split nahi
 *   ...
 *   i=8: j=4 -> dp[4]=true, s[4..7]="code" in dict? Yes! dp[8]=true
 *   Return true
 *
 * Key Insight: Har position par saare possible splits check karte hain.
 * Agar koi split valid hai toh dp[i] true ho jata hai.
 */

function wordBreak(s, wordDict) {
  // Set banao fast lookup ke liye
  const wordSet = new Set(wordDict);

  // dp array: dp[i] = true if s[0..i-1] break ho sakta hai
  const dp = new Array(s.length + 1).fill(false);

  // Base case: empty string hamesha break ho sakta hai
  dp[0] = true;

  // Har position ke liye (1 se s.length tak)
  for (let i = 1; i <= s.length; i += 1) {
    // Har possible split point try karo
    for (let j = 0; j < i; j += 1) {
      // Agar pehle j characters break ho sakte hain
      // AUR s[j..i-1] dictionary mein hai
      if (dp[j] && wordSet.has(s.slice(j, i))) {
        dp[i] = true;
        break; // Ek valid split mil gaya, aur check karne ki zaroorat nahi
      }
    }
  }

  // Poori string break ho sakti hai ya nahi
  return dp[s.length];
}

/*
 * ==========================================
 * Time & Space Complexity Analysis
 * ==========================================
 *
 * Time Complexity: O(n^2 * k)
 *   - Outer loop: O(n) iterations (n = s.length)
 *   - Inner loop: O(n) iterations
 *   - s.slice() + Set.has(): O(k) where k = max word length
 *   - Total: O(n^2 * k)
 *
 * Space Complexity: O(n + m)
 *   - dp array: O(n)
 *   - wordSet: O(m) where m = total characters in wordDict
 *   - Total: O(n + m)
 */

// ==========================================
// Test Cases with Expected Output
// ==========================================

// Test Case 1: Simple valid segmentation
// Expected: true ("leet" + "code")
console.log(wordBreak("leetcode", ["leet", "code"])); // true

// Test Case 2: Word reuse allowed
// Expected: true ("apple" + "pen" + "apple")
console.log(wordBreak("applepenapple", ["apple", "pen"])); // true

// Test Case 3: No valid segmentation
// Expected: false (cannot break "catsandog" properly)
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false

// Test Case 4: Single word matches entire string
// Expected: true ("a" matches)
console.log(wordBreak("a", ["a"])); // true

// Test Case 5: Multiple valid splits
// Expected: true ("cars" can be split multiple ways)
console.log(wordBreak("cars", ["car", "ca", "rs"])); // true

module.exports = { wordBreak };
