/* Problem: Reverse Linked List | Difficulty: Easy
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Reverse a singly linked list in-place and return its new head.
 * Hinglish: Current node ka next pehle save karo, next ko previous par point
 * karo, phir previous/current ko aage move karo.
 */
function reverseList(head) {
  let previous = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}

const nodes = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
console.log(reverseList(nodes).value); // 3
// Time: O(n), Space: O(1)

module.exports = { reverseList };
