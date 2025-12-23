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
