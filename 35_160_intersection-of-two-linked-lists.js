/**
 * Question: 35_160_intersection-of-two-linked-lists (Linked List: Intersection of Two Linked Lists)
 * 
 * Explanation (Hinglish):
 * Do alag-alag trains hain jo raste mein ek doosre se jud jati hain aur aage ek hi track pe chalti hain. 
 * Humein wo point dhundna hai jahan dono judti hain.
 * Ek simple tarika ye hai ki ek train ke saare dabbe ek diary (Set) mein note kar lo. 
 * Phir dusri train ke dabbo ko diary se match karo. Jo pehla dabba match ho jaye, wahi junction hai!
 * 
 * Logic:
 * 1. Ek `Set` banao.
 * 2. Pehli train (`headB`) ke har node ko Set mein daal do.
 * 3. Dusri train (`headA`) ko traverse karo aur check karo agar koi node Set mein pehle se hai.
 * 4. Agar mil jaye to wo intersection node return karo, warna null.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    //put all nodes of HeadB inside a set
    let store = new Set();
    while (headB) {
        store.add(headB);
        headB = headB.next;
    }
    // check HeadA each element present in set
    while (headA) {
        if (store.has(headA)) {
            return headA;
        }
        headA = headA.next;
    }

    return null;
};