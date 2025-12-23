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
