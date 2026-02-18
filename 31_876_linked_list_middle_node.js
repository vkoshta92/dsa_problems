/**
 * Question: 31_876_linked_list_middle_node (Linked List: Middle of the Linked List)
 * 
 * Explanation (Hinglish):
 * Train ka beech wala dabba kaise dhundein? Simple! Do log race lagate hain. 
 * Ek halke chalta hai (Slow) aur ek tez (Fast). 
 * Fast wala Slow se double speed pe bhagta hai. 
 * Jab Fast wala train ke aakhri dabbe pe pahunchega, to Slow wala thik train ke beech mein hoga!
 * 
 * Logic:
 * 1. Do pointers lo: `slow` aur `fast`, dono head pe rakho.
 * 2. Loop chalao jab tak `fast` aur `fast.next` null na ho jayein.
 * 3. Slow ko 1 kadam aage badhao (`slow.next`).
 * 4. Fast ko 2 kadam aage badhao (`fast.next.next`).
 * 5. Last mein `slow` hi beech wala dabba hoga.
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
var middleNode = function (head) {
    let slow = head;
    let fast = head;
    // let slow= fast= head;
    // even me fastka next null ho jta h 
    // odd me fast null ho jta h vo 2 2 jump kr rha h 
    // slow pointer ak jump kr rha h fast 2 jump kar rha hai.
    // dono trh se likh skte h fast exist kr rha h null nhi hona chiye fast.next null nhi hona chiye exist kr rha h.
    // while(fast!== null && fast.next!==null){
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};