
// https://leetcode.com/problems/linked-list-cycle/
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// var hasCycle = function(head) {
// let seenNodes= new Set();
//     // cycleic me null kbhi nhi hota hai.
//     //and node value repeat ho jae to 
//   let curr = head;
//   while(curr){
//     if(seenNodes.has(curr)){
//         return true;
//     }
//     seenNodes.add(curr);
//     curr= curr.next;
//   }

// return false;
    
// };


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */



/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
// Floyd’s Cycle Detection algorthim;
if (!head) return false; // head null hai empty h node list
let slow= head;
let fast= head.next;
while(slow!== fast){
    if(fast == null || fast.next== null){
        return false;
    }
    slow= slow.next;
    fast= fast.next.next;
}
return true;

};

// T- O(n);
// S-O(1)