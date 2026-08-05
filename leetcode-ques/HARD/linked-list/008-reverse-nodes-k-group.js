/*
Problem: Reverse Nodes in k-Group
Difficulty: Hard
Companies: Google, Amazon, Microsoft, Meta, Apple

Given the head of a linked list, reverse the nodes of the list k at a time,
and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list.
If the number of nodes is not a multiple of k then left-out nodes, in the end,
should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Example 2:
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
Explanation: First group [1,2,3] reversed to [3,2,1]. Second group [4,5] has
less than k nodes so remains as is.
*/

/*
Hinglish Logic Explanation:

Is problem mein hume linked list ke nodes ko k group mein reverse karna hai.
Agar last group mein k se kam nodes hain toh unhe reverse nahi karna.

Approach: Iterative with helper functions

Step 1: Check k nodes available hain ya nahi
- Pehle count karo ki current position se k nodes hain bhi ya nahi
- Agar k nodes nahi hain toh reverse nahi karo, wohi rehne do

Step 2: K nodes ko reverse karo
- Standard linked list reversal karo k nodes ke liye
- prev = null, current = group ka head
- k baar next karo, jab tak nodes khatam na ho

Step 3: Reversed group ko rest of list se connect karo
- Pehle group ka tail (jo pehle head tha) ko next group se connect karo
- Yeh connection maintain karna important hai

Step 4: Recurse ya loop se baaki list process karo
- Agar aur k nodes available hain toh repeat karo
- Nahi toh current position pe stop karo

Helper Functions:
- getLength(head): list ki length calculate karta hai
- reverseGroup(head, k): k nodes reverse karta hai

Important Points:
- Dummy node use karte hain handle karne ke liye jab head reverse ho
- Har group ke baad prev ko update karte hain
- Connection maintain karte hain groups ke beech mein

Time Complexity: O(n) - Har node exactly ek baar visit hota hai
Space Complexity: O(1) - Iterative approach, no recursion stack
*/

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Reverses nodes in k-group
 * @param {ListNode} head - head of the linked list
 * @param {number} k - group size
 * @returns {ListNode} - head of modified list
 */
function reverseKGroup(head, k) {
    if (!head || k === 1) return head;

    // Dummy node to handle head reversal
    let dummy = new ListNode(0);
    dummy.next = head;
    let groupPrev = dummy;

    while (true) {
        // Check if k nodes are available
        let kth = groupPrev;
        for (let i = 0; i < k; i++) {
            kth = kth.next;
            if (!kth) return dummy.next;
        }

        let groupNext = kth.next;
        let prev = groupNext;
        let current = groupPrev.next;

        // Reverse k nodes
        for (let i = 0; i < k; i++) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        // Connect reversed group to the rest
        let temp = groupPrev.next; // This is now the tail of reversed group
        groupPrev.next = kth; // Connect to the new head of reversed group
        groupPrev = temp; // Move to the tail for next group
    }
}

/*
Time Complexity: O(n) - Each node is visited exactly once.
Space Complexity: O(1) - Only pointers used, no extra space.
*/

// Helper: create list from array
function createList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper: convert list to array for display
function listToArray(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Test Case 1: [1,2,3,4,5], k=2 => Expected: [2,1,4,3,5]
let head1 = createList([1, 2, 3, 4, 5]);
console.log("Test 1 - Input: [1,2,3,4,5], k=2");
console.log("Expected: [2, 1, 4, 3, 5]");
console.log("Got:      " + JSON.stringify(listToArray(reverseKGroup(head1, 2))));
console.log("---");

// Test Case 2: [1,2,3,4,5], k=3 => Expected: [3,2,1,4,5]
let head2 = createList([1, 2, 3, 4, 5]);
console.log("Test 2 - Input: [1,2,3,4,5], k=3");
console.log("Expected: [3, 2, 1, 4, 5]");
console.log("Got:      " + JSON.stringify(listToArray(reverseKGroup(head2, 3))));
console.log("---");

// Test Case 3: [1,2,3,4,5,6,7,8], k=3 => Expected: [3,2,1,6,5,4,7,8]
let head3 = createList([1, 2, 3, 4, 5, 6, 7, 8]);
console.log("Test 3 - Input: [1,2,3,4,5,6,7,8], k=3");
console.log("Expected: [3, 2, 1, 6, 5, 4, 7, 8]");
console.log("Got:      " + JSON.stringify(listToArray(reverseKGroup(head3, 3))));
console.log("---");

// Test Case 4: [1,2,3,4,5], k=1 => Expected: [1,2,3,4,5] (no change)
let head4 = createList([1, 2, 3, 4, 5]);
console.log("Test 4 - Input: [1,2,3,4,5], k=1");
console.log("Expected: [1, 2, 3, 4, 5]");
console.log("Got:      " + JSON.stringify(listToArray(reverseKGroup(head4, 1))));
console.log("---");

// Test Case 5: [1,2,3,4,5,6], k=3 => Expected: [3,2,1,6,5,4]
let head5 = createList([1, 2, 3, 4, 5, 6]);
console.log("Test 5 - Input: [1,2,3,4,5,6], k=3");
console.log("Expected: [3, 2, 1, 6, 5, 4]");
console.log("Got:      " + JSON.stringify(listToArray(reverseKGroup(head5, 3))));
console.log("---");

// Test Case 6: [1,2], k=2 => Expected: [2,1]
let head6 = createList([1, 2]);
console.log("Test 6 - Input: [1,2], k=2");
console.log("Expected: [2, 1]");
console.log("Got:      " + JSON.stringify(listToArray(reverseKGroup(head6, 2))));
console.log("---");

module.exports = { reverseKGroup };
