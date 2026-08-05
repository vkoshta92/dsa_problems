/*
|--------------------------------------------------------------------------
| Problem: Diameter of Binary Tree
| Difficulty: Easy
| Companies: Amazon, Google, Microsoft, Meta, Apple, Bloomberg, Uber
| LeetCode: #543
|--------------------------------------------------------------------------
|
| Problem Statement:
| Given the root of a binary tree, return the length of the diameter of
| the tree.
|
| The diameter of a binary tree is the length of the longest path between
| any two nodes in a tree. This path may or may not pass through the root.
|
| The length of a path between two nodes is represented by the number of
| edges between them.
|
| Example 1:
| Input: root = [1,2,3,4,5]
|     1
|    / \
|   2   3
|  / \
| 4   5
| Output: 3
| Explanation: Longest path is [4,2,1,3] or [5,2,1,3] (3 edges).
|
| Example 2:
| Input: root = [1,2]
| Output: 1
|
| Example 3:
| Input: root = [1]
| Output: 0
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, diameter nikalna hai — longest path between any two nodes. Yeh path
| ROOT SE PASS KARE ZAROORI NAHI HAI! Yahi common mistake hai interviews mein.
|
| Approach: Post-order DFS with Global Maximum
| --------------------------------------------
|
| Key insight: Kisi bhi node ke liye, us node se guzarne wala longest path
| hoga: leftHeight + rightHeight (left subtree ki max depth + right subtree
| ki max depth). Is path mein edges ki ginti leftHeight + rightHeight hogi.
|
| Algorithm:
| ---------
| 1. Global variable 'diameter' maintain karo (0 initialize).
|
| 2. Har node ke liye height calculate karo recursively:
|    - Base case: null node ki height = 0
|    - Left subtree ki height nikalo
|    - Right subtree ki height nikalo
|    - CURRENT node se guzarne wala path = leftHeight + rightHeight
|      Agar yeh diameter se bada hai, toh diameter update karo.
|    - Return 1 + Math.max(leftHeight, rightHeight) as is node ki height
|
| 3. Return diameter at the end.
|
| Height vs Diameter confusion:
| -----------------------------
| Height = number of EDGES from node to deepest leaf (ya number of NODES,
| dono tareeke se soch sakte hain, bas consistent raho).
|
| Is implementation mein: height = number of NODES from current to deepest.
| So null ki height = 0, leaf ki height = 1.
| Diameter = leftHeight + rightHeight = dono sides ki node counts ka sum
| (jo ki edges ki ginti me convert ho jaati hai kyunki height leaf se aane
| wale nodes count karti hai, aur diameter edges count karta hai).
|
| Wait, let me clarify:
| Agar height = nodes from current to deepest:
|   null → 0, leaf → 1, node with 1 child → 2, etc.
|   diameter = leftHeight + rightHeight (this gives number of edges in
|   the longest path through this node). Works perfectly!
|
| Dry Run: root = [1,2,3,4,5]
|     1
|    / \
|   2   3
|  / \
| 4   5
|
| dfs(4): left=0, right=0, diameter=max(0,0)=0, return 1+0=1
| dfs(5): left=0, right=0, diameter=max(0,0)=0, return 1+0=1
| dfs(2): left=1, right=1, diameter=max(0,2)=2, return 1+1=2
| dfs(3): left=0, right=0, diameter=max(2,0)=2, return 1+0=1
| dfs(1): left=2, right=1, diameter=max(2,3)=3, return 1+2=3
|
| Final diameter = 3 ✓ ([4,2,1,3] has 3 edges)
|
|--------------------------------------------------------------------------
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
    let diameter = 0;

    function height(node) {
        if (node === null) {
            return 0;
        }

        const leftHeight = height(node.left);
        const rightHeight = height(node.right);

        // Path passing through this node
        const currentPath = leftHeight + rightHeight;
        if (currentPath > diameter) {
            diameter = currentPath;
        }

        // Return height of this node (1 + max of children)
        return 1 + Math.max(leftHeight, rightHeight);
    }

    height(root);
    return diameter;
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(n)
| - Every node is visited exactly once in the DFS traversal.
|
| Space Complexity: O(h)
| - Recursion stack depth = height of the tree.
| - Worst case (skewed tree): O(n)
| - Best case (balanced tree): O(log n)
|--------------------------------------------------------------------------
*/

// ===================== TEST CASES =====================

console.log("=== Diameter of Binary Tree ===");
console.log("");

// Helper: create tree node
function TreeNode(value, left, right) {
    return { value: value, left: left || null, right: right || null };
}

// Test Case 1: Standard tree, diameter passes through root
//      1
//     / \
//    2   3
//   / \
//  4   5
console.log("Test 1: root = [1,2,3,4,5]");
const root1 = TreeNode(1,
    TreeNode(2, TreeNode(4), TreeNode(5)),
    TreeNode(3)
);
console.log("Expected: 3 (path 4→2→1→3 or 5→2→1→3)");
console.log("Output:", diameterOfBinaryTree(root1));
console.log("");

// Test Case 2: Diameter does NOT pass through root
//       1
//      /
//     2
//    / \
//   3   4
//  /     \
// 5       6
console.log("Test 2: Skewed left, diameter inside left subtree");
const root2 = TreeNode(1,
    TreeNode(2,
        TreeNode(3, TreeNode(5)),
        TreeNode(4, null, TreeNode(6))
    )
);
console.log("Expected: 4 (path 5→3→2→4→6)");
console.log("Output:", diameterOfBinaryTree(root2));
console.log("");

// Test Case 3: Single node
console.log("Test 3: root = [1]");
const root3 = TreeNode(1);
console.log("Expected: 0");
console.log("Output:", diameterOfBinaryTree(root3));
console.log("");

// Test Case 4: Two nodes
console.log("Test 4: root = [1,2]");
const root4 = TreeNode(1, TreeNode(2));
console.log("Expected: 1");
console.log("Output:", diameterOfBinaryTree(root4));
console.log("");

module.exports = { diameterOfBinaryTree };
