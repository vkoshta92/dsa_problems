/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // first middle element find
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second part
  //  slow middle element h vhs se reverse krna h
  let curr = slow;
  let prev = null;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  //checking palindrome
  let firstList = head;
  let secondList = prev; // kyiki reverse hui h prev e strt hogi
  while (secondList) {
    if (firstList.val !== secondList.val) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
};

// T- O(n)
// S-O(1)