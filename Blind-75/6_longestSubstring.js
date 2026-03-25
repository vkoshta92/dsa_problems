/**
 * ============================================================================
 * PROBLEM: Longest Substring Without Repeating Characters
 * ============================================================================
 * Given a string s, find the length of the longest substring without 
 * repeating characters.
 * 
 * ============================================================================
 * APPROACH: Sliding Window with Hash Set
 * ============================================================================
 * Logic:
 * 1. Use two pointers (left, right) to create a sliding window
 * 2. Use a Set to track characters in current window
 * 3. Expand window by moving right pointer
 * 4. If duplicate found, shrink window from left until duplicate removed
 * 5. Track maximum window size throughout
 * 
 * Sliding Window Intuition:
 * - Window represents current valid substring (no duplicates)
 * - When duplicate appears, we must remove all characters from left
 *   until the duplicate character is removed
 * - This maintains the "no duplicate" property
 * 
 * Example: "abcabcbb"
 * - Window expands: a → ab → abc
 * - Duplicate 'a' found: shrink to bca
 * - Duplicate 'b' found: shrink to cab
 * - Max length = 3 ("abc")
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Each character is added to set once and removed once
 * - Total operations: 2n → O(n)
 * 
 * SPACE COMPLEXITY: O(min(m, n))
 * - m = size of character set (e.g., 26 for lowercase, 128 for ASCII)
 * - n = string length
 * - Set can hold at most min(m, n) characters
 * ============================================================================
 */

function lengthOfLongestSubstring(s) {
  // Set to keep unique characters in current window
  let set = new Set();

  // Left pointer of sliding window
  let left = 0;

  // Store maximum length found
  let maxLen = 0;

  // Right pointer moves through string
  for (let right = 0; right < s.length; right++) {

    // If duplicate character appears
    while (set.has(s[right])) {
      // Remove left character from set
      set.delete(s[left]);
      left++; // shrink window from left
    }

    // Add current character
    set.add(s[right]);

    // Update max length
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// Test
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
