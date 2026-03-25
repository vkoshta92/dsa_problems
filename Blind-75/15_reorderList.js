/**
 * ============================================================================
 * PROBLEM: Reorder List
 * ============================================================================
 * You are given the head of a singly linked list. Reorder the list to:
 * L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...
 * You may not modify the values in the list's nodes.
 * 
 * ============================================================================
 * APPROACH: Three Steps (Find Middle + Reverse + Merge)
 * ============================================================================
 * Logic:
 * The problem can be broken into three steps:
 * 
 * Step 1: Find Middle of List
 * - Use slow/fast pointer technique
 * - When fast reaches end, slow is at middle
 * 
 * Step 2: Reverse Second Half
 * - Reverse the second half of the list
 * - Now we have two lists: first half and reversed second half
 * 
 * Step 3: Merge Two Lists Alternately
 * - Take one node from first list, then one from second
 * - Repeat until all nodes merged
 * 
 * Example: 1 → 2 → 3 → 4 → 5
 * - Find middle: 3
 * - Split: 1 → 2 → 3 and 4 → 5
 * - Reverse second: 5 → 4
 * - Merge: 1 → 5 → 2 → 4 → 3
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Find middle: O(n/2)
 * - Reverse second half: O(n/2)
 * - Merge: O(n/2)
 * - Total: O(n)
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using pointers, no extra data structures
 * ============================================================================
 */

function reorderList(head) {
  if (!head || !head.next) return;

  // STEP 1: Find middle of linked list
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // STEP 2: Reverse second half
  let prev = null;
  let curr = slow.next;
  slow.next = null; // break list

  while (curr) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  // STEP 3: Merge both halves
  let first = head;
  let second = prev;

  while (second) {
    let t1 = first.next;
    let t2 = second.next;

    first.next = second;
    second.next = t1;

    first = t1;
    second = t2;
  }
}
