// https://leetcode.com/problems/merge-two-sorted-lists/description/



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
