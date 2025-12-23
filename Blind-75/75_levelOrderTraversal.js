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
