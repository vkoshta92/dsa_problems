/*
 * Longest Repeating Character Replacement
 * Difficulty: Medium
 * Companies: Google, Amazon, Facebook, Microsoft
 *
 * Problem Statement:
 * You are given a string `s` consisting of only uppercase English letters and
 * an integer `k`. You can choose at most `k` characters from the string and
 * replace them with any other uppercase English letter.
 * Return the length of the longest substring containing the same letter
 * after performing at most `k` replacements.
 *
 * Example 1:
 * Input: s = "AABABBA", k = 1
 * Output: 4
 * Explanation: Replace the one 'A' in the middle with 'B' to get "AABBBBA".
 *              The longest substring with all same letters is "BBBB" (length 4).
 *
 * Example 2:
 * Input: s = "ABAB", k = 2
 * Output: 4
 * Explanation: Replace both non-'A' characters with 'A' to get "AAAA".
 *              The entire string becomes the same letter.
 */

/*
 * ==================== HINGLISH LOGIC EXPLANATION ====================
 *
 * Ye problem VARIABLE SIZE SLIDING WINDOW ki hai. Thoda tricky hai, samjho:
 *
 * 1. Hame ek window chahiye jisme maximum character ek jaisa ho, baaki `k`
 *    replacements se badal sakte hain.
 * 2. KEY FORMULA: Agar window size minus (window mein sabse frequent character
 *    ki frequency) > k hai, to matlab replacements kam pad rahe hain - window
 *    chhoti karo (left pointer aage badhao).
 * 3. Ek `maxFrequency` track karte hain - ye kabhi decrease nahi hota. Kyunki
 *    hume LONGEST substring chahiye, agar kisi step pe frequency kam ho bhi
 *    jaaye to bhi pehle ka max frequency valid hai (kyunki usme se `k`
 *    replacements kar sakte hain).
 * 4. Har right pointer pe: character ka frequency badhao, maxFrequency update
 *    karo, check karo ki window valid hai ya nahi, phir answer update karo.
 *
 * DRY RUN: s = "AABABBA", k = 1
 * - right=0: 'A', freq={A:1}, maxF=1, window=1, valid ✓, answer=1
 * - right=1: 'A', freq={A:2}, maxF=2, window=2, valid ✓, answer=2
 * - right=2: 'B', freq={A:2,B:1}, maxF=2, window=3, 3-2=1≤k ✓, answer=3
 * - right=3: 'A', freq={A:3,B:1}, maxF=3, window=4, 4-3=1≤k ✓, answer=4
 * - right=4: 'B', freq={A:3,B:2}, maxF=3, window=5, 5-3=2>k ✗, shrink
 *   - left++ => freq={A:2,B:2}, window=4, 4-2=2>k ✗, shrink
 *   - left++ => freq={A:1,B:2}, maxF=3, window=3, 3-3=0≤k ✓
 * - right=5: 'B', freq={A:1,B:3}, maxF=3, window=4, 4-3=1≤k ✓, answer=4
 * - right=6: 'A', freq={A:2,B:3}, maxF=3, window=5, 5-3=2>k ✗, shrink
 *
 * Answer: 4
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
  // Frequency array for 26 uppercase letters (A-Z)
  const freq = new Array(26).fill(0);
  let left = 0;
  let maxFrequency = 0; // Window mein sabse zyada baar aane wala character
  let answer = 0;

  for (let right = 0; right < s.length; right++) {
    // Right character ki frequency badhao
    const idx = s.charCodeAt(right) - 65; // 'A' = 65
    freq[idx] += 1;

    // Max frequency update karo (ye kabhi decrease nahi hota intentionally)
    maxFrequency = Math.max(maxFrequency, freq[idx]);

    // Check karo: agar replacements needed > k hai to window chhoti karo
    while ((right - left + 1) - maxFrequency > k) {
      // Left character ki frequency ghatao
      freq[s.charCodeAt(left) - 65] -= 1;
      left += 1;
    }

    // Answer update karo
    answer = Math.max(answer, right - left + 1);
  }

  return answer;
}

/*
 * ==================== TIME & SPACE COMPLEXITY ====================
 *
 * Time Complexity: O(n)
 *   - Right pointer n baar move hota hai => O(n)
 *   - Left pointer total at most n baar move hota hai (amortized) => O(n)
 *   - Har character ki processing O(1) hai
 *
 * Space Complexity: O(1)
 *   - Sirf 26 size ka fixed frequency array hai
 *   - Koi extra data structure nahi ban raha based on input size
 */

// ==================== TEST CASES ====================

// Test 1: Standard case with k=1
console.log(characterReplacement("AABABBA", 1));
// Expected: 4
// Explanation: "AABB" ya "BBBB" - ek replacement se 4 same letters mil sakte hain

// Test 2: Full string possible with k=2
console.log(characterReplacement("ABAB", 2));
// Expected: 4
// Explanation: Dono 'B' ko 'A' mein badal do => "AAAA" (poora string)

// Test 3: Single character string
console.log(characterReplacement("A", 0));
// Expected: 1
// Explanation: Ek character hai, k=0 pe bhi valid hai

// Test 4: k=0 means no replacement allowed
console.log(characterReplacement("ABAB", 0));
// Expected: 1
// Explanation: Bina replacement ke sirf 1 character ka substring same ho sakta hai

module.exports = { characterReplacement };
