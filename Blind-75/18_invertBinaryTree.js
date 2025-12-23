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
