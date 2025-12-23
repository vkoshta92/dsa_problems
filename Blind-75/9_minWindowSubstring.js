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
