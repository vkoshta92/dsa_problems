/**
 * ============================================================================
 * PROBLEM: Maximum Depth of Binary Tree
 * ============================================================================
 * Given the root of a binary tree, return its maximum depth.
 * Maximum depth is the number of nodes along the longest path from root
 * to the farthest leaf node.
 * 
 * ============================================================================
 * APPROACH: Recursive DFS
 * ============================================================================
 * Logic:
 * 1. Base case: If node is null, depth is 0
 * 2. Recursive case: Depth = 1 + max(left subtree depth, right subtree depth)
 * 3. The +1 accounts for the current node
 * 
 * Why This Works:
 * - Tree depth is inherently recursive
 * - Depth of tree = depth of deeper subtree + 1 (for root)
 * - We propagate depths upward from leaves to root
 * 
 * Example:
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * - Depth of leaf 9 = 1
 * - Depth of leaf 15 = 1, Depth of leaf 7 = 1
 * - Depth of node 20 = 1 + max(1, 1) = 2
 * - Depth of root 3 = 1 + max(1, 2) = 3
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Visit each node exactly once
 * - n = number of nodes in tree
 * 
 * SPACE COMPLEXITY: O(h)
 * - h = height of tree (recursion stack)
 * - Best case (balanced): O(log n)
 * - Worst case (skewed): O(n)
 * ============================================================================
 */

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
