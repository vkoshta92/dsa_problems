/* Merge Two Sorted Lists | Easy
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Hinglish: Dummy node se result list start karo. Dono current values me se
 * chhota node attach karo; bachi hui list end me attach ho jayegi.
 */
function mergeTwoLists(first, second) {
  const dummy = { value: 0, next: null };
  let tail = dummy;
  while (first !== null && second !== null) {
    if (first.value <= second.value) { tail.next = first; first = first.next; }
    else { tail.next = second; second = second.next; }
    tail = tail.next;
  }
  tail.next = first || second;
  return dummy.next;
}

console.log(mergeTwoLists({ value: 1, next: { value: 3, next: null } }, { value: 2, next: null }).value); // 1
// Time: O(n + m), Space: O(1) excluding the existing nodes.
module.exports = { mergeTwoLists };
