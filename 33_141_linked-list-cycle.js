
// https://leetcode.com/problems/linked-list-cycle/
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
let seenNodes= new Set();
    // cycleic me null kbhi nhi hota hai.
    //and node value repeat ho jae to 
  let curr = head;
  while(curr){
    if(seenNodes.has(curr)){
        return true;
    }
    seenNodes.add(curr);
    curr= curr.next;
  }

return false;//cycle nhi h
    
};