/**
 * ============================================================================
 * PROBLEM: Validate Binary Search Tree
 * ============================================================================
 * Given the root of a binary tree, determine if it is a valid BST.
 * A valid BST has the property:
 * - Left subtree contains only values less than node's value
 * - Right subtree contains only values greater than node's value
 * - Both subtrees must also be valid BSTs
 * 
 * ============================================================================
 * APPROACH: Recursive with Range Validation
 * ============================================================================
 * Logic:
 * 1. Each node must be within a valid range (min, max)
 * 2. For root, range is (-∞, +∞)
 * 3. When going left: new max = parent's value (all values < parent)
 * 4. When going right: new min = parent's value (all values > parent)
 * 5. If any node violates its range, tree is invalid
 * 
 * Key Insight:
 * - It's not enough to check immediate children
 * - All nodes in left subtree must be < root
 * - All nodes in right subtree must be > root
 * - Range narrows as we go deeper
 * 
 * Example (INVALID):
 *     5
 *    / \
 *   4   6
 *      / \
 *     3   7  ← 3 is in right subtree but < 5, invalid!
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Visit each node exactly once
 * 
 * SPACE COMPLEXITY: O(h)
 * - h = height of tree (recursion stack)
 * - Best case: O(log n)
 * - Worst case: O(n)
 * ============================================================================
 */

function isValidBST(root) {
  // Helper function with range limits
  function helper(node, min, max) {
    // Empty subtree is valid
    if (node === null) return true;

    // Current node must lie within valid range
    if (node.val <= min || node.val >= max) return false;

    // Left subtree: max bound = node.val
    // Right subtree: min bound = node.val
    return (
      helper(node.left, min, node.val) &&
      helper(node.right, node.val, max)
    );
  }

  // Initial range is (-∞, +∞)
  return helper(root, -Infinity, Infinity);
}
