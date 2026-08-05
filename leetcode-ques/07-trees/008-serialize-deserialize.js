/*
|--------------------------------------------------------------------------
| Problem: Serialize and Deserialize Binary Tree
| Difficulty: Hard
| Companies: Amazon, Google, Microsoft, Meta, Apple, Facebook, Netflix
|--------------------------------------------------------------------------
|
| Problem Statement:
| Serialization is the process of converting a data structure or object into
| a sequence of bits so that it can be stored or transmitted and reconstructed
| later. Given the root of a binary tree, design an algorithm to serialize and
| deserialize a binary tree. There is no restriction on how your
| serialization/deserialization algorithm should work. You need to ensure that
| a binary tree can be serialized to a string and this string can be
| deserialized to the original tree structure.
|
| Example 1:
| Input: root = [1,2,3,null,null,4,5]
| Output: [1,2,3,null,null,4,5]
|
| Example 2:
| Input: root = []
| Output: []
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, ye problem mein hume binary tree ko string mein convert karna hai
| (serialize) aur string se wapas tree banana hai (deserialize).
|
| Approach: Pre-order Traversal with Null Markers
| -----------------------------------------------
|
| SERIALIZE (Tree -> String):
| 1. Agar root null hai toh "N" return karo.
| 2. Pre-order traversal use karo (root, left, right).
| 3. Har node ki value string mein add karo.
| 4. Agar node null hai toh "N" add karo.
| 5. Comma se separate karo values ko.
| 6. Full string return karo.
|
| DESERIALIZE (String -> Tree):
| 1. String ko comma se split karo values ke array mein.
| 2. Ek index pointer lo jo array mein current position track kare.
| 3. Recursive function call karo:
|    a. Agar current value "N" hai toh null return karo.
|    b. Naya node banao current value se.
|    c. Left subtree recursively deserialize karo.
|    d. Right subtree recursively deserialize karo.
|    e. Current node return karo.
| 4. Root node return karo.
|
| Key Insight:
| Pre-order traversal use karte hain kyunki pehle root aata hai,
| phir left subtree, phir right subtree. Null markers lagate hain
| taaki tree structure preserve ho. Jab deserialize karte hain,
| toh same order mein values read karte hain.
|
|--------------------------------------------------------------------------
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = null;
 *     this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
    // Agar root null hai toh "N" return karo
    if (!root) return "N";

    // Result array
    const result = [];

    // Pre-order traversal function
    function preOrder(node) {
        // Agar node null hai toh "N" add karo
        if (!node) {
            result.push("N");
            return;
        }

        // Pehle current node ki value add karo
        result.push(node.val.toString());

        // Phir left subtree
        preOrder(node.left);

        // Phir right subtree
        preOrder(node.right);
    }

    // Pre-order traversal start karo
    preOrder(root);

    // Array ko comma-separated string mein convert karo
    return result.join(",");
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
    // Agar data "N" hai toh null return karo
    if (data === "N") return null;

    // String ko comma se split karo
    const values = data.split(",");
    // Index pointer
    let index = 0;

    // Recursive function to rebuild tree
    function buildTree() {
        // Agar index array ke bahar hai ya current value "N" hai
        if (index >= values.length || values[index] === "N") {
            index++;
            return null;
        }

        // Naya node banao current value se
        const node = new TreeNode(parseInt(values[index]));
        index++;

        // Left subtree recursively build karo
        node.left = buildTree();

        // Right subtree recursively build karo
        node.right = buildTree();

        return node;
    }

    // Tree build karo aur return karo
    return buildTree();
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(n)
| Serialize: Har node ek baar visit hota hai.
| Deserialize: Har value ek baar process hoti hai.
|--------------------------------------------------------------------------
|
| Space Complexity: O(n)
| Serialize: String mein n values store hoti hain.
| Deserialize: Recursion stack mein maximum h nodes ho sakte hain,
| where h is the height of the tree.
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

// Helper function to convert tree to array (for comparison)
function treeToArray(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();

        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }

    // Remove trailing nulls
    while (result.length > 0 && result[result.length - 1] === null) {
        result.pop();
    }

    return result;
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

// Test Case 1: [1,2,3,null,null,4,5]
// Expected Output: [1,2,3,null,null,4,5]
const root1 = createTree([1, 2, 3, null, null, 4, 5]);
const serialized1 = serialize(root1);
const deserialized1 = deserialize(serialized1);
console.log("Test Case 1 - Serialized:", serialized1);
console.log("Test Case 1 - Deserialized:", treeToArray(deserialized1));
// Expected: [1,2,3,null,null,4,5]

// Test Case 2: []
// Expected Output: []
const root2 = createTree([]);
const serialized2 = serialize(root2);
const deserialized2 = deserialize(serialized2);
console.log("Test Case 2 - Serialized:", serialized2);
console.log("Test Case 2 - Deserialized:", treeToArray(deserialized2));
// Expected: []

// Test Case 3: [1]
// Expected Output: [1]
const root3 = createTree([1]);
const serialized3 = serialize(root3);
const deserialized3 = deserialize(serialized3);
console.log("Test Case 3 - Serialized:", serialized3);
console.log("Test Case 3 - Deserialized:", treeToArray(deserialized3));
// Expected: [1]

// Test Case 4: [1,2,3,4,5]
// Expected Output: [1,2,3,4,5]
const root4 = createTree([1, 2, 3, 4, 5]);
const serialized4 = serialize(root4);
const deserialized4 = deserialize(serialized4);
console.log("Test Case 4 - Serialized:", serialized4);
console.log("Test Case 4 - Deserialized:", treeToArray(deserialized4));
// Expected: [1,2,3,4,5]

// Test Case 5: [1,2,null,3]
// Expected Output: [1,2,null,3]
const root5 = createTree([1, 2, null, 3]);
const serialized5 = serialize(root5);
const deserialized5 = deserialize(serialized5);
console.log("Test Case 5 - Serialized:", serialized5);
console.log("Test Case 5 - Deserialized:", treeToArray(deserialized5));
// Expected: [1,2,null,3]

module.exports = { serialize, deserialize };
