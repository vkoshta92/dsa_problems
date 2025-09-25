https://leetcode.com/problems/reverse-linked-list/submissions/1781807634/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev= null;
    let curr= head;
    // while(curr!== null)
    while(curr){
        // break hoga link islite temp me store kr lenge next value ko aur piche side se link krte renge.
        let temp= curr.next;
        curr.next= prev;
        prev = curr;
        curr= temp;
    }
    // head= prev;
    // return head;
    return prev;

};