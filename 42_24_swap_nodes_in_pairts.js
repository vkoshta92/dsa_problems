/**
 * Question: 42_24_swap_nodes_in_pairts (Linked List: Swap Nodes in Pairs)
 * 
 * Explanation (Hinglish):
 * Train ke dabbon ko do-do ke jode (pairs) mein swap karna hai. 
 * Jaise 1-2-3-4 ban jayega 2-1-4-3. 
 * Hum har baar do dabbe pakadte hain, unka link aapas mein badalte hain aur piche wale se sahi tarah jodte hain. 
 * Isme bhi dummy node help karti hai swaps ko handle karne mein.
 * 
 * Logic:
 * 1. Dummy node banao head se pehle.
 * 2. `prev` dummy pe, `curr` head pe, aur `n` uske agle pe rakho.
 * 3. `prev.next = n`, `curr.next = n.next`, `n.next = curr` (is se swap ho jayega).
 * 4. Phir `prev`, `curr` aur `n` ko agle pair ke liye aage badhao.
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
var swapPairs = function (head) {
    // jab emppty list ho 1 element ho
    if (!head || !head.next) return head;

    let dummy = new ListNode();
    dummy.next = head;

    let prev = dummy;
    let curr = head;
    let n = curr.next;

    while (curr && n) { // jb curr and n dono hai tb tk kyoki swap tbhi krna h.

        prev.next = n;
        curr.next = n.next;
        n.next = curr;

        // agle swap ke liye  swap kr lenge.
        prev = curr;
        curr = prev.next;
        n = curr && curr.next; // curr null na ho  tn curr curr.next ho jae.

    }
    return dummy.next;


};

// Time-O(n)-
// space O(1)-