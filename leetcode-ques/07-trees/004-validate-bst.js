/*
|--------------------------------------------------------------------------
| Problem: Validate Binary Search Tree
| Difficulty: Medium
| Companies: Amazon, Google, Microsoft, Meta, Apple, Facebook
|--------------------------------------------------------------------------
|
| Problem Statement:
| Given the root of a binary tree, determine if it is a valid binary search
| tree (BST). A valid BST is defined as follows:
| - The left subtree of a node contains only nodes with keys less than the
|   node's key.
| - The right subtree of a node contains only nodes with keys greater than
|   the node's key.
| - Both the left and right subtrees must also be binary search trees.
|
| Example 1:
| Input: root = [2,1,3]
| Output: true
|
| Example 2:
| Input: root = [5,1,4,null,null,3,6]
| Output: false
| Explanation: The root node's value is 5 but its right child's value is 4.
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, ye problem mein hume check karna hai ki diya gaya binary tree
| ek valid BST hai ya nahi.
|
| BST Ka Rule:
| ------------
| - Har node ki left subtree mein sirf chhote values honi chahiye.
| - Har node ki right subtree mein sirf bade values honi chahiye.
| - Ye rule har node ke liye follow hona chahiye.
|
| Approach: Recursive with Valid Range (low, high)
| ------------------------------------------------
| 1. Root ke liye initial range (-Infinity, Infinity) rakho.
| 2. Har node ke liye check karo ki uski value current range mein hai ya nahi.
| 3. Agar node ki value range se bahar hai, toh false return karo.
| 4. Left subtree ke liye range update karo: (low, node.val)
|    - Left subtree mein sirf node se chhote values ho sakte hain.
| 5. Right subtree ke liye range update karo: (node.val, high)
|    - Right subtree mein sirf node se bade values ho sakte hain.
| 6. Dono subtrees valid hain toh true return karo.
|
| Key Insight:
| Har node ke liye ek valid range hoti hai. Agar node ki value
| range mein hai, toh subtree valid hai. Nahi toh invalid hai.
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
 * @return {boolean}
 */
function isValidBST(root) {
    // Helper function with range check
    function validate(node, low, high) {
        // Agar node null hai toh valid hai (base case)
        if (!node) return true;

        // Agar node ki value range se bahar hai toh invalid hai
        if (node.val <= low || node.val >= high) {
            return false;
        }

        // Left subtree mein sirf chhote values honi chahiye
        // Right subtree mein sirf bade values honi chahiye
        // Dono subtrees valid honi chahiye
        return validate(node.left, low, node.val) &&
               validate(node.right, node.val, high);
    }

    // Root ke liye initial range (-Infinity, Infinity) hai
    return validate(root, -Infinity, Infinity);
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

// Test Case 1: [2,1,3]
// Expected Output: true
const root1 = createTree([2, 1, 3]);
console.log("Test Case 1:", isValidBST(root1));
// Expected: true

// Test Case 2: [5,1,4,null,null,3,6]
// Expected Output: false
const root2 = createTree([5, 1, 4, null, null, 3, 6]);
console.log("Test Case 2:", isValidBST(root2));
// Expected: false

// Test Case 3: [1]
// Expected Output: true
const root3 = createTree([1]);
console.log("Test Case 3:", isValidBST(root3));
// Expected: true

// Test Case 4: [10,5,15,null,null,6,20]
// Expected Output: false
// Kyunki 6 node 10 se chhota hai jo left mein hona chahiye
const root4 = createTree([10, 5, 15, null, null, 6, 20]);
console.log("Test Case 4:", isValidBST(root4));
// Expected: false

// Test Case 5: [5,1,4,null,null,3,6]
// Expected Output: false
// Kyunki 4 < 5, but 4 is in right subtree
const root5 = createTree([5, 1, 4, null, null, 3, 6]);
console.log("Test Case 5:", isValidBST(root5));
// Expected: false

module.exports = isValidBST;
