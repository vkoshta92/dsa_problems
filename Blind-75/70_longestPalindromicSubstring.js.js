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
