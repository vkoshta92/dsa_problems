/*
|--------------------------------------------------------------------------
| Problem: Kth Smallest Element in a BST
| Difficulty: Medium
| Companies: Amazon, Google, Microsoft, Meta, Apple
|--------------------------------------------------------------------------
|
| Problem Statement:
| Given the root of a binary search tree and an integer k, return the kth
| smallest element (1-indexed) of all the values of the nodes in the tree.
|
| Example 1:
| Input: root = [3,1,4,null,2], k = 1
| Output: 1
|
| Example 2:
| Input: root = [5,3,6,2,4,null,null,1], k = 3
| Output: 3
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, ye problem mein hume BST mein kth smallest element nikalna hai.
|
| BST Ka Magic:
| ------------
| BST mein inorder traversal sorted order mein values deta hai!
| Agar hum inorder traversal karein, toh kth visit ki node
| kth smallest element hogi.
|
| Approach: Iterative Inorder Traversal with Stack
| ------------------------------------------------
| 1. Ek stack lo aur current node ko root se start karo.
| 2. Jab tak current node null nahi ho jati:
|    - Current node ko stack mein push karo.
|    - Left child mein jao (chhoti values ke liye).
| 3. Jab left subtree khatam ho jaye:
|    - Stack se node pop karo.
|    - Counter increment karo.
|    - Agar counter == k ho jaye, toh ye node return karo.
|    - Right child mein jao (badi values ke liye).
| 4. Process tab tak karo jab tak kth element nahi mil jata.
|
| Key Insight:
| Inorder traversal mein sabse pehle smallest value milti hai.
| Har node visit karne par counter badhao.
| Jab counter k ke barabar ho jaye, wo node answer hai.
|
|--------------------------------------------------------------------------
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
    // Stack for iterative traversal
    const stack = [];
    // Current node pointer
    let current = root;

    // Jab tak stack khali nahi hota ya current null nahi hota
    while (current || stack.length > 0) {
        // Sabse pehla leftmost node tak jao
        while (current) {
            stack.push(current);
            current = current.left;
        }

        // Stack se node pop karo
        current = stack.pop();

        // Counter badhao
        k--;

        // Agar k zero ho gaya, toh ye node answer hai
        if (k === 0) {
            return current.val;
        }

        // Right subtree mein jao
        current = current.right;
    }

    // Ye line kabhi execute nahi hogi (problem guarantee karti hai ki k valid hai)
    return -1;
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(H + k)
| H is the height of the tree.
| Har node ko ek baar visit karte hain, but hum k tak rukte hain.
| Worst case mein, skewed tree ke liye O(n).
| Best case mein, balanced tree ke liye O(log n + k).
|--------------------------------------------------------------------------
|
| Space Complexity: O(H)
| Stack mein maximum H nodes ho sakte hain.
| Worst case mein, skewed tree ke liye O(n).
| Best case mein, balanced tree ke liye O(log n).
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

// Test Case 1: root = [3,1,4,null,2], k = 1
// Expected Output: 1 (smallest element)
const root1 = createTree([3, 1, 4, null, 2]);
console.log("Test Case 1:", kthSmallest(root1, 1));
// Expected: 1

// Test Case 2: root = [5,3,6,2,4,null,null,1], k = 3
// Expected Output: 3
const root2 = createTree([5, 3, 6, 2, 4, null, null, 1]);
console.log("Test Case 2:", kthSmallest(root2, 3));
// Expected: 3

// Test Case 3: root = [3,1,4,null,2], k = 2
// Expected Output: 2
const root3 = createTree([3, 1, 4, null, 2]);
console.log("Test Case 3:", kthSmallest(root3, 2));
// Expected: 2

// Test Case 4: root = [5,3,6,2,4,null,null,1], k = 1
// Expected Output: 1 (smallest)
const root4 = createTree([5, 3, 6, 2, 4, null, null, 1]);
console.log("Test Case 4:", kthSmallest(root4, 1));
// Expected: 1

// Test Case 5: root = [5,3,6,2,4,null,null,1], k = 6
// Expected Output: 6 (largest, since tree has 6 nodes)
const root5 = createTree([5, 3, 6, 2, 4, null, null, 1]);
console.log("Test Case 5:", kthSmallest(root5, 6));
// Expected: 6

module.exports = kthSmallest;
