// https://leetcode.com/problems/swap-nodes-in-pairs/description/

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
var swapPairs = function(head) {
    
    // phle sbki value nikali phir ulta return kiya. top side ki trf\
    if(!head || !head.next) return head;

let left= head;
let right= head.next;

left.next= swapPairs(right.next); // agale part jo rrtune hog use left ke node ke link  kr denge.
right.next= left;// right ko left se kr denge is trf ye process chlta rhga.
return right;


};


