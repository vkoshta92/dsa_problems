/*
 * Minimum Window Substring
 * Difficulty: Hard
 * Companies: Meta, Amazon, Google, Microsoft, Apple, Uber
 *
 * Problem Statement:
 * Given two strings `s` and `t` of lengths `m` and `n` respectively, return
 * the minimum window substring of `s` such that every character in `t`
 * (including duplicates) is included in the window. If there is no such
 * substring, return the empty string `""`.
 *
 * Example 1:
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C'
 *              from string t.
 *
 * Example 2:
 * Input: s = "a", t = "a"
 * Output: "a"
 * Explanation: The entire string "a" is the minimum window.
 *
 * Example 3:
 * Input: s = "a", t = "aa"
 * Output: ""
 * Explanation: t has two 'a's but s only has one, so no valid window exists.
 */

/*
 * ==================== HINGLISH LOGIC EXPLANATION ====================
 *
 * Ye VARIABLE SIZE SLIDING WINDOW ki sabse important problem hai. Step by step:
 *
 * 1. Pehle `t` ki frequency map banao - kitne kitne characters kitni baar chahiye.
 * 2. `formed` variable track karta hai ki kitne distinct characters ki required
 *    frequency achieve ho chuki hai. `needed` = t mein kitne distinct characters hain.
 * 3. RIGHT POINTER expand karo: har character ko window mein daalo, uski frequency
 *    badhao. Agar kisi character ki frequency exactly required barabar ho gayi
 *    to `formed` badhao.
 * 4. Jab `formed === needed` ho jaye matlab sab required characters cover ho gaye:
 *    - Ab LEFT POINTER se shrink karo minimum window dhundhte hue.
 *    - Har valid window mein answer update karo (agar chhota hai to).
 *    - Left character hatao - agar uski frequency required se kam ho gayi to
 *      `formed` ghatao aur loop band karo.
 * 5. Finally, minimum window substring return karo.
 *
 * DRY RUN: s = "ADOBECODEBANC", t = "ABC"
 * - t ki frequency: {A:1, B:1, C:1}, needed = 3
 * - Expand right: A(formed=1) D O B(formed=2) E C(formed=3)
 * - formed=3 === needed=3 => shrink from left
 * - "ADOBEC" len=6, min=6. Shrink => "DOBEC" - C missing, formed=2
 * - Continue expanding... eventually find "BANC" len=4
 * - Answer: "BANC"
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  // Edge case: t bada hai s se to koi window possible nahi
  if (t.length > s.length) return "";

  // Step 1: t ki frequency map banao
  const required = new Map();
  for (const c of t) {
    required.set(c, (required.get(c) || 0) + 1);
  }

  // Step 2: Track kitne distinct characters required hain aur kitne formed ho gaye
  const needed = required.size; // Kitne distinct chars chahiye
  let formed = 0; // Kitne distinct chars ki required freq achieve ho chuki

  // Step 3: Window ki frequency map
  const windowCounts = new Map();

  let left = 0;
  let answer = [-1, -1]; // Minimum window ke start aur end indices
  let answerLength = Infinity; // Minimum window ki length

  // Step 4: Right pointer expand karo
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

    // Agar ye character required hai aur uski frequency required barabar ho gayi
    if (required.has(char) && windowCounts.get(char) === required.get(char)) {
      formed += 1;
    }

    // Step 5: Jab sab required characters cover ho jaayein, shrink karo
    while (formed === needed) {
      // Agar current window chhoti hai, answer update karo
      if (right - left + 1 < answerLength) {
        answerLength = right - left + 1;
        answer = [left, right];
      }

      // Left character hato
      const leftChar = s[left];
      windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);

      // Agar left character required tha aur ab uski frequency kam ho gayi
      if (required.has(leftChar) && windowCounts.get(leftChar) < required.get(leftChar)) {
        formed -= 1;
      }

      left += 1;
    }
  }

  // Step 6: Answer return karo
  return answerLength === Infinity ? "" : s.slice(answer[0], answer[1] + 1);
}

/*
 * ==================== TIME & SPACE COMPLEXITY ====================
 *
 * Time Complexity: O(n + m)
 *   - n = s.length, m = t.length
 *   - t ki frequency map banane mein: O(m)
 *   - Right pointer s mein ek baarpoora traverse karta hai: O(n)
 *   - Left pointer total at most n baar move hota hai (amortized): O(n)
 *   - Har character ki processing O(1) hai (Map operations)
 *   - Total: O(n + m)
 *
 * Space Complexity: O(n + m)
 *   - required map mein at most m entries hain (t ke unique characters)
 *   - windowCounts mein at most n entries ho sakti hain (s ke unique characters)
 *   - Total: O(n + m)
 */

// ==================== TEST CASES ====================

// Test 1: Standard case
console.log(minWindow("ADOBECODEBANC", "ABC"));
// Expected: "BANC"
// Explanation: "BANC" mein A, B, C sab hain aur ye shortest possible window hai

// Test 2: Exact match
console.log(minWindow("a", "a"));
// Expected: "a"
// Explanation: Poori string hi minimum window hai

// Test 3: t bada hai s se (impossible)
console.log(minWindow("a", "aa"));
// Expected: ""
// Explanation: t mein 2 'a' chahiye par s mein sirf 1 hai

// Test 4: Window at the start
console.log(minWindow("aa", "aa"));
// Expected: "aa"
// Explanation: Poori string hi minimum window hai, dono 'a' cover ho jaate hain

module.exports = { minWindow };
