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
