// https://leetcode.com/problems/middle-of-the-linked-list/description/

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
var middleNode = function(head) {
    let slow= head;
    let fast= head;
    // let slow= fast= head;
    // even me fastka next null ho jta h 
    // odd me fast null ho jta h vo 2 2 jump kr rha h 
    // slow pointer ak jump kr rha h fast 2 jump kar rha hai.
    // dono trh se likh skte h fast exist kr rha h null nhi hona chiye fast.next null nhi hona chiye exist kr rha h.
    // while(fast!== null && fast.next!==null){
while(fast && fast.next){
        slow= slow.next;
        fast= fast.next.next;
    }
    return slow;
};