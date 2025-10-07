// https://leetcode.com/problems/odd-even-linked-list/description/
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
var oddEvenList = function(head) {
    if(!head || !head.next) return head;
    let odd= head;
    let even= head.next;
    let evenStart= even; // make a copy for last odd node connect
    while(odd.next && even.next){
        odd.next= odd.next.next;
        even.next= even.next.next;
        odd= odd.next;
        even= even.next;

    }
    odd.next= evenStart; // conect last  node to even start
    return head;
    
};
// T- O(n)
// T-O(1)