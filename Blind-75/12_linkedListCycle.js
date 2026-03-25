/**
 * ============================================================================
 * PROBLEM: Linked List Cycle
 * ============================================================================
 * Given head of a linked list, determine if the linked list has a cycle.
 * A cycle means some node can be reached again by following next pointers.
 * 
 * ============================================================================
 * APPROACH: Floyd's Cycle Detection (Tortoise and Hare)
 * ============================================================================
 * Logic:
 * 1. Use two pointers: slow (moves 1 step) and fast (moves 2 steps)
 * 2. If there's no cycle, fast pointer will reach null
 * 3. If there's a cycle, fast will eventually meet slow inside the cycle
 * 
 * Why This Works:
 * - Think of a circular track: faster runner will lap slower runner
 * - In a cycle, fast pointer gains 1 step on slow pointer each iteration
 * - Distance between them increases by 1 each step
 * - Eventually, fast catches up to slow (distance = cycle length)
 * 
 * Mathematical Proof:
 * - Let cycle length = C
 * - Fast pointer moves 2 steps, slow moves 1 step
 * - Relative speed = 1 step per iteration
 * - Fast will catch slow in at most C iterations
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - If no cycle: O(n) to reach end
 * - If cycle exists: O(n) to detect (fast catches slow within cycle length)
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only two pointers used
 * ============================================================================
 */

function hasCycle(head) {
  // Two pointers: slow and fast
  let slow = head;
  let fast = head;

  // Traverse while fast pointer can move
  while (fast !== null && fast.next !== null) {
    slow = slow.next;        // move 1 step
    fast = fast.next.next;  // move 2 steps

    // If both meet, cycle exists
    if (slow === fast) return true;
  }

  // If fast reaches null, no cycle
  return false;
}
