/*
|--------------------------------------------------------------------------
| Problem: Binary Tree Level Order Traversal
| Difficulty: Medium
| Companies: Amazon, Microsoft, Facebook, Google, Apple, Bloomberg
|--------------------------------------------------------------------------
|
| Problem Statement:
| Given the root of a binary tree, return the level order traversal of its
| nodes' values (i.e., from left to right, level by level).
|
| Example 1:
| Input: root = [3,9,20,null,null,15,7]
| Output: [[3],[9,20],[15,7]]
|
| Example 2:
| Input: root = [1]
| Output: [[1]]
|
| Example 3:
| Input: root = []
| Output: []
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, ye problem mein hume binary tree ki level order traversal karni hai.
| Matlab har level ke nodes ko left se right mein print karna hai.
|
| Approach: BFS (Breadth-First Search) using Queue
| ------------------------------------------------
| 1. Agar root null hai toh empty array return karo.
| 2. Ek queue lo aur usme root ko add karo.
| 3. Jab tak queue khali nahi ho jati, repeat karo:
|    a. Current level ki size note karo (queue.length).
|    b. Ek empty array lo current level ke values ke liye.
|    c. Exactly utne nodes process karo jitne current level mein hain:
|       - Queue se node nikalo.
|       - Uski value current level array mein add karo.
|       - Agar left child hai toh queue mein add karo.
|       - Agar right child hai toh queue mein add karo.
|    d. Current level array ko result mein add karo.
| 4. Result return karo.
|
| Key Insight:
| Hum har level ke nodes ko ek saath process karte hain.
| Queue ka size hamesha current level ke nodes batata hai.
| Isliye hum exactly itne iterations chalate hain.
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
 * @return {number[][]}
 */
function levelOrder(root) {
    // Agar tree empty hai toh empty array return karo
    if (!root) return [];

    // Result array aur queue initialize karo
    const result = [];
    const queue = [root];

    // Jab tak queue khali nahi ho jati
    while (queue.length > 0) {
        // Current level ke nodes ki size lo
        const levelSize = queue.length;
        // Current level ke values ka array
        const currentLevel = [];

        // Exactly itne nodes process karo jitne current level mein hain
        for (let i = 0; i < levelSize; i++) {
            // Queue se node nikalo (front se)
            const node = queue.shift();
            // Node ki value current level mein add karo
            currentLevel.push(node.val);

            // Agar left child hai toh queue mein add karo
            if (node.left) {
                queue.push(node.left);
            }
            // Agar right child hai toh queue mein add karo
            if (node.right) {
                queue.push(node.right);
            }
        }

        // Current level ka array result mein add karo
        result.push(currentLevel);
    }

    return result;
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(n)
| Har node ek baar visit hota hai, where n is the number of nodes.
|--------------------------------------------------------------------------
|
| Space Complexity: O(n)
| Queue mein maximum ek level ke nodes ho sakte hain.
| Worst case mein, last level mein n/2 nodes ho sakti hain.
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

// Test Case 1: [3,9,20,null,null,15,7]
// Expected Output: [[3],[9,20],[15,7]]
const root1 = createTree([3, 9, 20, null, null, 15, 7]);
console.log("Test Case 1:", JSON.stringify(levelOrder(root1)));
// Expected: [[3],[9,20],[15,7]]

// Test Case 2: [1]
// Expected Output: [[1]]
const root2 = createTree([1]);
console.log("Test Case 2:", JSON.stringify(levelOrder(root2)));
// Expected: [[1]]

// Test Case 3: []
// Expected Output: []
const root3 = createTree([]);
console.log("Test Case 3:", JSON.stringify(levelOrder(root3)));
// Expected: []

// Test Case 4: [1,2,3,4,5,6,7]
// Expected Output: [[1],[2,3],[4,5,6,7]]
const root4 = createTree([1, 2, 3, 4, 5, 6, 7]);
console.log("Test Case 4:", JSON.stringify(levelOrder(root4)));
// Expected: [[1],[2,3],[4,5,6,7]]

// Test Case 5: [1,null,2,3]
// Expected Output: [[1],[2],[3]]
const root5 = createTree([1, null, 2, 3]);
console.log("Test Case 5:", JSON.stringify(levelOrder(root5)));
// Expected: [[1],[2],[3]]

module.exports = levelOrder;
