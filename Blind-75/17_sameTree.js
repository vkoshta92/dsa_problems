/**
 * ============================================================================
 * PROBLEM: Same Tree
 * ============================================================================
 * Given the roots of two binary trees p and q, check if they are identical.
 * Two trees are identical if they have the same structure and same values.
 * 
 * ============================================================================
 * APPROACH: Recursive DFS
 * ============================================================================
 * Logic:
 * 1. Base case: Both nodes null → trees are same up to this point
 * 2. If one null but not other → different trees
 * 3. If values differ → different trees
 * 4. Recursively check left and right subtrees
 * 
 * Decision Tree:
 * - Both null → return true (reached leaf in both)
 * - One null → return false (structure mismatch)
 * - Values differ → return false (value mismatch)
 * - Otherwise → check children
 * 
 * Example:
 * Tree 1:    1      Tree 2:    1
 *           / \               / \
 *          2   3             2   3
 * - Compare root: both 1 ✓
 * - Compare left: both 2 ✓
 * - Compare right: both 3 ✓
 * - Result: Same tree
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Visit each node once
 * - n = min(nodes in p, nodes in q)
 * 
 * SPACE COMPLEXITY: O(h)
 * - h = height of smaller tree (recursion stack)
 * - Best case: O(log n)
 * - Worst case: O(n)
 * ============================================================================
 */

function isSameTree(p, q) {
  // If both nodes are null, trees are same till here
  if (p === null && q === null) return true;

  // If one is null or values differ, trees not same
  if (p === null || q === null || p.val !== q.val) return false;

  // Check left and right subtrees
  return (
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
}
