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
