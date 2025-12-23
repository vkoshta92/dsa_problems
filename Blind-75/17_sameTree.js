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
