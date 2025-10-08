// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let ans= new ListNode();
    let copyAnsNode= ans;
    let carry=0;
    while(l1 || l2 || carry){ // agar ak bhi axist h 0 nhi h to chlega
        let sum= (!l1?0:l1.val)+ (!l2?0:l2.val)+carry; // agar l1 me l2 me digit km jyda ho to  l1 agar na exist kr to use 0 ho hi to l1.val ho. same l2 me
        carry= Math.floor(sum/10);
        let digit=sum%10;
        let newNode= new ListNode(digit); // jo digit ayega vo node me add jega
        ans.next=newNode; // ans node se lik kr denge us digit node ko
        ans= ans.next;

        l1= l1 && l1.next; // agar l1 exit krna h to l1.next ho
        l2= l2&& l2.next;// agar l2 exist kre to l2.next ho

    }
return copyAnsNode.next; // kyoki ans node movie kr rhih to iski copy bna ke rkhi h usse link krenge tki puri link list aye.
    
};