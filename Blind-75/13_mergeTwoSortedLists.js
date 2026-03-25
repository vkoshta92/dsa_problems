/**
 * ============================================================================
 * PROBLEM: Merge Two Sorted Lists
 * ============================================================================
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge them into one sorted linked list and return its head.
 * 
 * ============================================================================
 * APPROACH: Two Pointers with Dummy Node
 * ============================================================================
 * Logic:
 * 1. Create a dummy node to simplify edge cases
 * 2. Compare heads of both lists
 * 3. Append smaller node to result list
 * 4. Move pointer of chosen list forward
 * 5. Repeat until one list is exhausted
 * 6. Append remaining nodes from other list
 * 
 * Why Dummy Node:
 * - Eliminates need to handle empty result list separately
 * - We can always append to dummy.next without checking if it's null
 * - Final result is dummy.next (skipping the dummy)
 * 
 * Example:
 * - list1: 1 → 3 → 5
 * - list2: 2 → 4 → 6
 * - Merge: 1 → 2 → 3 → 4 → 5 → 6
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n + m)
 * - n = length of list1, m = length of list2
 * - Each node visited exactly once
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using pointers, reusing existing nodes
 * - Not creating new nodes, just rearranging pointers
 * ============================================================================
 */

function mergeTwoLists(l1, l2) {
  // Dummy node to simplify logic
  let dummy = new ListNode(-1);
  let current = dummy;

  // Traverse both lists
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // Attach remaining nodes
  current.next = l1 !== null ? l1 : l2;

  // Return merged list starting after dummy
  return dummy.next;
}
