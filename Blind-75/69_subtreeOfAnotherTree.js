/**
 * ============================================================================
 * PROBLEM: Subtree of Another Tree
 * ============================================================================
 * Given two binary trees root and subRoot, check if subRoot is a subtree
 * of root. A subtree must have same structure and node values.
 * 
 * ============================================================================
 * APPROACH: Recursive Check
 * ============================================================================
 * Logic:
 * 1. For each node in root, check if tree from that node matches subRoot
 * 2. isSame function checks if two trees are identical
 * 3. If not match at current node, try left and right subtrees
 * 
 * Why This Works:
 * - A subtree must match exactly from some node in main tree
 * - We check every node as potential starting point
 * - isSame verifies complete structural and value match
 * 
 * Example:
 * Root:      3          SubRoot:   4
 *           / \                   / \
 *          4   5                 1   2
 *         / \
 *        1   2
 * 
 * - At node 3: isSame fails (different structure)
 * - At node 4: isSame succeeds! Return true
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(m * n)
 * - m = nodes in root, n = nodes in subRoot
 * - Worst case: check isSame at every node in root
 * 
 * SPACE COMPLEXITY: O(h)
 * - h = height of root (recursion stack)
 * ============================================================================
 */

function isSubtree(root, subRoot) {
  // If main tree is empty, cannot have subtree
  if (!root) return false;

  // If trees are same from this node
  if (isSame(root, subRoot)) return true;

  // Otherwise check left and right subtree
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSame(a, b) {
  // Both null → same
  if (!a && !b) return true;

  // One null or value mismatch
  if (!a || !b || a.val !== b.val) return false;

  // Check left and right
  return isSame(a.left, b.left) && isSame(a.right, b.right);
}
