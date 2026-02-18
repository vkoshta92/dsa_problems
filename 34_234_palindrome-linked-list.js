/**
 * Question: 34_234_palindrome-linked-list (Linked List: Palindrome Linked List)
 * 
 * Explanation (Hinglish):
 * Palindrome matlab jo aage se aur peeche se same dikhe (jaise 'RACECAR'). 
 * Train mein ye check karne ke liye hum pehle beech wala dabba nikalte hain. 
 * Phir train ke second half wale part ko ulta (reverse) kar dete hain. 
 * Ab pehle dabbe aur dusre part ke pehle dabbe ko compare karte hain, agar sab same hai to palindrome hai!
 * 
 * Logic:
 * 1. Slow/Fast pointer use karke middle dabba dhundo.
 * 2. Middle se lekar aakhri tak ki train ko reverse kar do.
 * 3. Ab do pointers lo: ek shuruat se (`head`) aur ek reverse wale part ke shuruat se (`prev`).
 * 4. Dono ki values compare karte jao jab tak second list khatam na ho jaye.
 */
 * function ListNode(val, next) {
 * this.val = (val === undefined ? 0 : val)
    * this.next = (next === undefined ? null : next)
      * }
  */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // first middle element find
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second part
  //  slow middle element h vhs se reverse krna h
  let curr = slow;
  let prev = null;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  //checking palindrome
  let firstList = head;
  let secondList = prev; // kyiki reverse hui h prev e strt hogi
  while (secondList) {
    if (firstList.val !== secondList.val) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
};

// T- O(n)
// S-O(1)