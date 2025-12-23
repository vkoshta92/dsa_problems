// // Definition for a binary tree node.
// function TreeNode(val, left = null, right = null) {
//   this.val = val;
//   this.left = left;
//   this.right = right;
// }


function maxDepth(root) {
  // Base case: empty tree
  if (root === null) return 0;

  // Recursively find depth of left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Current depth = 1 (root) + max of left/right
  return 1 + Math.max(leftDepth, rightDepth);
}
