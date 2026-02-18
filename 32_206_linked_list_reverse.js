/**
 * Question: 32_206_linked_list_reverse (Linked List: Reverse Linked List)
 * 
 * Explanation (Hinglish):
 * Train ke dabbon ki direction ulti karni hai. 
 * Jo engine hai use aakhri dabba banana hai, aur jo aakhri hai use engine.
 * Hum har dabbe pe jaake uska arrow (link) piche wale dabbe ki taraf mod dete hain. 
 * Par dhyan rakho, agle dabbe ka pata pehle hi save kar lo warna train toot jayegi!
 * 
 * Logic:
 * 1. Teen cheezein yaad rakho: `prev` (null), `curr` (head).
 * 2. Loop chalao jab tak `curr` khatam na ho jaye.
 * 3. Agla dabba `temp` mein save karo (`curr.next`).
 * 4. Current dabbe ka link piche (`prev`) mod do.
 * 5. Ab `prev` ko `curr` banao aur `curr` ko `temp`.
 * 6. Last mein `prev` hi naya head hoga.
 */

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
var reverseList = function (head) {
    let prev = null;
    let curr = head;
    // while(curr!== null)
    while (curr) {
        // break hoga link islite temp me store kr lenge next value ko aur piche side se link krte renge.
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    // head= prev;
    // return head;
    return prev;

};