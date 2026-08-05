/* Invert Binary Tree | Easy
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Hinglish: Har node ke left/right children swap karo, recursively dono
 * subtrees invert karo. Null node base case hai.
 */
function invertTree(root) {
  if (root == null) return null;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}

console.log(invertTree({ value: 1, left: { value: 2 }, right: { value: 3 } }).left.value); // 3
// Time: O(n), Space: O(h) recursion stack.
module.exports = { invertTree };
