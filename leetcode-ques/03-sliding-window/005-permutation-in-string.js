/*
 * Permutation in String
 * Difficulty: Medium
 * Companies: Microsoft, Amazon, Facebook, Google
 *
 * Problem Statement:
 * Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation
 * of `s1`, or `false` otherwise. A permutation of `s1` is a rearrangement of
 * its characters (same characters, same frequency, possibly different order).
 * In other words, `s2` contains a substring that is a permutation of `s1`.
 *
 * Example 1:
 * Input: s1 = "ab", s2 = "eidbaooo"
 * Output: true
 * Explanation: s2 contains "ba" which is a permutation of "ab".
 *
 * Example 2:
 * Input: s1 = "ab", s2 = "eidboaoo"
 * Output: false
 * Explanation: s2 does not contain any substring that is a permutation of "ab".
 */

/*
 * ==================== HINGLISH LOGIC EXPLANATION ====================
 *
 * Ye FIXED SIZE SLIDING WINDOW + FREQUENCY COMPARISON ki problem hai. Dekho:
 *
 * 1. Agar s1 ki length > s2 ki length hai to permutation possible hi nahi hai.
 * 2. Do frequency arrays banao - `target` (s1 ke liye) aur `window` (s2 ke
 *    pehle s1.length characters ke liye).
 * 3. Agar dono arrays same hain to permutation mil gaya - return true.
 * 4. Ab window ko slide karo s2 pe (size = s1.length):
 *    - Har step mein ek naya character add karo (right se).
 *    - Aur ek purana character remove karo (left se).
 *    - Dono frequency arrays compare karo - agar same hain to return true.
 * 5. Agar poori string traverse karne pe match nahi mila to return false.
 *
 * KEY INSIGHT: Permutation mein characters same hone chahiye aur unki frequency
 * same honi chahiye. Order matter nahi karta. Isliye frequency array compare
 * karna sufficient hai.
 *
 * DRY RUN: s1 = "ab", s2 = "eidbaooo"
 * - target = [a:1, b:1], window = [e:1, i:1] => NO match
 * - Slide: window = [i:1, d:1] => NO match
 * - Slide: window = [d:1, b:1] => NO match
 * - Slide: window = [b:1, a:1] => YES match! Return true
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  // Edge case: s1 bada hai to permutation possible nahi
  if (s1.length > s2.length) return false;

  // Dono strings ki frequency arrays banao (26 lowercase letters)
  const target = new Array(26).fill(0);
  const window = new Array(26).fill(0);

  // Pehle s1.length characters ki frequency count karo
  for (let i = 0; i < s1.length; i++) {
    target[s1.charCodeAt(i) - 97] += 1; // 'a' = 97
    window[s2.charCodeAt(i) - 97] += 1;
  }

  // Agar pehla window match karta hai to return true
  if (target.join(",") === window.join(",")) return true;

  // Ab window ko slide karo baaki s2 pe
  for (let i = s1.length; i < s2.length; i++) {
    // Naya character add karo (right side)
    window[s2.charCodeAt(i) - 97] += 1;
    // Purana character remove karo (left side)
    window[s2.charCodeAt(i - s1.length) - 97] -= 1;

    // Check karo agar frequency arrays match karte hain
    if (target.join(",") === window.join(",")) return true;
  }

  return false;
}

/*
 * ==================== TIME & SPACE COMPLEXITY ====================
 *
 * Time Complexity: O(26 * n) = O(n)
 *   - Pehle s1.length characters ka frequency count: O(m) jahan m = s1.length
 *   - Sliding window loop: O(n - m) jahan n = s2.length
 *   - Har step mein array comparison: O(26) = O(1)
 *   - Total: O(n)
 *
 * Space Complexity: O(1)
 *   - Sirf 2 fixed size (26) arrays hain
 *   - Koi dynamic data structure nahi ban raha
 */

// ==================== TEST CASES ====================

// Test 1: Permutation exists in the middle
console.log(checkInclusion("ab", "eidbaooo"));
// Expected: true
// Explanation: "ba" substring hai jo "ab" ka permutation hai

// Test 2: No permutation exists
console.log(checkInclusion("ab", "eidboaoo"));
// Expected: false
// Explanation: koi bhi substring "ab" ka permutation nahi hai

// Test 3: s1 equals s2 (same string is a permutation of itself)
console.log(checkInclusion("abc", "bac"));
// Expected: true
// Explanation: "bac" is a permutation of "abc"

// Test 4: s1 length greater than s2 (impossible)
console.log(checkInclusion("abc", "ab"));
// Expected: false
// Explanation: s1 bada hai s2 se, permutation possible nahi

module.exports = { checkInclusion };
