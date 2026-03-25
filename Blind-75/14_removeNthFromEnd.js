/**
 * ============================================================================
 * PROBLEM: Remove Nth Node From End of List
 * ============================================================================
 * Given the head of a linked list, remove the nth node from the end of the 
 * list and return its head.
 * 
 * ============================================================================
 * APPROACH: Two Pointers with Gap
 * ============================================================================
 * Logic:
 * 1. Use two pointers: fast and slow
 * 2. Move fast pointer n+1 steps ahead
 * 3. This creates a gap of n nodes between fast and slow
 * 4. Move both pointers until fast reaches end
 * 5. slow will be at node BEFORE the one to delete
 * 6. Skip the nth node: slow.next = slow.next.next
 * 
 * Why n+1 Steps:
 * - We need slow to be at node BEFORE the one to delete
 * - When fast is at end (null), gap of n means slow is at position (length-n)
 * - But we need slow at (length-n-1) to skip the target
 * - So we start fast n+1 steps ahead
 * 
 * Why Dummy Node:
 * - Handles edge case: removing head node
 * - If n = length, we need to remove first node
 * - With dummy, slow starts at dummy, which is before head
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass through the linked list
 * - Fast pointer traverses entire list
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using two pointers and a dummy node
 * ============================================================================
 */

function removeNthFromEnd(head, n) {
  // Dummy node to handle edge cases
  let dummy = new ListNode(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  // Move fast pointer n+1 steps ahead
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Move both pointers until fast reaches end
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Remove nth node
  slow.next = slow.next.next;

  return dummy.next;
}
