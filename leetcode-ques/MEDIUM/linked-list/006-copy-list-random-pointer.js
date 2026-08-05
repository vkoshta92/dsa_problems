/*
Problem: Copy List with Random Pointer
Difficulty: Medium
Companies: Amazon, Google, Microsoft, Meta, Apple, Bloomberg

A linked list of length n is given to you where each node contains an additional
random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n
brand new nodes, where each new node uses its values from the original list.
Both the random and next pointers of the new nodes should point to new nodes
in the copied list such that the pointers in the original list and copied list
represent the same list state. None of the pointers in the new list should point
to nodes in the original list.

Example 1:
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

Example 2:
Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]

Example 3:
Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]
*/

/*
Hinglish Logic Explanation:

Is problem mein hume ek linked list ka deep copy banana hai jisme har node
ke paas ek random pointer bhi hai jo kisi bhi node ko point kar sakta hai.

Approach: Insert Copy Nodes Method (Interleave Method)

Step 1: Har original node ke baad uska copy node insert karo
- Traverse karo list
- Har node ke baad ek naya node banao usi value ke saath
- Original: A -> B -> C
- After:    A -> A' -> B -> B' -> C -> C'

Step 2: Set random pointers for copy nodes
- Har original node ke copy ke random pointer ko set karo
- Agar original ka random kisi node X ko point karta hai,
  toh copy ka random X.next ko point karega (jo X ka copy hai)
- original.next.random = original.random.next

Step 3: Separate original and copy lists
- Original list restore karo
- Copy list alag karo
- Original: A -> B -> C (restored)
- Copy:     A' -> B' -> C' (separated)

Yeh approach O(n) time leta hai aur O(1) extra space leta hai
(kyunki hum initially extra nodes list mein hi bana rahe hain,
alag se space nahi le rahe).

Alternative approach: HashMap use karke bhi kar sakte hain O(n) space mein,
lekin yeh in-place approach better hai.
*/

class Node {
    constructor(val, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

/**
 * Creates a deep copy of a linked list with random pointers
 * Uses the interleave method - insert copy after each original
 * @param {Node} head - head of the original linked list
 * @returns {Node} - head of the copied linked list
 */
function copyRandomList(head) {
    if (!head) return null;

    // Step 1: Insert copy node after each original node
    // Original: A -> B -> C -> null
    // After:    A -> A' -> B -> B' -> C -> C' -> null
    let current = head;
    while (current) {
        let copy = new Node(current.val);
        copy.next = current.next;
        current.next = copy;
        current = copy.next;
    }

    // Step 2: Set random pointers for copy nodes
    current = head;
    while (current) {
        if (current.random) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    }

    // Step 3: Separate original and copy lists
    current = head;
    let copyHead = head.next;
    let copyCurrent = copyHead;

    while (current) {
        current.next = current.next.next;
        if (copyCurrent.next) {
            copyCurrent.next = copyCurrent.next.next;
        }
        current = current.next;
        copyCurrent = copyCurrent.next;
    }

    return copyHead;
}

/*
Time Complexity: O(n) - Three passes through the list, each O(n).
Space Complexity: O(1) - Only constant extra space (no HashMap needed).
*/

// Helper: create list from 2D array like [[val, randomIndex], ...]
function createListWithRandom(arr) {
    if (arr.length === 0) return null;
    let nodes = [];
    for (let i = 0; i < arr.length; i++) {
        nodes.push(new Node(arr[i][0]));
    }
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) nodes[i].next = nodes[i + 1];
        if (arr[i][1] !== null) nodes[i].random = nodes[arr[i][1]];
    }
    return nodes[0];
}

// Helper: convert list to 2D array for display (with random info)
function listToArray(head) {
    let result = [];
    let current = head;
    let indexMap = new Map();
    let index = 0;

    while (current) {
        indexMap.set(current, index++);
        current = current.next;
    }

    current = head;
    while (current) {
        let randomIdx = current.random ? indexMap.get(current.random) : null;
        result.push([current.val, randomIdx]);
        current = current.next;
    }

    return result;
}

// Helper: check if two lists are equal
function areListsEqual(head1, head2) {
    let arr1 = listToArray(head1);
    let arr2 = listToArray(head2);
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

// Test Case 1: [[7,null],[13,0],[11,4],[10,2],[1,0]]
let head1 = createListWithRandom([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]);
let copy1 = copyRandomList(head1);
console.log("Test 1 - Input: [[7,null],[13,0],[11,4],[10,2],[1,0]]");
console.log("Expected: [[7,null],[13,0],[11,4],[10,2],[1,0]]");
console.log("Got:      " + JSON.stringify(listToArray(copy1)));
console.log("Is copy (not same reference): " + (head1 !== copy1));
console.log("---");

// Test Case 2: [[1,1],[2,1]]
let head2 = createListWithRandom([[1, 1], [2, 1]]);
let copy2 = copyRandomList(head2);
console.log("Test 2 - Input: [[1,1],[2,1]]");
console.log("Expected: [[1,1],[2,1]]");
console.log("Got:      " + JSON.stringify(listToArray(copy2)));
console.log("---");

// Test Case 3: [[3,null],[3,0],[3,null]]
let head3 = createListWithRandom([[3, null], [3, 0], [3, null]]);
let copy3 = copyRandomList(head3);
console.log("Test 3 - Input: [[3,null],[3,0],[3,null]]");
console.log("Expected: [[3,null],[3,0],[3,null]]");
console.log("Got:      " + JSON.stringify(listToArray(copy3)));
console.log("---");

// Test Case 4: empty list
let head4 = createListWithRandom([]);
let copy4 = copyRandomList(head4);
console.log("Test 4 - Input: []");
console.log("Expected: []");
console.log("Got:      " + JSON.stringify(listToArray(copy4)));
console.log("---");

// Test Case 5: [[1,null]]
let head5 = createListWithRandom([[1, null]]);
let copy5 = copyRandomList(head5);
console.log("Test 5 - Input: [[1,null]]");
console.log("Expected: [[1,null]]");
console.log("Got:      " + JSON.stringify(listToArray(copy5)));
console.log("---");

module.exports = { copyRandomList };
