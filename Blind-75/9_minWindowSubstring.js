/**
 * ============================================================================
 * PROBLEM: Minimum Window Substring
 * ============================================================================
 * Given two strings s and t, return the minimum window substring of s such 
 * that every character in t (including duplicates) is included in the window.
 * If there is no such substring, return the empty string "".
 * 
 * ============================================================================
 * APPROACH: Sliding Window with Character Count
 * ============================================================================
 * Logic:
 * 1. Create frequency map for characters in t (what we need)
 * 2. Use two pointers for sliding window
 * 3. Expand window by moving right pointer until all chars found
 * 4. When all chars found, try to shrink from left (minimize window)
 * 5. Track minimum window throughout
 * 
 * Key Variables:
 * - count: number of characters still needed (0 = all found)
 * - map: tracks required characters (positive = needed, negative = extra)
 * 
 * Why map values can be negative:
 * - When we add a char that's in t, we decrement map[char]
 * - If we have more of that char than needed, map[char] becomes negative
 * - This helps us know if we can shrink the window
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n + m)
 * - n = length of string s
 * - m = length of string t
 * - Each character in s is visited at most twice (once by each pointer)
 * 
 * SPACE COMPLEXITY: O(k)
 * - k = number of unique characters in t
 * - Map stores at most k entries
 * ============================================================================
 */

function minWindow(s, t) {
  if (!s || !t) return "";

  // Frequency map for characters in t
  const map = {};
  for (let char of t) {
    map[char] = (map[char] || 0) + 1;
  }

  let left = 0;
  let count = t.length; // total chars needed
  let minLen = Infinity;
  let start = 0;

  for (let right = 0; right < s.length; right++) {
    // If character is needed, decrease count
    if (map[s[right]] > 0) count--;
    map[s[right]]--;

    // When all characters matched
    while (count === 0) {
      // Update minimum window
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        start = left;
      }

      // Shrink window from left
      map[s[left]]++;
      if (map[s[left]] > 0) count++;
      left++;
    }
  }

  return minLen === Infinity ? "" : s.slice(start, start + minLen);
}

// Test
console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
