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
    // jab emppty list ho 1 element ho
if(!head || !head.next) return head;

let dummy= new ListNode();
dummy.next= head;

let prev= dummy;
let curr= head;
let n=  curr.next;

while(curr && n){ // jb curr and n dono hai tb tk kyoki swap tbhi krna h.
    
    prev.next= n;
    curr.next= n.next;
    n.next= curr;
    
    // agle swap ke liye  swap kr lenge.
    prev= curr;
    curr= prev.next;
    n= curr && curr.next; // curr null na ho  tn curr curr.next ho jae.

}
    return dummy.next;

    
};

// Time-O(n)-
// space O(1)-