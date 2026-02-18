/**
 * Question: 41_21_merge_two_sorted_lists (Linked List: Merge Two Sorted Lists)
 * 
 * Explanation (Hinglish):
 * Do sorted trains ko milaake ek badi sorted train banani hai. 
 * Hum dono trains ke engine pe khade ho jate hain. 
 * Jis train ka engine wala dabba chota hai, use apni nayi train mein pehle jodte hain, 
 * phir us train mein ek kadam aage badh jate hain. 
 * Ye tab tak karte hain jab tak dono mein se koi ek train khatam na ho jaye. 
 * Jo bchi hui train hai, use seedha apni nayi train ke peeche jod dete hain.
 * 
 * Logic:
 * 1. Ek dummy node `curr` banao jahan se nayi train shuru hogi.
 * 2. `dummyNode` mein `curr` ka start save kar lo.
 * 3. While loop: jab tak `l1` aur `l2` dono exist karein, unke values compare karo.
 * 4. Choti value wale node ko `curr.next` se jodo aur us list mein aage badho.
 * 5. Last mein agar koi list bach jaye (`!l1` ya `!l2`), use `curr.next` se direct jodo.
 */



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
   
let curr= new ListNode();// dummy node use kr li start krne ke liye phle  start krne ke liye dhundh rhe the kha se strt krn ah an dummy node se strt kerenge;
let dummyNode=curr;;

    while(l1 && l2){ // agar ak bhi null ho jega to 
        if(l1.val<l2.val){
            curr.next= l1;
            l1= l1.next;
        }
        else{
            curr.next= l2;
            l2= l2.next;
        }
        curr= curr.next;
    }
    if(!l1) curr.next=l2;
        
    
    if(!l2) curr.next=l1;
        
    
    return dummyNode.next; // currr ko save kr liya
    
};



// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function(l1, l2) {
//     if(!l1) return l2;
//     if(!l2) return l1;
//     let curr= null;

//     if(l1.val<l2.val){ // curr find krne ke liye kha se start krenge
//         curr= l1;
//         l1= l1.next;
//     }
//     else{
//         curr= l2;
//         l2= l2.next;
//     }
//     let copyCurr= curr;

//     while(l1 && l2){ // agar ak bhi null ho jega to 
//         if(l1.val<l2.val){
//             curr.next= l1;
//             l1= l1.next;
//         }
//         else{
//             curr.next= l2;
//             l2= l2.next;
//         }
//         curr= curr.next;
//     }
//     if(!l1) curr.next=l2;
        
    
//     if(!l2) curr.next=l1;
        
    
//     return copyCurr; // currr ko save kr liya
    
// };
