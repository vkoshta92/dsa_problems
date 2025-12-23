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
