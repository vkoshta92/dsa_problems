/**
 * Question: 36_203_remove-linked-list-element (Linked List: Remove Linked List Elements)
 * 
 * Explanation (Hinglish):
 * Train mein se kuch khaas dabbo ko nikalna hai (jaise jin dabbo pe '7' likha ho).
 * Hum train ke engine se shuru karte hain. Agar agla dabba '7' hai, to hum use skip kar dete hain 
 * aur apna link usse agle dabbe se jod dete hain. 
 * Isme hum ek farzi engine (Sentinal/Dummy node) aage laga dete hain taki agar asli engine hi delete karna ho to koi mushkil na ho.
 * 
 * Logic:
 * 1. Ek `sentinal` node banao aur use `head` se pehle lagao.
 * 2. Pointer `prev` ko `sentinal` pe rakho.
 * 3. Loop chalao: agar `prev.next.val` target value ke barabar hai, to link tod ke use skip karo (`prev.next = prev.next.next`).
 * 4. Warna `prev` ko aage badhao.
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    // sentinel node  for keep  tracking add ki linkest ke phle
    let sentinal = new ListNode();
    sentinal.next = head;

    let prev = sentinal;
    while (prev && prev.next) {
        if (prev.next.val === val) {
            prev.next = prev.next.next;  // delete node
        }
        else {
            prev = prev.next;
        }
    }
    return sentinal.next;

};