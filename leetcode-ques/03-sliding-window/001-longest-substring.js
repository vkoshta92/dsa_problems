/* Problem: Longest Substring Without Repeating Characters | Medium
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Return the length of the longest substring with unique characters.
 * Hinglish: Window [left..right] maintain karo. Duplicate aaye to duplicate
 * ke baad left jump karo; map har character ka latest index rakhta hai.
 */
function lengthOfLongestSubstring(text) {
  const lastIndex = new Map();
  let left = 0;
  let answer = 0;

  for (let right = 0; right < text.length; right += 1) {
    const previous = lastIndex.get(text[right]);
    if (previous !== undefined && previous >= left) left = previous + 1;
    lastIndex.set(text[right], right);
    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("pwwkew")); // 3
// Time: O(n), Space: O(min(n, alphabet size))

module.exports = { lengthOfLongestSubstring };
