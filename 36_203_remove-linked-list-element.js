// https://leetcode.com/problems/remove-linked-list-elements/submissions/1790118248/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // sentinel node  for keep  tracking add ki linkest ke phle
    let sentinal= new ListNode();
    sentinal.next= head;

    let prev= sentinal;
    while(prev && prev.next){
        if(prev.next.val===val){
            prev.next= prev.next.next;  // delete node
        }
        else{
            prev= prev.next;
        }
    }
return sentinal.next;
    
};