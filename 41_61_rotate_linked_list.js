/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next) return head;

// ye logic  kth node delete   ke liye hai.isme bs delete nhi kya bs  use null kiya h kyoki vo end hoga.
    let slow= head;
    let fast= head;
    // calculate length
    let length=0;
    let curr= head;
    while(curr){
        curr= curr.next;
        length++;
    }
    
    k= k%length; // AVOID N eccecry rotation
    
    for(let i=0;i<k;i++){
        fast= fast.next;
    }
    while(fast.next){
        slow= slow.next;
        fast= fast.next;
    }
    fast.next= head; // fast directly fist vla se jud jgea tbhi head se joda h.
    let newHead= slow.next; // jha se break kiya h vo ab strating me ayega vo new head bn gya ahi
    slow.next= null; // ab slow last node bn gyi kyoki break kr di h
    return newHead;

};

// T- O(n)
// S- O(!)