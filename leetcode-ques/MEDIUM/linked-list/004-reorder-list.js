/*
Problem: Reorder List
Difficulty: Medium
Companies: Amazon, Microsoft, Meta, Apple

You are given the head of a singly linked-list. The list can be represented as:
L0 -> L1 -> ... -> Ln-1 -> Ln

Reorder the list to be on the following form:
L0 -> Ln -> L1 -> Ln-1 -> L2 -> Ln-2 -> ...

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4]
Output: [1,4,2,3]
Explanation: L0=1, Ln=4 -> L1=2, Ln-1=3 -> reordered to 1->4->2->3

Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
Explanation: L0=1, Ln=5 -> L1=2, Ln-1=4 -> L2=3 -> reordered to 1->5->2->4->3
*/

/*
Hinglish Logic Explanation:

Is problem mein hume linked list ko reorder karna hai - pehle last element
dusra, phir second last element, phir third element, aise chalte jaana hai.

Step-by-step approach:

Step 1: Linked list ka middle point dhundhna hai
- Slow aur fast pointer use karenge
- Slow 1 step, fast 2 steps chalega
- Jab fast end pe pahunchega, slow middle pe hoga
- Humne second half ko reverse karna hai, isliye middle chahiye

Step 2: Second half ko reverse karna hai
- Middle ke baad ka poora portion reverse karna hai
- Standard linked list reversal use karenge
- prev = null, current = middle.next
- Jab tak current null nahi hota, next save karo, current.next = prev, prev = current, current = next

Step 3: Dono halves ko merge karna hai alternately
- Pehla node first half se, doosra node second half se, teesra first se, aise
- Jab tak second half khatam nahi hota, alternate karte jaao

Yeh approach O(n) time leta hai aur O(1) space leta hai kyunki hum sirf
pointers manipulate kar rahe hain, extra nodes nahi bana rahe.
*/

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Reorders the linked list to L0 -> Ln -> L1 -> Ln-1 -> ...
 * @param {ListNode} head - head of the linked list
 * @returns {void} - modifies list in place
 */
function reorderList(head) {
    if (!head || !head.next || !head.next.next) return;

    // Step 1: Find the middle of the list using slow-fast pointer
    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the list
    let prev = null;
    let current = slow.next;
    slow.next = null; // Cut the list into two halves

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    // Step 3: Merge the two halves alternately
    let first = head;
    let second = prev;

    while (second) {
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }
}

/*
Time Complexity: O(n) - Three passes: find middle, reverse, merge - each O(n).
Space Complexity: O(1) - Only pointers used, no extra data structures.
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

// Test Case 1: [1,2,3,4] => Expected: [1,4,2,3]
let head1 = createList([1, 2, 3, 4]);
reorderList(head1);
console.log("Test 1 - Input: [1,2,3,4]");
console.log("Expected: [1, 4, 2, 3]");
console.log("Got:      " + JSON.stringify(listToArray(head1)));
console.log("---");

// Test Case 2: [1,2,3,4,5] => Expected: [1,5,2,4,3]
let head2 = createList([1, 2, 3, 4, 5]);
reorderList(head2);
console.log("Test 2 - Input: [1,2,3,4,5]");
console.log("Expected: [1, 5, 2, 4, 3]");
console.log("Got:      " + JSON.stringify(listToArray(head2)));
console.log("---");

// Test Case 3: [1,2,3] => Expected: [1,3,2]
let head3 = createList([1, 2, 3]);
reorderList(head3);
console.log("Test 3 - Input: [1,2,3]");
console.log("Expected: [1, 3, 2]");
console.log("Got:      " + JSON.stringify(listToArray(head3)));
console.log("---");

// Test Case 4: [1,2] => Expected: [1,2] (only 2 nodes, no change)
let head4 = createList([1, 2]);
reorderList(head4);
console.log("Test 4 - Input: [1,2]");
console.log("Expected: [1, 2]");
console.log("Got:      " + JSON.stringify(listToArray(head4)));
console.log("---");

// Test Case 5: [1,2,3,4,5,6] => Expected: [1,6,2,5,3,4]
let head5 = createList([1, 2, 3, 4, 5, 6]);
reorderList(head5);
console.log("Test 5 - Input: [1,2,3,4,5,6]");
console.log("Expected: [1, 6, 2, 5, 3, 4]");
console.log("Got:      " + JSON.stringify(listToArray(head5)));
console.log("---");

module.exports = { reorderList };
