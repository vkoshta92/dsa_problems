/**
 * ============================================================================
 * PROBLEM: Longest Palindromic Substring
 * ============================================================================
 * Given a string s, return the longest palindromic substring.
 * 
 * ============================================================================
 * APPROACH: Expand Around Center
 * ============================================================================
 * Logic:
 * 1. A palindrome mirrors around its center
 * 2. For each position, expand outward while characters match
 * 3. Handle both odd and even length palindromes
 * 
 * Two Types of Centers:
 * - Odd length: center is a single character (e.g., "aba")
 * - Even length: center is between two characters (e.g., "abba")
 * 
 * Why This Works:
 * - Every palindrome has a center (or two for even length)
 * - By trying all possible centers, we find all palindromes
 * - We keep track of the longest one found
 * 
 * Example: "babad"
 * - Center 0 ('b'): expand → "b" (len 1)
 * - Center 0-1 ('b','a'): no match
 * - Center 1 ('a'): expand → "bab" (len 3) ← found!
 * - Center 1-2 ('a','b'): no match
 * - Center 2 ('b'): expand → "bab" or "aba" (len 3)
 * - Continue for all centers...
 * - Result: "bab" or "aba"
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n²)
 * - n centers to try
 * - Each expansion can go up to O(n)
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only tracking start and length
 * ============================================================================
 */

function longestPalindrome(s) {
  // Edge case: empty string
  if (s.length < 2) return s;

  let start = 0;
  let maxLen = 1;

  // Helper function to expand from center
  function expand(left, right) {
    // Expand while valid palindrome
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      // Update longest palindrome found
      if (right - left + 1 > maxLen) {
        start = left;
        maxLen = right - left + 1;
      }
      left--;
      right++;
    }
  }

  // Try each index as center
  for (let i = 0; i < s.length; i++) {
    expand(i, i);       // Odd length palindrome
    expand(i, i + 1);   // Even length palindrome
  }

  // Return longest substring
  return s.substring(start, start + maxLen);
}

// Test
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // "bb"
