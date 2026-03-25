/**
 * ============================================================================
 * PROBLEM: Lowest Common Ancestor of a Binary Search Tree
 * ============================================================================
 * Given a BST and two nodes p and q, find the lowest common ancestor (LCA).
 * LCA is the lowest node that has both p and q as descendants.
 * A node can be a descendant of itself.
 * 
 * ============================================================================
 * APPROACH: Iterative BST Property
 * ============================================================================
 * Logic:
 * 1. Use BST property: left < root < right
 * 2. If both p and q are smaller than root → LCA is in left subtree
 * 3. If both p and q are greater than root → LCA is in right subtree
 * 4. Otherwise (one on each side, or one equals root) → root is LCA
 * 
 * Why This Works:
 * - LCA is where paths to p and q diverge
 * - In BST, we can determine direction by comparing values
 * - The first node where p and q are on different sides is the LCA
 * 
 * Example:
 *       6
 *      / \
 *     2   8
 *    / \
 *   0   4
 * - p = 0, q = 4: Both < 6 → go left → both > 2 → LCA = 2
 * - p = 2, q = 8: 2 < 6 < 8 → LCA = 6 (different sides)
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(h)
 * - h = height of tree
 * - We traverse from root to LCA
 * - Best case: O(log n) for balanced BST
 * - Worst case: O(n) for skewed tree
 * 
 * SPACE COMPLEXITY: O(1)
 * - Iterative approach uses constant space
 * - No recursion stack
 * ============================================================================
 */

function lowestCommonAncestor(root, p, q) {
  // Traverse the BST
  while (root !== null) {
    // If both nodes are smaller, go left
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    }
    // If both nodes are greater, go right
    else if (p.val > root.val && q.val > root.val) {
      root = root.right;
    }
    // Otherwise, current node is LCA
    else {
      return root;
    }
  }
}
