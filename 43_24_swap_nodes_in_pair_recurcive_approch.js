/**
 * Question: 43_24_swap_nodes_in_pair_recurcive_approch (Linked List: Swap Nodes in Pairs - Recursive)
 * 
 * Explanation (Hinglish):
 * Do dabbe swap karne ka recursive tarika. 
 * Hum pehle do dabbe (Left, Right) pakadte hain. Hum kehte hain: 
 * "Right ka agla dabba wahi hoga jo baki ki train ko swap karke result aayega". 
 * Aur Right ko Left se jod dete hain. Phir Right ko naya 'head' maan ke return kar dete hain.
 * 
 * Logic:
 * 1. Base case: Agar head ya head.next null hai, to wo return karo.
 * 2. `left = head`, `right = head.next`.
 * 3. `left.next = swapPairs(right.next)` (baaki train swap karwa ke laao).
 * 4. `right.next = left` (current do swap kar liya).
 * 5. `right` return karo.
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

    // phle sbki value nikali phir ulta return kiya. top side ki trf\
    if (!head || !head.next) return head;

    let left = head;
    let right = head.next;

    left.next = swapPairs(right.next); // agale part jo rrtune hog use left ke node ke link  kr denge.
    right.next = left;// right ko left se kr denge is trf ye process chlta rhga.
    return right;


};


