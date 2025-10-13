
// // https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// one pass solution
var removeNthFromEnd = function (head, n) {
  // add sentinal ad start
  let sentinal = new ListNode();
  sentinal.next = head;
  // move fast pointer ahed by n

  let fast = sentinal;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // move  both pointer untill pointer recahes last node

  let slow = sentinal;

  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  //just delete slow.next
// slow node prev bn jegi jb fast node null hoga kyoki n ka diffrence hai.
  slow.next = slow.next.next;
  return sentinal.next;
};
// // T- O(n)
// // s-O(1)


// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */
// // two pass solution
// var removeNthFromEnd = function(head, n) {
//     let sentinel= new ListNode(); // for  corner cases
//     sentinel.next=head;
// let length=0;
//     while(head){
//         head= head.next;
//         length++;
//     }

//     let prevPos= length-n; // jo dletee krna h uske prev ki value mil jegi phir vha se next easy delete kr dnege.
//     // let deletedIndex= length-n+1
//     let prev= sentinel;
//     for(let i=0;i<prevPos;i++){
//         prev= prev.next;
//     }
//    prev.next= prev.next.next;
//    return sentinel.next;

// };
// // T- O(n)
// // s-O(1)
