/**
 * ============================================================================
 * PROBLEM: Binary Tree Level Order Traversal
 * ============================================================================
 * Given binary tree root, return level order traversal (left to right,
 * level by level).
 * 
 * ============================================================================
 * APPROACH: BFS with Queue
 * ============================================================================
 * Logic:
 * 1. Use queue for BFS traversal
 * 2. Process one level at a time
 * 3. Track number of nodes at each level
 * 4. Add children to queue for next level
 * 
 * BFS Process:
 * - Get current queue size (nodes in current level)
 * - Process all those nodes
 * - Add their children to queue
 * - Repeat until queue empty
 * 
 * Why Track Level Size:
 * - Queue contains nodes from current AND next level
 * - Need to know where current level ends
 * - Capture size before processing level
 * 
 * Example:
 *        3
 *       / \
 *      9  20
 *         / \
 *        15  7
 * 
 * - Level 0: queue = [3], size = 1, result = [[3]]
 * - Level 1: queue = [9, 20], size = 2, result = [[3], [9, 20]]
 * - Level 2: queue = [15, 7], size = 2, result = [[3], [9, 20], [15, 7]]
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Visit each node exactly once
 * 
 * SPACE COMPLEXITY: O(n)
 * - Queue can have at most n/2 nodes (last level of complete tree)
 * ============================================================================
 */

// Definition for a binary tree node
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function levelOrder(root) {
  // Result array which will store level-wise nodes
  const result = [];

  // Edge case: empty tree
  if (root === null) return result;

  // Queue for BFS (level order traversal)
  const queue = [];
  queue.push(root);

  // Run BFS
  while (queue.length > 0) {
    // Number of nodes in current level
    const size = queue.length;

    // Store current level values
    const level = [];

    // Process all nodes of current level
    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      // Add node value to current level
      level.push(node.val);

      // Add left child if exists
      if (node.left !== null) {
        queue.push(node.left);
      }

      // Add right child if exists
      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    // Push current level to result
    result.push(level);
  }

  return result;
}

/* ----------- Console Test ----------- */

// Tree:
//        3
//       / \
//      9  20
//         / \
//        15  7

const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(levelOrder(root));
// Output: [[3], [9, 20], [15, 7]]
