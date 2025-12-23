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
