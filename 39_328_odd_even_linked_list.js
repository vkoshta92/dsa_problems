/**
 * Question: 39_328_odd_even_linked_list (Linked List: Odd Even Linked List)
 * 
 * Explanation (Hinglish):
 * Train mein dabbe number 1, 3, 5 (Odd position) ko ek saath aage karna hai 
 * aur number 2, 4, 6 (Even position) ko unke peeche lagana hai. 
 * Hum do nayi mini-train (Odd aur Even) bana lete hain. 
 * Saare Odd ko Odd train mein jodte jao aur Even ko Even mein. 
 * Last mein Odd wali train ke aakhir mein Even wali train ka head jod do.
 * 
 * Logic:
 * 1. `odd` pointer head pe, `even` pointer head.next pe rakho.
 * 2. `evenStart` mein even head save kar lo.
 * 3. Loop: odd ko `odd.next.next` se jodo aur even ko `even.next.next` se.
 * 4. Pointer update karo. Last mein `odd.next = evenStart`.
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
var oddEvenList = function (head) {
    if (!head || !head.next) return head;
    let odd = head;
    let even = head.next;
    let evenStart = even; // make a copy for last odd node connect
    while (odd.next && even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;

    }
    odd.next = evenStart; // conect last  node to even start
    return head;

};
// T- O(n)
// T-O(1)