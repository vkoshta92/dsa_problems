/**
 * ============================================================================
 * PROBLEM: Reverse Linked List
 * ============================================================================
 * Given the head of a singly linked list, reverse the list, and return 
 * the reversed list.
 * 
 * ============================================================================
 * APPROACH: Iterative with Three Pointers
 * ============================================================================
 * Logic:
 * 1. Use three pointers: prev, curr, nextTemp
 * 2. For each node, reverse its pointer to point to previous node
 * 3. Move all pointers forward one step
 * 4. Continue until end of list
 * 
 * Pointer Movement:
 * - prev: starts at null (new tail's next)
 * - curr: starts at head (current node being processed)
 * - nextTemp: stores next node before breaking link
 * 
 * Step by Step:
 * 1. Save next node (nextTemp = curr.next)
 * 2. Reverse pointer (curr.next = prev)
 * 3. Move prev forward (prev = curr)
 * 4. Move curr forward (curr = nextTemp)
 * 
 * Example: 1 → 2 → 3 → null
 * - After: null ← 1 ← 2 ← 3 (prev points to 3, new head)
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass through the linked list
 * - Visit each node exactly once
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using three pointers regardless of list size
 * ============================================================================
 */

// Definition for singly-linked list.
// function ListNode(val, next = null) {
//   this.val = val;
//   this.next = next;
// }


function reverseList(head) {
  // Previous node (initially null)
  let prev = null;

  // Current node starts from head
  let curr = head;

  // Traverse the list
  while (curr !== null) {
    // Store next node
    let nextTemp = curr.next;

    // Reverse current node's pointer
    curr.next = prev;

    // Move prev and curr one step forward
    prev = curr;
    curr = nextTemp;
  }

  // Prev will be new head
  return prev;
}
