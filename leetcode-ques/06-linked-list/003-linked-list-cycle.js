/*
Problem: Linked List Cycle
Difficulty: Easy
Companies: Amazon, Microsoft, Facebook, Google, Apple

Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached
again by continuously following the next pointer. Internally, pos is used to denote the
index of the node that tail's next pointer is connected to. Note that pos is not passed
as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
*/

/*
Hinglish Logic Explanation:

Yeh problem detect karne ke liye hai ki linked list mein cycle hai ya nahi.

Floyd's Tortoise and Hare (Slow-Fast Pointer) approach use karenge:
- Do pointers lenge: slow aur fast
- Slow pointer 1 step aage badhega
- Fast pointer 2 steps aage badhega
- Agar cycle hai toh dono pointer ek din zaroor kahin milenge (meet ho jayega)
- Agar cycle nahi hai toh fast ya uska next NULL ho jayega (loop khatam)
- Agar fast NULL pe pahuncha ya fast.next NULL hai toh cycle nahi hai
- Agar slow == fast ho gaya toh cycle hai, true return karo

Yeh approach ka time complexity O(n) hai aur space O(1) hai kyunki hum sirf
do pointers use kar rahe hain extra space ke bina.
*/

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Detects if linked list has a cycle using Floyd's Tortoise and Hare algorithm
 * @param {ListNode} head - head of the linked list
 * @returns {boolean} - true if cycle exists, false otherwise
 */
function hasCycle(head) {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}

/*
Time Complexity: O(n) - At worst, we traverse the list once.
Space Complexity: O(1) - Only two pointers used, constant extra space.
*/

// Helper: create list from array with optional cycle
function createListWithCycle(arr, pos) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    let cycleNode = pos === 0 ? head : null;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
        if (i === pos) cycleNode = current;
    }

    if (pos !== -1 && cycleNode) {
        current.next = cycleNode;
    }

    return head;
}

// Helper: create simple list without cycle
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

// Test Case 1: [3,2,0,-4] with cycle at pos 1 => Expected: true
let head1 = createListWithCycle([3, 2, 0, -4], 1);
console.log("Test 1 - List: [3,2,0,-4], cycle at pos 1");
console.log("Expected: true");
console.log("Got:      " + hasCycle(head1));
console.log("---");

// Test Case 2: [1,2] with cycle at pos 0 => Expected: true
let head2 = createListWithCycle([1, 2], 0);
console.log("Test 2 - List: [1,2], cycle at pos 0");
console.log("Expected: true");
console.log("Got:      " + hasCycle(head2));
console.log("---");

// Test Case 3: [1] with no cycle (pos -1) => Expected: false
let head3 = createList([1]);
console.log("Test 3 - List: [1], no cycle");
console.log("Expected: false");
console.log("Got:      " + hasCycle(head3));
console.log("---");

// Test Case 4: [1,2,3,4,5] with no cycle => Expected: false
let head4 = createList([1, 2, 3, 4, 5]);
console.log("Test 4 - List: [1,2,3,4,5], no cycle");
console.log("Expected: false");
console.log("Got:      " + hasCycle(head4));
console.log("---");

// Test Case 5: empty list => Expected: false
let head5 = createList([]);
console.log("Test 5 - Empty list");
console.log("Expected: false");
console.log("Got:      " + hasCycle(head5));
console.log("---");

module.exports = { hasCycle };
