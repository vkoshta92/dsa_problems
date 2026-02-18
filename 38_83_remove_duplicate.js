/**
 * Question: 38_83_remove_duplicate (Linked List: Remove Duplicates from Sorted List)
 * 
 * Explanation (Hinglish):
 * Sorted train hai, matlab ek jaise dabba ek saath hain (jaise 1, 1, 2, 2, 2, 3). 
 * Humein duplicate dabbe nikalne hain. 
 * Hum har dabbe pe khade hoke uske agle dabbe ko dekhte hain. 
 * Agar dono same hain, to agle ko laat maar ke (skip karke) usse agle dabba se jud jate hain.
 * 
 * Logic:
 * 1. Pointer `curr` ko head pe rakho.
 * 2. Loop chalao: Jab tak `curr` aur `curr.next` exist karein.
 * 3. Agar `curr.val === curr.next.val`, to `curr.next = curr.next.next`.
 * 4. Warna `curr` ko aage badhao.
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
var deleteDuplicates = function (head) {
    let curr = head;

    while (curr && curr.next) {
        if (curr.val == curr.next.val) {
            curr.next = curr.next.next
        }
        else {
            curr = curr.next

        }
    }
    return head;
};