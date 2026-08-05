/*
|--------------------------------------------------------------------------
| Problem: Lowest Common Ancestor of a Binary Tree
| Difficulty: Medium
| Companies: Amazon, Google, Microsoft, Meta, Apple, Facebook
|--------------------------------------------------------------------------
|
| Problem Statement:
| Given a binary tree, find the lowest common ancestor (LCA) of two given
| nodes in the tree. According to the definition of LCA on Wikipedia: "The
| lowest common ancestor is defined between two nodes p and q as the lowest
| node in T that has both p and q as descendants (where we allow a node to
| be a descendant of itself)."
|
| Example 1:
| Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
| Output: 3
| Explanation: The LCA of nodes 5 and 1 is 3.
|
| Example 2:
| Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
| Output: 5
| Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a
| descendant of itself.
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, ye problem mein hume binary tree mein do nodes ka Lowest Common
| Ancestor (LCA) nikalna hai.
|
| LCA Kya Hai?
| ------------
| LCA wo sabse neeche ka node hai jo dono nodes p aur q ka ancestor hai.
| Yaani dono nodes iske neeche hain (ya khud wo node hai).
|
| Approach: Post-order Recursion
| ------------------------------
| 1. Agar current node null hai toh null return karo.
| 2. Agar current node p ya q hai, toh current node return karo.
|    - Kyunki agar hume p ya q mil gaya, toh wo LCA ho sakta hai.
| 3. Left subtree mein recursively LCA dhundho.
| 4. Right subtree mein recursively LCA dhundho.
| 5. Agar dono taraf se non-null values aayin:
|    - Toh current node LCA hai.
|    - Kyunki p aur q dono alag alag subtrees mein hain.
| 6. Agar sirf ek taraf se non-null value aayi:
|    - Toh wo value return karo (p ya q dono usi taraf hain).
|
| Key Insight:
| Post-order traversal use karte hain kyunki hume pehle
| subtrees ko check karna hai, phir current node pe decision lena hai.
| Agar dono subtrees se non-null aaye, toh current node LCA hai.
|
|--------------------------------------------------------------------------
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    // Base case: agar root null hai toh null return karo
    if (!root) return null;

    // Agar current node p ya q hai, toh current node return karo
    if (root === p || root === q) {
        return root;
    }

    // Left subtree mein LCA dhundho
    const left = lowestCommonAncestor(root.left, p, q);

    // Right subtree mein LCA dhundho
    const right = lowestCommonAncestor(root.right, p, q);

    // Agar dono taraf se non-null values aayin
    // toh current node LCA hai
    if (left && right) {
        return root;
    }

    // Agar sirf ek taraf se non-null value aayi
    // toh wo value return karo
    return left || right;
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(n)
| Har node ek baar visit hota hai, where n is the number of nodes.
|--------------------------------------------------------------------------
|
| Space Complexity: O(h)
| Recursion stack mein maximum h nodes ho sakte hain,
| where h is the height of the tree.
| Worst case mein, skewed tree ke liye h = n.
| Best case mein, balanced tree ke liye h = log(n).
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

// Helper function to find a node by value
function findNode(root, val) {
    if (!root) return null;
    if (root.val === val) return root;
    return findNode(root.left, val) || findNode(root.right, val);
}

// TreeNode constructor
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/*
|--------------------------------------------------------------------------
| Test Cases with Expected Output:
|--------------------------------------------------------------------------
*/

// Test Case 1: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Expected Output: 3
const root1 = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
const p1 = findNode(root1, 5);
const q1 = findNode(root1, 1);
console.log("Test Case 1:", lowestCommonAncestor(root1, p1, q1).val);
// Expected: 3

// Test Case 2: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Expected Output: 5
const root2 = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
const p2 = findNode(root2, 5);
const q2 = findNode(root2, 4);
console.log("Test Case 2:", lowestCommonAncestor(root2, p2, q2).val);
// Expected: 5

// Test Case 3: root = [1,2], p = 1, q = 2
// Expected Output: 1
const root3 = createTree([1, 2]);
const p3 = findNode(root3, 1);
const q3 = findNode(root3, 2);
console.log("Test Case 3:", lowestCommonAncestor(root3, p3, q3).val);
// Expected: 1

// Test Case 4: root = [2,1], p = 2, q = 1
// Expected Output: 2
const root4 = createTree([2, 1]);
const p4 = findNode(root4, 2);
const q4 = findNode(root4, 1);
console.log("Test Case 4:", lowestCommonAncestor(root4, p4, q4).val);
// Expected: 2

// Test Case 5: root = [3,5,1,6,2,0,8,null,null,7,4], p = 6, q = 4
// Expected Output: 5
const root5 = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
const p5 = findNode(root5, 6);
const q5 = findNode(root5, 4);
console.log("Test Case 5:", lowestCommonAncestor(root5, p5, q5).val);
// Expected: 5

module.exports = lowestCommonAncestor;
