/*
|--------------------------------------------------------------------------
| Problem: Balanced Binary Tree
| Difficulty: Easy
| Companies: Amazon, Google, Microsoft, Meta, Apple, Bloomberg, Uber
| LeetCode: #110
|--------------------------------------------------------------------------
|
| Problem Statement:
| Given a binary tree, determine if it is height-balanced.
|
| A height-balanced binary tree is a binary tree in which the depth of
| the two subtrees of every node never differs by more than 1.
| (left height - right height must be 0, 1, or -1 for EVERY node)
|
| Example 1:
| Input: root = [3,9,20,null,null,15,7]
|     3
|    / \
|   9  20
|      / \
|     15  7
| Output: true
|
| Example 2:
| Input: root = [1,2,2,3,3,null,null,4,4]
|       1
|      / \
|     2   2
|    / \
|   3   3
|  / \
| 4   4
| Output: false
|
| Example 3:
| Input: root = []
| Output: true
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, balanced binary tree check karna hai. Har node ke liye left subtree
| aur right subtree ki HEIGHT ka difference 1 se zyada nahi hona chahiye.
| Yeh condition HAR NODE ke liye true honi chahiye, sirf root ke liye nahi!
|
| Approach: Post-order DFS (bottom-up)
| ------------------------------------
|
| 1. Har node ke liye height calculate karte hain recursively.
|
| 2. Agar kisi node ke left aur right subtree unbalanced hain, toh -1 return
|    karte hain. -1 signal hai ki "is subtree mein kuch garbar hai".
|
| 3. Balanced check: leftHeight - rightHeight ka absolute difference > 1 ho
|    toh -1 return karo. Nahin toh height return karo.
|
| 4. End mein, agar final result === -1, toh tree unbalanced hai.
|    Agar final result !== -1, toh balanced hai.
|
| Valid heights: [-1, 0, 1, 2, 3, ...]
| -1 = special flag meaning "unbalanced"
| 0  = null node
| 1+ = actual height
|
| Key Trick: -1 ko signal ki tarah use karna
| -------------------------------------------
| Agar left ya right se -1 aaya, toh seedha -1 return kar do. Check karne
| ki zaroorat nahi — agar ek bhi subtree unbalanced hai, poori tree unbalanced.
|
| Dry Run (Balanced): root = [3,9,20,null,null,15,7]
|     3
|    / \
|   9  20
|      / \
|     15  7
|
| dfs(9): left=0, right=0, diff=0 ≤ 1 → return 1+0=1
| dfs(15): left=0, right=0, diff=0 ≤ 1 → return 1+0=1
| dfs(7): left=0, right=0, diff=0 ≤ 1 → return 1+0=1
| dfs(20): left=1, right=1, diff=0 ≤ 1 → return 1+1=2
| dfs(3/root): left=1, right=2, diff=1 ≤ 1 → return 1+2=3
|
| Result: 3 !== -1 → true ✓
|
| Dry Run (Unbalanced): root = [1,2,2,3,3,null,null,4,4]
|       1
|      / \
|     2   2
|    / \
|   3   3
|  / \
| 4   4
|
| dfs(4): left=0, right=0, diff=0 → return 1
| dfs(4): left=0, right=0, diff=0 → return 1
| dfs(3): left=1, right=1, diff=0 → return 2
| dfs(3): left=0, right=0, diff=0 → return 1
| dfs(2): left=2, right=1, diff=1 → return 3
| dfs(2): left=0, right=0, diff=0 → return 1
| dfs(1/root): left=3, right=1, diff=2 > 1 → RETURN -1 !!!
|
| Result: -1 → false ✓
|
|--------------------------------------------------------------------------
*/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
    function checkHeight(node) {
        if (node === null) {
            return 0;
        }

        const leftHeight = checkHeight(node.left);

        // Left subtree is already unbalanced
        if (leftHeight === -1) {
            return -1;
        }

        const rightHeight = checkHeight(node.right);

        // Right subtree is already unbalanced
        if (rightHeight === -1) {
            return -1;
        }

        // Check balance condition at current node
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        // Return actual height
        return 1 + Math.max(leftHeight, rightHeight);
    }

    return checkHeight(root) !== -1;
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(n)
| - Every node visited exactly once in post-order DFS.
| - Height computed bottom-up, no repeated calculations.
|
| Space Complexity: O(h)
| - Recursion stack depth = height of tree.
| - Worst case (skewed tree): O(n)
| - Best case (balanced tree): O(log n)
|--------------------------------------------------------------------------
*/

// ===================== TEST CASES =====================

console.log("=== Balanced Binary Tree ===");
console.log("");

// Helper: create tree node
function TreeNode(value, left, right) {
    return { value: value, left: left || null, right: right || null };
}

// Test Case 1: Balanced tree
//     3
//    / \
//   9  20
//      / \
//     15  7
console.log("Test 1: root = [3,9,20,null,null,15,7]");
const root1 = TreeNode(3,
    TreeNode(9),
    TreeNode(20, TreeNode(15), TreeNode(7))
);
console.log("Expected: true");
console.log("Output:", isBalanced(root1));
console.log("");

// Test Case 2: Unbalanced tree
//       1
//      / \
//     2   2
//    / \
//   3   3
//  / \
// 4   4
console.log("Test 2: root = [1,2,2,3,3,null,null,4,4]");
const root2 = TreeNode(1,
    TreeNode(2,
        TreeNode(3, TreeNode(4), TreeNode(4)),
        TreeNode(3)
    ),
    TreeNode(2)
);
console.log("Expected: false");
console.log("Output:", isBalanced(root2));
console.log("");

// Test Case 3: Empty tree
console.log("Test 3: root = null");
console.log("Expected: true");
console.log("Output:", isBalanced(null));
console.log("");

// Test Case 4: Skewed right, deeply unbalanced
// 1 → 2 → 3 → 4
console.log("Test 4: root = [1,2,3,4] skewed right");
const root4 = TreeNode(1, null, TreeNode(2, null, TreeNode(3, null, TreeNode(4))));
console.log("Expected: false");
console.log("Output:", isBalanced(root4));
console.log("");

module.exports = { isBalanced };
