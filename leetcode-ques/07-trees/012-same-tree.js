/*
|--------------------------------------------------------------------------
| Problem: Same Tree
| Difficulty: Easy
| Companies: Amazon, Google, Meta, Microsoft, Apple, Bloomberg, LinkedIn
| LeetCode: #100
|--------------------------------------------------------------------------
|
| Problem Statement:
| Given the roots of two binary trees p and q, write a function to check
| if they are the same or not.
|
| Two binary trees are considered the same if they are structurally
| identical, and the nodes have the same value.
|
| Example 1:
| Input: p = [1,2,3], q = [1,2,3]
| Output: true
|
| Example 2:
| Input: p = [1,2], q = [1,null,2]
| Output: false
| Explanation:
|   Tree p:   1       Tree q:   1
|            / \                 \
|           2   3                 2
|
| Example 3:
| Input: p = [1,2,1], q = [1,1,2]
| Output: false
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, do binary trees identical hain ya nahi yeh check karna hai.
| Structurally same + values same = identical trees.
|
| Approach: Recursive DFS
| -----------------------
| 1. Base Cases:
|    - Dono null hain? => true (do empty trees same hoti hain)
|    - Sirf ek null hai? => false (structure differ)
|
| 2. Current Node Check:
|    - Dono ke values same hain?
|      Agar nahi, seedha false return karo.
|
| 3. Recursive Check:
|    - Left subtree same hai? AND
|    - Right subtree same hai?
|    - Dono true hone chahiye tabhi trees same hain.
|
| Alternative: BFS using Queue
| ----------------------------
| Do queues le kar level-by-level compare bhi kar sakte hain.
| Lekin recursion simple aur clean hai.
|
| Key Insight: Simultaneously dono trees ko traverse karo.
| Har step pe dono nodes compare karo. Kisi bhi step pe mismatch
| mila toh false, warna end tak dono null honge toh true.
|
| Dry Run: p = [1,2,3], q = [1,2,3]
|
| isSameTree(1, 1):
|   values same (1==1)
|   left: isSameTree(2, 2)
|     values same (2==2)
|     left: isSameTree(null, null) => true
|     right: isSameTree(null, null) => true
|     => true
|   right: isSameTree(3, 3)
|     values same (3==3)
|     left: isSameTree(null, null) => true
|     right: isSameTree(null, null) => true
|     => true
|   => true && true = true ✓
|
| Dry Run: p = [1,2], q = [1,null,2]
|
| isSameTree(1, 1):
|   values same (1==1)
|   left: isSameTree(2, null) => one is null => false
|   => false (short circuit, right check nahi hoga)
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
    // Base Case 1: Dono null hain - same empty trees
    if (!p && !q) return true;

    // Base Case 2: Sirf ek null hai - structures alag hain
    if (!p || !q) return false;

    // Current node check: values same hone chahiye
    if (p.val !== q.val) return false;

    // Recursively left aur right subtrees check karo
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(min(n1, n2))
| - n1 = number of nodes in tree p
| - n2 = number of nodes in tree q
| - Worst case: dono trees same size ke hain toh O(n) where n = n1 = n2
| - Agar ek tree chhota hai, toh comparison early stop ho jayega
|
| Space Complexity: O(min(h1, h2))
| - h1 = height of tree p
| - h2 = height of tree q
| - Recursion stack depth: balanced tree mein O(log n), skewed mein O(n)
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

console.log("=== Same Tree ===");
console.log("");

// Test Case 1: Identical trees
const p1 = createTree([1, 2, 3]);
const q1 = createTree([1, 2, 3]);
console.log("Test 1: p = [1,2,3], q = [1,2,3]");
console.log("Expected: true");
console.log("Output:", isSameTree(p1, q1));
console.log("");

// Test Case 2: Different structure
const p2 = createTree([1, 2]);
const q2 = createTree([1, null, 2]);
console.log("Test 2: p = [1,2], q = [1,null,2]");
console.log("Expected: false");
console.log("Output:", isSameTree(p2, q2));
console.log("");

// Test Case 3: Same structure, different values
const p3 = createTree([1, 2, 1]);
const q3 = createTree([1, 1, 2]);
console.log("Test 3: p = [1,2,1], q = [1,1,2]");
console.log("Expected: false");
console.log("Output:", isSameTree(p3, q3));
console.log("");

// Test Case 4: Both empty trees
console.log("Test 4: p = [], q = []");
console.log("Expected: true");
console.log("Output:", isSameTree(null, null));
console.log("");

module.exports = { isSameTree, TreeNode, createTree };
