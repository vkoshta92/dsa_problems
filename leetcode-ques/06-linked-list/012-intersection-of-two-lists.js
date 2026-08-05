/*
|--------------------------------------------------------------------------
| Problem: Intersection of Two Linked Lists
| Difficulty: Easy
| Companies: Amazon, Google, Microsoft, Meta, Apple, Bloomberg, Uber
| LeetCode: #160
|--------------------------------------------------------------------------
|
| Problem Statement:
| Given the heads of two singly linked-lists headA and headB, return the
| node at which the two lists intersect. If the two linked lists have no
| intersection at all, return null.
|
| The lists may have different lengths before the intersection point.
|
| Follow-up: Can you find the intersection with O(m + n) time and O(1) space?
|
| Example 1:
| A:       a1 → a2 ↘
|                    c1 → c2 → c3
| B:  b1 → b2 → b3 ↗
| Output: Reference to node with value c1
|
| Example 2:
| A:   2 → 6 → 4
| B:        1 → 5
| Output: null (no intersection)
|
| Example 3:
| A:   4 → 1 ↘
|              8 → 4 → 5
| B:   5 → 6 → 1 → 8 ↗
| Wait—this is Example 3 from LeetCode. Actually:
| A: 4→1→8→4→5, B: 5→6→1→8→4→5. Intersection at value 8.
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, assume karo do rasste hain alag-alag starting points se jinko ek
| common point (intersection) par milna hai. Dono ki lengths alag ho sakti hain.
|
| Approach: Two Pointers — Ye wala bilkul clever trick hai! 🎯
| -------------------------------------------------------------
|
| 1. Do pointers rakho: pointerA (headA se start), pointerB (headB se start)
|
| 2. Dono pointers ko ek-ek step aage badhao har iteration mein.
|
| 3. Jab pointerA list-A ke end par pahunch jaaye (null), toh use headB
|    par point kar do. Same way, jab pointerB null ho jaaye, use headA
|    par point kar do.
|
| 4. Dono pointers eventually intersection node par milenge. Kyun?
|
|     Let lenA = a + c (a = unique part of A, c = common part)
|     Let lenB = b + c (b = unique part of B, c = common part)
|
|     pointerA travels: a + c + b (A ka unique + common + B ka unique)
|     pointerB travels: b + c + a (B ka unique + common + A ka unique)
|
|     Dono same distance travel karenge → intersection par milenge!
|
| 5. Agar intersection hai hi nahi, toh dono null par milenge (c = 0).
|
| Visual Walkthrough:
| -------------------
| A: 4 → 1 → 8 → 4 → 5 → null
| B: 5 → 6 → 1 → 8 → 4 → 5 → null
|
| Start: pA=4, pB=5
| Step 1: pA=1, pB=6
| Step 2: pA=8, pB=1
| Step 3: pA=4, pB=8
| Step 4: pA=5, pB=4
| Step 5: pA=null → switch to B head (5), pB=5
| Step 6: pA=6, pB=null → switch to A head (4)
| Step 7: pA=1, pB=1
| Step 8: pA=8, pB=8 ✓ Intersection found!
|
| Kitna cool hai na? Dono pointers exact same distance travel karte hain.
|
| Alternative: Length-based approach bhi hai — pehle lengths count karo,
| longer list ka pointer extra length jitna aage badha kar start karo,
| phir dono ko ek saath chalao. But two-pointer switch wala zyada elegant hai.
|--------------------------------------------------------------------------
*/

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
    let pointerA = headA;
    let pointerB = headB;

    while (pointerA !== pointerB) {
        pointerA = pointerA === null ? headB : pointerA.next;
        pointerB = pointerB === null ? headA : pointerB.next;
    }

    return pointerA;
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(m + n)
| - pointerA travels: lenA + lenB.
| - pointerB travels: lenB + lenA.
| - Worst case: dono poori lists plus switches traverse karte hain.
|
| Space Complexity: O(1)
| - Sirf do pointers, koi extra data structure nahi.
|--------------------------------------------------------------------------
*/

// ===================== TEST CASES =====================

console.log("=== Intersection of Two Linked Lists ===");
console.log("");

// Helper: create a node
function ListNode(value, next) {
    return { value: value, next: next || null };
}

// Test Case 1: Lists intersect at 8
console.log("Test 1: A=[4,1,8,4,5], B=[5,6,1,8,4,5], intersect at 8");
const common1 = ListNode(8, ListNode(4, ListNode(5)));
const headA1 = ListNode(4, ListNode(1, common1));
const headB1 = ListNode(5, ListNode(6, ListNode(1, common1)));
const result1 = getIntersectionNode(headA1, headB1);
console.log("Expected: 8");
console.log("Output:", result1 ? result1.value : null);
console.log("");

// Test Case 2: No intersection
console.log("Test 2: A=[2,6,4], B=[1,5], no intersection");
const headA2 = ListNode(2, ListNode(6, ListNode(4)));
const headB2 = ListNode(1, ListNode(5));
const result2 = getIntersectionNode(headA2, headB2);
console.log("Expected: null");
console.log("Output:", result2 ? result2.value : null);
console.log("");

// Test Case 3: Same length, intersect at first common node
console.log("Test 3: A=[1,9,1,2,4], B=[3,2,4], intersect at 2");
const common3 = ListNode(2, ListNode(4));
const headA3 = ListNode(1, ListNode(9, ListNode(1, common3)));
const headB3 = ListNode(3, common3);
const result3 = getIntersectionNode(headA3, headB3);
console.log("Expected: 2");
console.log("Output:", result3 ? result3.value : null);
console.log("");

// Test Case 4: Both lists are the same
console.log("Test 4: A=[1,2,3], B=[1,2,3], intersect at 1");
const common4 = ListNode(1, ListNode(2, ListNode(3)));
const result4 = getIntersectionNode(common4, common4);
console.log("Expected: 1");
console.log("Output:", result4 ? result4.value : null);
console.log("");

module.exports = { getIntersectionNode };
