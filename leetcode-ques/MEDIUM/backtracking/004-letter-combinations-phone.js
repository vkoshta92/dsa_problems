/* Problem: Letter Combinations of a Phone Number | Difficulty: Medium
 * Companies: Amazon, Google, Microsoft, Facebook, Apple, Uber
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent. Return the answer
 * in any order.
 *
 * Mapping of digit to letters (like telephone):
 *   2 -> abc, 3 -> def, 4 -> ghi, 5 -> jkl
 *   6 -> mno, 7 -> pqrs, 8 -> tuv, 9 -> wxyz
 *
 * Note: Digit '1' does not map to any letters.
 *
 * Example 1:
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 * Example 2:
 * Input: digits = ""
 * Output: []
 *
 * Example 3:
 * Input: digits = "2"
 * Output: ["a","b","c"]
 *
 * Example 4:
 * Input: digits = "79"
 * Output: ["pw","px","py","pz","qw","qx","qy","qz","rw","rx","ry","rz","sw","sx","sy","sz"]
 *
 * Hinglish Detailed Logic:
 * ------------------------
 * Bhai, yeh backtracking + recursion ki classic problem hai. Humare paas
 * phone ke digits hain aur hume unke corresponding letter combinations
 * banani hain.
 *
 * Key insight: Har digit ke liye 3 ya 4 letters hain. Har digit ke liye
 * ek ek letter choose karna hai aur sabke combinations banana hai.
 *
 * Algorithm:
 * 1. Ek mapping banao jo digit ko uske letters se map kare.
 * 2. Ek recursive function banao jo:
 *    a. Agar current index digits.length ke barabar hai toh combination
 *       complete hai - result mein daal do.
 *    b. Nahi toh, current digit ke har letter ke liye:
 *       - Us letter ko current combination mein add karo.
 *       - Next digit ke liye recurse karo (index + 1).
 * 3. String directly concatenate karte hain (array ki zaroorat nahi)
 *    kyunki strings immutable hain aur automatically backtrack ho jaati hain.
 *
 * Dry run: digits = "23"
 * - index=0, digit='2', letters="abc"
 *   - path="a", index=1, digit='3', letters="def"
 *     - path="ad", index=2 -> FOUND "ad"
 *     - path="ae", index=2 -> FOUND "ae"
 *     - path="af", index=2 -> FOUND "af"
 *   - path="b", index=1, digit='3', letters="def"
 *     - path="bd" -> FOUND, "be" -> FOUND, "bf" -> FOUND
 *   - path="c", index=1, digit='3', letters="def"
 *     - path="cd" -> FOUND, "ce" -> FOUND, "cf" -> FOUND
 * Answer: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 * Optimization: Agar digits empty hai toh seedha empty array return karo.
 */

function letterCombinations(digits) {
  if (!digits.length) return [];

  // Digit to letters mapping (jaise phone keypad par hota hai)
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];

  function backtrack(index, path) {
    // Base case: agar saare digits process ho gaye toh combination save karo
    if (index === digits.length) {
      result.push(path);
      return;
    }

    // Current digit ke saare letters try karo
    const letters = map[digits[index]];
    for (const ch of letters) {
      // Letter ko path mein add karo aur next digit ke liye recurse karo
      // String hai toh + se concatenate karte hain (auto backtrack hota hai)
      backtrack(index + 1, path + ch);
    }
  }

  backtrack(0, "");
  return result;
}

// ============ Test Cases ============

// Test 1: Standard case - "23"
// Expected: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log("Test 1:", JSON.stringify(letterCombinations("23")));
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Test 2: Empty string
// Expected: []
console.log("Test 2:", JSON.stringify(letterCombinations("")));
// Output: []

// Test 3: Single digit - "2"
// Expected: ["a","b","c"]
console.log("Test 3:", JSON.stringify(letterCombinations("2")));
// Output: ["a","b","c"]

// Test 4: Digit 7 (has 4 letters) - "7"
// Expected: ["p","q","r","s"]
console.log("Test 4:", JSON.stringify(letterCombinations("7")));
// Output: ["p","q","r","s"]

// Test 5: Two digits with 4 letters each - "79"
// Expected: 16 combinations (4 * 4)
console.log("Test 5:", JSON.stringify(letterCombinations("79")));
// Output: ["pw","px","py","pz","qw","qx","qy","qz","rw","rx","ry","rz","sw","sx","sy","sz"]

// Test 6: Three digits - "234"
// Expected: 27 combinations (3 * 3 * 3)
const result6 = letterCombinations("234");
console.log("Test 6 count:", result6.length);
// Output: 27

/*
 * Time Complexity: O(4^n * n)
 *   where n = length of digits string
 *   - 4^n because maximum 4 letters per digit (digit 7 and 9 have 4 letters)
 *   - n because we build strings of length n
 *   - Total combinations = product of letters per digit
 *
 * Space Complexity: O(n)
 *   - Recursion depth = n (digits string length)
 *   - Output space not counted in space complexity
 */

module.exports = { letterCombinations };
