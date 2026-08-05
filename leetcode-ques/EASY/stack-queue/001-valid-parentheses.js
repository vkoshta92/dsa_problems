/* Problem: Valid Parentheses | Difficulty: Easy
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Every opening bracket must close in reverse order with the same type.
 * Hinglish: Opening brackets stack me push. Closing bracket ke liye stack ka
 * top matching hona chahiye; nahi to invalid.
 */
function isValidParentheses(text) {
  const expectedClosers = { "(": ")", "[": "]", "{": "}" };
  const stack = [];

  for (const character of text) {
    if (expectedClosers[character]) stack.push(expectedClosers[character]);
    else if (stack.pop() !== character) return false;
  }
  return stack.length === 0;
}

console.log(isValidParentheses("([])")); // true
console.log(isValidParentheses("([)]")); // false
// Time: O(n), Space: O(n)

module.exports = { isValidParentheses };
