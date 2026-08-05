/* Problem: Valid Palindrome | Difficulty: Easy
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Ignore non-alphanumeric characters and case. Decide whether the string reads
 * the same from both ends.
 * Hinglish: Left aur right se compare karo. Invalid characters ko skip karo;
 * mismatch milte hi false, warna pointers cross hone tak true.
 */
function isPalindrome(value) {
  const text = value.toLowerCase();
  let left = 0;
  let right = text.length - 1;
  const isAlphaNumeric = (character) => /[a-z0-9]/.test(character);

  while (left < right) {
    while (left < right && !isAlphaNumeric(text[left])) left += 1;
    while (left < right && !isAlphaNumeric(text[right])) right -= 1;
    if (text[left] !== text[right]) return false;
    left += 1;
    right -= 1;
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
// Time: O(n), Space: O(n) because lowercase() creates a string.

module.exports = { isPalindrome };
