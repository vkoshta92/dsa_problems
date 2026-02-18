/**
 * Question: 41_61_rotate_linked_list (Linked List: Rotate List)
 * 
 * Explanation (Hinglish):
 * Train ko Right side mein rotate karna hai `k` baar. 
 * Iska matlab train ke aakhir ke `k` dabbo ko utha kar engine ke aage lagana hai. 
 * Pehle train ki lambai (length) nikal lo. Phir dekho ki asliyat mein kitne dabbe peeche se aage laane hain (`k % length`). 
 * Train ko us point se tod do aur aakhri dabbe ko puraane engine se jod do.
 * 
 * Logic:
 * 1. Train ki length nikaalo.
 * 2. `k = k % length` karo (befaltu ke chakkaron se bachne ke liye).
 * 3. `fast` pointer ko `k` steps aage bhej do.
 * 4. Phir `slow` aur `fast` dono ko badhao jab tak `fast.next` null na ho jaye.
 * 5. `fast.next = head` (cycle jaisa link), naya head `slow.next` hoga, aur `slow.next = null` (todne ke liye).
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next) return head;

    // ye logic  kth node delete   ke liye hai.isme bs delete nhi kya bs  use null kiya h kyoki vo end hoga.
    let slow = head;
    let fast = head;
    // calculate length
    let length = 0;
    let curr = head;
    while (curr) {
        curr = curr.next;
        length++;
    }

    k = k % length; // AVOID N eccecry rotation

    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    fast.next = head; // fast directly fist vla se jud jgea tbhi head se joda h.
    let newHead = slow.next; // jha se break kiya h vo ab strating me ayega vo new head bn gya ahi
    slow.next = null; // ab slow last node bn gyi kyoki break kr di h
    return newHead;

};

// T- O(n)
// S- O(!)