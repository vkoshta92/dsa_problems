/**
 * ============================================================================
 * PROBLEM: Longest Repeating Character Replacement
 * ============================================================================
 * You are given a string s and an integer k. You can choose any character of 
 * the string and change it to any other uppercase English character at most k 
 * times. Return the length of the longest substring containing the same 
 * letter after performing the above operations.
 * 
 * ============================================================================
 * APPROACH: Sliding Window with Frequency Map
 * ============================================================================
 * Logic:
 * 1. Use sliding window to represent substring
 * 2. Track frequency of each character in window
 * 3. For a valid window:
 *    - Window length - max frequency <= k
 *    - (non-max chars can be replaced within k operations)
 * 4. If window becomes invalid, shrink from left
 * 
 * Key Insight:
 * - We want max window where (window_size - max_freq) <= k
 * - max_freq = count of most frequent character in window
 * - Other characters (window_size - max_freq) need to be replaced
 * 
 * Example: s = "AABABBA", k = 1
 * - Window "AABAB" → size=5, max_freq(A)=3, need 2 replacements → invalid
 * - Window "ABABB" → size=5, max_freq(B)=3, need 2 replacements → invalid
 * - Window "ABBA" → size=4, max_freq(B)=3, need 1 replacement → valid
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass with sliding window
 * - Each character enters and exits window once
 * 
 * SPACE COMPLEXITY: O(1)
 * - Frequency map has at most 26 entries (uppercase letters)
 * ============================================================================
 */

function characterReplacement(s, k) {
  // Frequency map of characters
  const freq = {};

  let left = 0;
  let maxFreq = 0; // max repeating char count in window
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    // Increase frequency of current character
    freq[s[right]] = (freq[s[right]] || 0) + 1;

    // Track maximum frequency in window
    maxFreq = Math.max(maxFreq, freq[s[right]]);

    // If replacements needed exceed k, shrink window
    while ((right - left + 1) - maxFreq > k) {
      freq[s[left]]--;
      left++;
    }

    // Update maximum window length
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// Test
console.log(characterReplacement("AABABBA", 1)); // 4
