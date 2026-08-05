/*
 * Maximum Average Subarray I
 * Difficulty: Easy
 * Companies: Google, Amazon, Microsoft, Facebook
 *
 * Problem Statement:
 * Given an integer array `nums` consisting of `n` elements and an integer `k`,
 * find a contiguous subarray of length `k` that has the maximum average value.
 * Return the maximum average value.
 *
 * Example 1:
 * Input: nums = [1, 12, -5, -6, 50, 3], k = 4
 * Output: 12.75000
 * Explanation: Maximum average is (12 + (-5) + (-6) + 50) / 4 = 51 / 4 = 12.75
 *
 * Example 2:
 * Input: nums = [5], k = 1
 * Output: 5.00000
 * Explanation: Maximum average is 5 / 1 = 5.0
 */

/*
 * ==================== HINGLISH LOGIC EXPLANATION ====================
 *
 * Ye problem ek CLASSIC FIXED SLIDING WINDOW ki hai. Dekho kya ho rha hai:
 *
 * 1. Hame ek fixed size `k` ka window chahiye jo array mein slide kare.
 * 2. Pehle hum pehle `k` elements ka sum nikalte hain - ye hamara "first window" hai.
 * 3. Phir window ko ek-ek position aage slide karte hain:
 *    - Har step mein ek NAYA element window mein aata hai (right side se add hota hai).
 *    - Aur ek PURANA element window se jaata hai (left side se remove hota hai).
 *    - Isliye hum sirf `+nums[i] - nums[i-k]` karte hain - poora sum dobara nahi nikalte.
 * 4. Har step mein maximum sum track karte hain.
 * 5. Finally, maximum sum ko `k` se divide karke average nikalte hain.
 *
 * KEY INSIGHT: Agar har baar poora sum nikalte to O(n*k) hota, but is sliding
 * trick se sirf O(n) mein ho jaata hai kyunki hum sirf ek add aur ek subtract
 * karte hain har step mein.
 *
 * Dry Run: nums = [1, 12, -5, -6, 50, 3], k = 4
 * - Pehla window: [1, 12, -5, -6] => sum = 2, answer = 2
 * - Slide 1: add 50, remove 1 => sum = 51, answer = 51
 * - Slide 2: add 3, remove 12 => sum = 42, answer = 51
 * - Answer = 51 / 4 = 12.75
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
  // Step 1: Pehle k elements ka sum nikalo (first window banao)
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  // Step 2: Initial answer ko first window sum se set karo
  let maxSum = windowSum;

  // Step 3: Window ko slide karo from index k to end
  for (let i = k; i < nums.length; i++) {
    // Naya element add karo (nums[i]) aur purana subtract karo (nums[i-k])
    windowSum += nums[i] - nums[i - k];
    // Maximum sum update karo
    maxSum = Math.max(maxSum, windowSum);
  }

  // Step 4: Maximum average return karo (sum / k)
  return maxSum / k;
}

/*
 * ==================== TIME & SPACE COMPLEXITY ====================
 *
 * Time Complexity: O(n)
 *   - Pehle k elements ka sum: O(k)
 *   - Sliding window loop: O(n - k)
 *   - Total: O(k + n - k) = O(n)
 *
 * Space Complexity: O(1)
 *   - Sirf kuch variables use ho rahe hain (windowSum, maxSum)
 *   - Koi extra array nahi ban raha
 */

// ==================== TEST CASES ====================

// Test 1: Standard case - multiple elements, k=4
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
// Expected: 12.75
// Explanation: [12, -5, -6, 50] ka sum = 51, 51/4 = 12.75

// Test 2: Single element array
console.log(findMaxAverage([5], 1));
// Expected: 5
// Explanation: Sirf ek element hai, wo hi answer hai

// Test 3: All positive numbers
console.log(findMaxAverage([1, 2, 3, 4, 5], 2));
// Expected: 4.5
// Explanation: [4, 5] ka sum = 9, 9/2 = 4.5

// Test 4: All negative numbers - least negative wins
console.log(findMaxAverage([-1, -2, -3, -4, -5], 2));
// Expected: -1.5
// Explanation: [-1, -2] ka sum = -3, -3/2 = -1.5 (least negative pair)

module.exports = { findMaxAverage };
