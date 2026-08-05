/*
|--------------------------------------------------------------------------
| Problem: Subtree of Another Tree
| Difficulty: Easy
| Companies: Amazon, Google, Meta, Microsoft, Apple, Bloomberg
| LeetCode: #572
|--------------------------------------------------------------------------
|
| Problem Statement:
| Given the roots of two binary trees root and subRoot, return true if there
| is a subtree of root with the same structure and node values of subRoot
| and false otherwise.
|
| A subtree of a binary tree is a tree that consists of a node in root and
| all of this node's descendants. The tree root could also be considered as
| a subtree of itself.
|
| Example 1:
| Input: root = [3,4,5,1,2], subRoot = [4,1,2]
| Output: true
| Explanation: The node with value 4 in root has subtree matching subRoot.
|
| Example 2:
| Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
| Output: false
| Explanation: The node with value 4 has a child 2 but subRoot expects
|              4->1->2 with no extra child 0 on 2.
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, humein check karna hai ki kya subRoot, root ke andar ek subtree
| ke roop mein maujood hai ya nahi.
|
| Approach: DFS + Same Tree Check
| -------------------------------
| 1. Har node of root ke liye check karo ki kya wahan se shuru hone wala
|    tree exactly same hai subRoot ke jaise.
|
| 2. isSameTree helper function:
|    - Dono null hain? true (identical empty trees)
|    - Sirf ek null hai? false (structures differ)
|    - Dono ke values same nahi? false
|    - Recursively left aur right subtrees check karo
|
| 3. isSubtree function:
|    - Agar subRoot null hai: true (empty tree is subtree of everything)
|    - Agar root null hai aur subRoot nahi: false
|    - Current node se same tree check karo (isSameTree)
|    - Nahi to left subtree mein dhundho
|    - Nahi to right subtree mein dhundho
|
| Key Insight: Har node ke liye isSameTree call karte hain. Agar kahin
| bhi match mil jaye, seedha true return.
|
| Dry Run: root = [3,4,5,1,2], subRoot = [4,1,2]
|
| isSubtree(3):
|   isSameTree(3, 4) => false (values differ)
|   isSubtree(4) =>
|     isSameTree(4, 4) => check left(1,1) && right(2,2) => true!
|   => true
|--------------------------------------------------------------------------
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * Check if two trees are exactly identical
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
    // Dono null hain - identical empty trees
    if (!p && !q) return true;

    // Sirf ek null hai - structures differ
    if (!p || !q) return false;

    // Values different - not same
    if (p.val !== q.val) return false;

    // Recursively check left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSubtree(root, subRoot) {
    // Empty subtree is always a subtree
    if (!subRoot) return true;

    // Main tree empty but subtree exists
    if (!root) return false;

    // Check if current node starts a matching subtree
    if (isSameTree(root, subRoot)) return true;

    // Check left and right subtrees
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(m * n)
| - m = number of nodes in root
| - n = number of nodes in subRoot
| - Worst case: for each node in root, we traverse entire subRoot
| - isSameTree takes O(n), called up to O(m) times
|
| Space Complexity: O(h)
| - h = height of root tree
| - Recursion stack depth: worst case O(m) for skewed tree,
|   balanced tree mein O(log m)
|--------------------------------------------------------------------------
*/

// Helper function to create a binary tree from array
function createTree(arr) {
    if (!arr || arr.length === 0) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (i < arr.length) {
        const current = queue.shift();

        // Left child
        if (i < arr.length && arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        // Right child
        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

// ===================== TEST CASES =====================

console.log("=== Subtree of Another Tree ===");
console.log("");

// Test Case 1: subRoot is a valid subtree
const root1 = createTree([3, 4, 5, 1, 2]);
const subRoot1 = createTree([4, 1, 2]);
console.log("Test 1: root = [3,4,5,1,2], subRoot = [4,1,2]");
console.log("Expected: true");
console.log("Output:", isSubtree(root1, subRoot1));
console.log("");

// Test Case 2: subRoot has extra node, not a subtree
const root2 = createTree([3, 4, 5, 1, 2, null, null, null, null, 0]);
const subRoot2 = createTree([4, 1, 2]);
console.log("Test 2: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]");
console.log("Expected: false");
console.log("Output:", isSubtree(root2, subRoot2));
console.log("");

// Test Case 3: Same tree (root itself matches)
const root3 = createTree([1, 2, 3]);
const subRoot3 = createTree([1, 2, 3]);
console.log("Test 3: root = [1,2,3], subRoot = [1,2,3]");
console.log("Expected: true");
console.log("Output:", isSubtree(root3, subRoot3));
console.log("");

// Test Case 4: Single node match
const root4 = createTree([1]);
const subRoot4 = createTree([1]);
console.log("Test 4: root = [1], subRoot = [1]");
console.log("Expected: true");
console.log("Output:", isSubtree(root4, subRoot4));
console.log("");

module.exports = { isSubtree, isSameTree, TreeNode, createTree };
