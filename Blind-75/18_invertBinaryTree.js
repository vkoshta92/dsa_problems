/**
 * ============================================================================
 * PROBLEM: Invert Binary Tree
 * ============================================================================
 * Given the root of a binary tree, invert the tree (mirror it).
 * After inversion, left subtree becomes right and vice versa.
 * 
 * ============================================================================
 * APPROACH: Recursive DFS with Swap
 * ============================================================================
 * Logic:
 * 1. Base case: If node is null, return null
 * 2. Swap left and right children of current node
 * 3. Recursively invert left subtree (which was originally right)
 * 4. Recursively invert right subtree (which was originally left)
 * 
 * Why Post-order vs Pre-order:
 * - We swap first, then recurse (pre-order approach)
 * - Or we could recurse first, then swap (post-order approach)
 * - Both work because swap and recursion are independent operations
 * 
 * Example:
 *     1              1
 *    / \    →      / \
 *   2   3         3   2
 *  / \               / \
 * 4   5             5   4
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Visit each node exactly once
 * - n = number of nodes
 * 
 * SPACE COMPLEXITY: O(h)
 * - h = height of tree (recursion stack)
 * - Best case (balanced): O(log n)
 * - Worst case (skewed): O(n)
 * ============================================================================
 */

function invertTree(root) {
  // Base case
  if (root === null) return null;

  // Swap left and right children
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Recursively invert subtrees
  invertTree(root.left);
  invertTree(root.right);

  return root;
}
