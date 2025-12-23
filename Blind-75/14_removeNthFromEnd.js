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
