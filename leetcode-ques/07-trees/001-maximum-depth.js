/* Problem: Maximum Depth of Binary Tree | Difficulty: Easy
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Hinglish: Node ki depth = 1 + left/right subtree ki maximum depth.
 * Null tree ki depth 0 hai, isi base case se recursion stop hota hai.
 */
function maxDepth(root) {
  if (root == null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

console.log(maxDepth({ value: 1, left: { value: 2, left: null, right: null }, right: null })); // 2
// Time: O(n), Space: O(h) recursion stack, h = tree height.

module.exports = { maxDepth };
