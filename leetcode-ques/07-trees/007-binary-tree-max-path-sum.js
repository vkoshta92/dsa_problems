/*
|--------------------------------------------------------------------------
| Problem: Binary Tree Maximum Path Sum
| Difficulty: Hard
| Companies: Amazon, Google, Microsoft, Meta, Apple, Facebook
|--------------------------------------------------------------------------
|
| Problem Statement:
| A path in a binary tree is a sequence of nodes where each pair of adjacent
| nodes in the sequence has an edge connecting them. A node can only appear
| in the sequence at most once. Note that the path does not need to pass
| through the root. The path sum of a path is the sum of the node's values
| in the path. Given the root of the binary tree, return the maximum path
| sum of any non-empty path.
|
| Example 1:
| Input: root = [1,2,3]
| Output: 6
| Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
|
| Example 2:
| Input: root = [-10,9,20,null,null,15,7]
| Output: 42
| Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, ye problem mein hume binary tree mein maximum path sum nikalna hai.
| Path koi bhi ho sakta hai tree mein, root se leaf tak zaruri nahi hai.
|
| Approach: Post-order Recursion with Global Maximum
| --------------------------------------------------
| 1. Har node ke liye do cheezein calculate karo:
|    a. Maximum path sum jo current node se start hota hai aur
|       sirf ek direction mein jaata hai (left ya right).
|    b. Maximum path sum jo current node se hota hai aur
|       left + current + right ho sakta hai.
|
| 2. Har node ke liye:
|    a. Left maximum path sum nikalo (agar negative hai toh 0 lo).
|    b. Right maximum path sum nikalo (agar negative hai toh 0 lo).
|    c. Current path sum = left + node.val + right.
|    d. Agar current path sum global maximum se bada hai, update karo.
|    e. Return karo: node.val + max(left, right)
|       (Kyunki parent ko sirf ek direction mein path chahiye).
|
| Key Insight:
| Hum har node pe check karte hain ki kya left + node + right
| maximum path sum de sakta hai. Agar de sakta hai toh update karo.
| But return sirf ek direction mein karte hain kyunki path continuous
| hona chahiye.
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
 * @return {number}
 */
function maxPathSum(root) {
    // Global maximum initialize karo
    let maxSum = -Infinity;

    // Helper function for post-order traversal
    function getMaxContribution(node) {
        // Base case: agar node null hai toh 0 return karo
        if (!node) return 0;

        // Left subtree se maximum contribution nikalo
        // Agar negative hai toh 0 lo (path ko skip karo)
        const leftMax = Math.max(0, getMaxContribution(node.left));

        // Right subtree se maximum contribution nikalo
        // Agar negative hai toh 0 lo (path ko skip karo)
        const rightMax = Math.max(0, getMaxContribution(node.right));

        // Current path sum = left + node + right
        // Ye path current node se hota hai aur left aur right dono include karta hai
        const currentPathSum = leftMax + node.val + rightMax;

        // Agar current path sum global maximum se bada hai, update karo
        maxSum = Math.max(maxSum, currentPathSum);

        // Return karo node + max(left, right)
        // Kyunki parent ko sirf ek direction mein path chahiye
        return node.val + Math.max(leftMax, rightMax);
    }

    // Recursive function call karo
    getMaxContribution(root);

    return maxSum;
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

// Test Case 1: [1,2,3]
// Expected Output: 6
// Path: 2 -> 1 -> 3 = 6
const root1 = createTree([1, 2, 3]);
console.log("Test Case 1:", maxPathSum(root1));
// Expected: 6

// Test Case 2: [-10,9,20,null,null,15,7]
// Expected Output: 42
// Path: 15 -> 20 -> 7 = 42
const root2 = createTree([-10, 9, 20, null, null, 15, 7]);
console.log("Test Case 2:", maxPathSum(root2));
// Expected: 42

// Test Case 3: [5]
// Expected Output: 5
// Single node, path is just the node itself
const root3 = createTree([5]);
console.log("Test Case 3:", maxPathSum(root3));
// Expected: 5

// Test Case 4: [-3]
// Expected Output: -3
// Single negative node, path is just the node itself
const root4 = createTree([-3]);
console.log("Test Case 4:", maxPathSum(root4));
// Expected: -3

// Test Case 5: [-2,null,1]
// Expected Output: 1
// Path: 1 (right child only)
const root5 = createTree([-2, null, 1]);
console.log("Test Case 5:", maxPathSum(root5));
// Expected: 1

// Test Case 6: [1,-2,3]
// Expected Output: 3
// Path: 3 (right child only, since -2 is negative)
const root6 = createTree([1, -2, 3]);
console.log("Test Case 6:", maxPathSum(root6));
// Expected: 3

module.exports = maxPathSum;
