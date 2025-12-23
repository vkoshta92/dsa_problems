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
