/* Problem: Palindrome Partitioning | Difficulty: Medium
 * Companies: Amazon, Google, Microsoft, Meta, Apple
 *
 * Given a string s, partition s such that every substring of the partition
 * is a palindrome. Return all possible palindrome partitioning of s.
 *
 * A palindrome string is a string that reads the same backward as forward.
 *
 * Example 1:
 * Input: s = "aab"
 * Output: [["a","a","b"],["aa","b"]]
 * Explanation: The first partition ["a","a","b"] has all palindromic substrings.
 *              The second partition ["aa","b"] also has all palindromic substrings.
 *
 * Example 2:
 * Input: s = "a"
 * Output: [["a"]]
 *
 * Example 3:
 * Input: s = "aba"
 * Output: [["a","b","a"],["aba"]]
 *
 * Hinglish Detailed Logic:
 * ------------------------
 * Bhai, yeh string partitioning + palindrome check + backtracking ki
 * combination hai. Humein string ko aise todna hai ki har tukda palindrome ho.
 *
 * Key insight: Har starting position se saari possible substrings try karo.
 * Agar substring palindrome hai toh use path mein add karo aur uske baad
 * ke remaining string pe recursively wohi karo. Jab end of string tak
 * pahunch jayein (aur sab substrings palindrome hon) toh path ka copy
 * answer mein daal do.
 *
 * Algorithm:
 * 1. Ek helper function banao jo string ka prefix check kare palindrome hai ya nahi.
 * 2. Backtracking function:
 *    a. Base case: agar start position string ke end par hai toh path copy
 *       karke answer mein push karo.
 *    b. Har possible end position ke liye (start se string end tak):
 *       - Substring nikalo (start se end+1 tak).
 *       - Check karo yeh palindrome hai ya nahi.
 *       - Agar palindrome hai toh:
 *         i.  Path mein substring add karo.
 *         ii. Recurse with start = end + 1 (next partition ke liye).
 *         iii. Backtrack: path se substring hatao.
 *
 * Dry run: s = "aab"
 * - start=0, try end=0: sub="a" -> palindrome! -> path=["a"]
 *   - start=1, try end=1: sub="a" -> palindrome! -> path=["a","a"]
 *     - start=2, try end=2: sub="b" -> palindrome! -> path=["a","a","b"]
 *       - start=3 == length -> FOUND ["a","a","b"]
 *   - backtrack, try end=2: sub="ab" -> NOT palindrome
 * - backtrack, try end=1: sub="aa" -> palindrome! -> path=["aa"]
 *   - start=2, try end=2: sub="b" -> palindrome! -> path=["aa","b"]
 *     - start=3 == length -> FOUND ["aa","b"]
 * - backtrack, try end=2: sub="aab" -> NOT palindrome
 * Answer: [["a","a","b"],["aa","b"]]
 */

function partition(s) {
  const result = [];

  function backtrack(start, path) {
    // Base case: poora string partition ho gaya - save this partition
    if (start === s.length) {
      result.push(path.slice()); // path ka copy save karo
      return;
    }

    // Har possible ending position try karo
    for (let end = start; end < s.length; end += 1) {
      // Current substring nikalo
      const sub = s.slice(start, end + 1);

      // Check karo substring palindrome hai ya nahi
      // Reverse karke compare karte hain
      if (sub === sub.split("").reverse().join("")) {
        // Palindrome hai! Path mein add karo
        path.push(sub);

        // Next starting position ke liye recurse karo
        backtrack(end + 1, path);

        // Backtrack: path se last substring hatao
        path.pop();
      }
      // Agar palindrome nahi hai toh simply skip karo (continue loop)
    }
  }

  backtrack(0, []);
  return result;
}

// ============ Test Cases ============

// Test 1: Basic case - "aab"
// Expected: [["a","a","b"],["aa","b"]]
console.log("Test 1:", JSON.stringify(partition("aab")));
// Output: [["a","a","b"],["aa","b"]]

// Test 2: Single character - "a"
// Expected: [["a"]]
console.log("Test 2:", JSON.stringify(partition("a")));
// Output: [["a"]]

// Test 3: All palindromic characters - "aaa"
// Expected: [["a","a","a"],["a","aa"],["aa","a"],["aaa"]]
console.log("Test 3:", JSON.stringify(partition("aaa")));
// Output: [["a","a","a"],["a","aa"],["aa","a"],["aaa"]]

// Test 4: No single character palindrome except itself - "abc"
// Expected: [["a","b","c"]]
console.log("Test 4:", JSON.stringify(partition("abc")));
// Output: [["a","b","c"]]

// Test 5: Palindrome string - "aba"
// Expected: [["a","b","a"],["aba"]]
console.log("Test 5:", JSON.stringify(partition("aba")));
// Output: [["a","b","a"],["aba"]]

// Test 6: Longer string - "abba"
// Expected: [["a","b","b","a"],["a","bb","a"],["abba"]]
console.log("Test 6:", JSON.stringify(partition("abba")));
// Output: [["a","b","b","a"],["a","bb","a"],["abba"]]

/*
 * Time Complexity: O(N * 2^N)
 *   where N = length of string
 *   - 2^N because at each position we have 2 choices (partition or not)
 *   - N for palindrome check of each substring
 *   - Worst case: all characters same (every substring is palindrome)
 *
 * Space Complexity: O(N)
 *   - Recursion depth = N
 *   - Path array can hold at most N single characters
 */

module.exports = { partition };
