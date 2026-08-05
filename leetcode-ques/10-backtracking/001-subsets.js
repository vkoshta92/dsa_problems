/* Problem: Subsets | Difficulty: Medium
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Return every subset of an array containing unique values.
 * Hinglish: Har index par do choices hain: number lo ya skip karo. Choose,
 * recursive explore, undo pattern backtracking ka basic template hai.
 */
function subsets(nums) {
  const answer = [];
  const current = [];

  function explore(index) {
    if (index === nums.length) {
      answer.push(current.slice());
      return;
    }
    current.push(nums[index]);
    explore(index + 1);
    current.pop();
    explore(index + 1);
  }

  explore(0);
  return answer;
}

console.log(subsets([1, 2])); // [[1, 2], [1], [2], []]
// Time: O(n * 2^n) including copying subsets, Space: O(n) recursion/current.

module.exports = { subsets };
