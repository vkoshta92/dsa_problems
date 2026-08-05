# Trees - Basics

## Tree Kya Hai?
Hierarchical data structure. Ek root node hai aur har node ke children hain.
Binary tree mein har node ke max 2 children hote hain.

```javascript
// Node definition
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

//      1
//     / \
//    2   3
//   / \
//  4   5
const root = new TreeNode(1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);
```

## Important Terms

| Term | Meaning |
|---|---|
| Root | Topmost node (1) |
| Leaf | Node with no children (4, 5, 3) |
| Height | Longest path from node to leaf |
| Depth | Distance from root to node |
| Balanced | Left and right heights differ by at most 1 |
| BST | Left < Root < Right (for all nodes) |

## Tree Traversals

### DFS (Depth First Search) - Stack/Recursion

```javascript
// Inorder: Left -> Root -> Right (BST mein sorted order)
function inorder(root) {
  if (!root) return;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}

// Preorder: Root -> Left -> Right (tree copy/print mein useful)
function preorder(root) {
  if (!root) return;
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}

// Postorder: Left -> Right -> Root (delete mein useful)
function postorder(root) {
  if (!root) return;
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
}
```

### BFS (Breadth First Search) - Queue

```javascript
function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const level = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}
```

## Binary Search Tree (BST)

```javascript
// Property: left.val < root.val < right.val
// Search: O(log n) average
function searchBST(root, val) {
  if (!root || root.val === val) return root;
  if (val < root.val) return searchBST(root.left, val);
  return searchBST(root.right, val);
}
```

## Common Patterns

### 1. Recursion (most tree problems)
```javascript
function solve(root) {
  if (!root) return baseCase;
  const left = solve(root.left);
  const right = solve(root.right);
  return combine(left, right, root.val);
}
```

### 2. Height Calculation
```javascript
function height(root) {
  if (!root) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}
```

### 3. Path Sum
```javascript
function hasPathSum(root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return targetSum === root.val;
  return hasPathSum(root.left, targetSum - root.val) ||
         hasPathSum(root.right, targetSum - root.val);
}
```

## Tree Problems ka Flowchart

1. **BST hai?** -> Inorder traversal (sorted) ya recursion with range
2. **Level-wise kuch karna hai?** -> BFS with queue
3. **Path/height/diameter?** -> DFS recursion
4. **Lowest Common Ancestor?** -> Post-order recursion
5. **Serialize/Deserialize?** -> Preorder traversal

## Interview Tips
- Har tree problem recursion se solve hota hai
- Base case: `if (!root) return` ya `if (!root) return 0/null/false`
- BST mein inorder sorted order deta hai
- BFS = queue, DFS = stack/recursion
- Edge cases: empty tree, single node, skewed tree (like linked list)
- "Maximum path sum" mein single path vs path-through-node difference samjho
