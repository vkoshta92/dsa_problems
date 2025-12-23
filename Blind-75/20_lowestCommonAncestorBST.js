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
