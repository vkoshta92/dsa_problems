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
