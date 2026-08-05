/*
Problem: Remove Nth Node From End of List
Difficulty: Medium
Companies: Amazon, Google, Microsoft, Meta, Apple

Given the head of a linked list, remove the nth node from the end of the list
and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Explanation: The 2nd node from end (4) is removed.

Example 2:
Input: head = [1], n = 1
Output: []
Explanation: The only node is removed, so result is empty.

Example 3:
Input: head = [1,2], n = 1
Output: [1]
Explanation: The 2nd node from end (2) is removed.
*/

/*
Hinglish Logic Explanation:

Is problem mein hume linked list se nth node last se remove karna hai.

Two-Pointer (Fast and Slow) approach use karenge:

Step 1: Dummy node banao head se pehle
- Dummy node banane se handle ho jata hai jab head ko hi remove karna ho
- Dummy.next = head

Step 2: Fast pointer ko n steps aage le jao
- Pehle fast = dummy
- Phir fast ko n baar next karo
- Ab fast nth node se aage hai

Step 3: Dono pointers ek saath chalao
- Jab tak fast.next null nahi hota:
  - slow = slow.next
  - fast = fast.next
- Ab slow uss node ke pehle hai jise remove karna hai

Step 4: Remove karo
- slow.next = slow.next.next
- Yeh nth node skip kar dega

Step 5: Return karo dummy.next (original list head)

Dummy node trick isliye use karte hain kyunki agar first node (head) hi
remove karna ho toh wo handle ho jaata hai easily.

Time Complexity: O(n) - Single pass with two pointers
Space Complexity: O(1) - Only pointers used
*/

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Removes the nth node from the end of the list
 * @param {ListNode} head - head of the linked list
 * @param {number} n - position from end (1-indexed)
 * @returns {ListNode} - head of modified list
 */
function removeNthFromEnd(head, n) {
    // Create dummy node to handle edge case of removing head
    let dummy = new ListNode(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    // Move fast pointer n steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Move both pointers until fast reaches the end
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Remove the nth node from end
    slow.next = slow.next.next;

    return dummy.next;
}

/*
Time Complexity: O(n) - We traverse the list once with two pointers.
Space Complexity: O(1) - Only a few pointers used, no extra space.
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

// Test Case 1: [1,2,3,4,5], n=2 => Expected: [1,2,3,5]
let head1 = createList([1, 2, 3, 4, 5]);
console.log("Test 1 - Input: [1,2,3,4,5], n=2");
console.log("Expected: [1, 2, 3, 5]");
console.log("Got:      " + JSON.stringify(listToArray(removeNthFromEnd(head1, 2))));
console.log("---");

// Test Case 2: [1], n=1 => Expected: []
let head2 = createList([1]);
console.log("Test 2 - Input: [1], n=1");
console.log("Expected: []");
console.log("Got:      " + JSON.stringify(listToArray(removeNthFromEnd(head2, 1))));
console.log("---");

// Test Case 3: [1,2], n=1 => Expected: [1]
let head3 = createList([1, 2]);
console.log("Test 3 - Input: [1,2], n=1");
console.log("Expected: [1]");
console.log("Got:      " + JSON.stringify(listToArray(removeNthFromEnd(head3, 1))));
console.log("---");

// Test Case 4: [1,2,3], n=3 => Expected: [2,3] (remove first node)
let head4 = createList([1, 2, 3]);
console.log("Test 4 - Input: [1,2,3], n=3");
console.log("Expected: [2, 3]");
console.log("Got:      " + JSON.stringify(listToArray(removeNthFromEnd(head4, 3))));
console.log("---");

// Test Case 5: [1,2,3,4,5,6,7,8,9,10], n=4 => Expected: [1,2,3,4,5,6,8,9,10]
// 4th from end: 10(1st), 9(2nd), 8(3rd), 7(4th) - remove 7
let head5 = createList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("Test 5 - Input: [1,2,3,4,5,6,7,8,9,10], n=4");
console.log("Expected: [1, 2, 3, 4, 5, 6, 8, 9, 10]");
console.log("Got:      " + JSON.stringify(listToArray(removeNthFromEnd(head5, 4))));
console.log("---");

module.exports = { removeNthFromEnd };
