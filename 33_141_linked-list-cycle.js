/**
 * Question: 33_141_linked-list-cycle (Linked List: Linked List Cycle)
 * 
 * Explanation (Hinglish):
 * Check karna hai ki train kahin gol-gol chakkar (Cycle) to nahi laga rahi? 
 * Iske liye hum phir se wahi race karwayenge: Slow aur Fast pointers ki. 
 * Agar train mein cycle hai, to Fast wala ghum ke wapas aayega aur kahin na kahin Slow wale se mil jayega. 
 * Agar koi cycle nahi hai, to Fast wala train ke bahar nikal jayega (null).
 * 
 * Logic:
 * 1. Do pointers: `slow` (speed 1) aur `fast` (speed 2).
 * 2. Loop chalao. Har baar slow ko 1 dabba aage aur fast ko 2 dabbe aage badhao.
 * 3. Agar `slow === fast` ho jaye, to matlab cycle hai (true).
 * 4. Agar fast null tak pahunch jaye, to matlab koi cycle nahi hai (false).
 */
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// var hasCycle = function(head) {
// let seenNodes= new Set();
//     // cycleic me null kbhi nhi hota hai.
//     //and node value repeat ho jae to 
//   let curr = head;
//   while(curr){
//     if(seenNodes.has(curr)){
//         return true;
//     }
//     seenNodes.add(curr);
//     curr= curr.next;
//   }

// return false;

// };


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */



/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // Floyd’s Cycle Detection algorthim;
    if (!head) return false; // head null hai empty h node list
    let slow = head;
    let fast = head.next;
    while (slow !== fast) {
        if (fast == null || fast.next == null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;

};

// T- O(n);
// S-O(1)