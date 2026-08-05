/*
 * Sliding Window Maximum
 * Difficulty: Hard
 * Companies: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 *
 * Problem Statement:
 * You are given an array of integers `nums`, there is a sliding window of size
 * `k` which is moving from the very left of the array to the very right.
 * You can only see the `k` numbers in the window. Each time the sliding window
 * moves right by one position. Return the max sliding window.
 *
 * Example 1:
 * Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
 * Output: [3, 3, 5, 5, 6, 7]
 * Explanation:
 *   Window position        | Max
 *   [1, 3, -1]             | 3
 *   [3, -1, -3]            | 3
 *   [-1, -3, 5]            | 5
 *   [-3, 5, 3]             | 5
 *   [5, 3, 6]              | 6
 *   [3, 6, 7]              | 7
 *
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 * Explanation: Sirf ek element hai, wo hi answer hai.
 */

/*
 * ==================== HINGLISH LOGIC EXPLANATION ====================
 *
 * Ye problem MONOTONIC DEQUE approach se solve hoti hai. Ye bahut powerful
 * technique hai sliding window maximum ke liye. Dekho kya ho rha hai:
 *
 * 1. Ek DEQUE (double-ended queue) maintain karte hain jo INDICES store karta hai.
 * 2. Deque hamesha DECREASING ORDER mein rehta hai - matlab deque ka front
 *    (sabse purana index) hamesha current window ka MAXIMUM element hoga.
 *
 * 3. Har naye element ke liye:
 *    a. Pehle check karo ki deque ke peeche jo element hai wo current window
 *       se bahar to nahi gaya (index < i - k + 1). Agar gaya to pop karo.
 *    b. Phir deque ke peeche se wo saare elements hatao jo current element se
 *       CHHOTE ya BARABAR hain. Kyunki agar current element bada hai to ye
 *       chhote elements kabhi maximum nahi ban sakte (current element unse
 *       zyada der tak window mein rahega).
 *    c. Current index ko deque mein push karo.
 *    4. Jab window puri ho jaaye (i >= k - 1) to deque ka FRONT (sabse purana
 *       index) current window ka maximum hai - use answer mein daalo.
 *
 * KEY INSIGHT: Hum chhote elements ko isliye remove karte hain kyunki agar
 * current element bada hai to wo un chhote elements ko SUPERSEDE karta hai -
 * jab tak current element window mein hai, chhote elements maximum kabhi nahi
 * ban sakte.
 *
 * DRY RUN: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
 * - i=0: deque=[0], nums[0]=1
 * - i=1: nums[1]=3 > nums[0]=1, pop 0. deque=[1], nums[1]=3
 * - i=2: nums[2]=-1, deque=[1,2]. i>=2 => max=nums[1]=3
 * - i=3: deque[0]=1, window start=1, ok. nums[3]=-3, deque=[1,2,3]. max=3
 * - i=4: deque[0]=1, window start=2, 1<2 pop front. nums[4]=5 > nums[3]=-3,nums[2]=-1,nums[1]=3
 *         pop all. deque=[4]. max=nums[4]=5
 * - i=5: nums[5]=3, deque=[4,5]. max=nums[4]=5
 * - i=6: deque[0]=4, window start=4, ok. nums[6]=6 > nums[5]=3, pop 5. deque=[4,6]
 *         nums[6]=6 > nums[4]=5, pop 4. deque=[6]. max=nums[6]=6
 * - i=7: deque[0]=6, window start=5, ok. nums[7]=7 > nums[6]=6, pop 6. deque=[7]. max=7
 * - Answer: [3, 3, 5, 5, 6, 7]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
  const deque = []; // Indices store karega decreasing order mein
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    // Step 1: Window se bahar jaane wale indices hato
    // deque ka front index < i - k + 1 hai to wo window se bahar hai
    while (deque.length && deque[0] < i - k + 1) {
      deque.shift(); // Front se hato (oldest index)
    }

    // Step 2: Current element se chhote saare elements hato peeche se
    // Kyunki ye chhote elements kabhi maximum nahi ban sakte
    while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop(); // Peeche se hato (chhota element)
    }

    // Step 3: Current index ko deque mein daalo
    deque.push(i);

    // Step 4: Jab window puri ho jaaye to maximum (deque ka front) answer mein daalo
    if (i >= k - 1) {
      answer.push(nums[deque[0]]);
    }
  }

  return answer;
}

/*
 * ==================== TIME & SPACE COMPLEXITY ====================
 *
 * Time Complexity: O(n)
 *   - Har element ek baar deque mein push hota hai aur ek baar pop hota hai.
 *   - Total operations: O(2n) = O(n)
 *   - shift() operation O(k) ho sakti hai worst case mein, but total shifts
 *     at most n hain, so amortized O(n)
 *
 * Space Complexity: O(k)
 *   - Deque mein at most k indices hote hain (window size)
 *   - Answer array O(n) hai par wo output hai, space analysis mein count nahi hota
 */

// ==================== TEST CASES ====================

// Test 1: Standard case with k=3
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// Expected: [3, 3, 5, 5, 6, 7]
// Explanation: Windows: [1,3,-1]→3, [3,-1,-3]→3, [-1,-3,5]→5, [-3,5,3]→5, [5,3,6]→6, [3,6,7]→7

// Test 2: Single element
console.log(maxSlidingWindow([1], 1));
// Expected: [1]
// Explanation: Sirf ek window hai jo [1] hai

// Test 3: k equals array length (full array is one window)
console.log(maxSlidingWindow([1, 2, 3, 4, 5], 5));
// Expected: [5]
// Explanation: Poora array ek window hai, maximum = 5

// Test 4: All same elements
console.log(maxSlidingWindow([4, 4, 4, 4, 4], 2));
// Expected: [4, 4, 4, 4]
// Explanation: Har window mein sab 4 hain, maximum = 4

module.exports = { maxSlidingWindow };
