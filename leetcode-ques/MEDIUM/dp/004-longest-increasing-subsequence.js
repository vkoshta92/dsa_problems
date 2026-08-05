/*
 * ==========================================
 * Problem: Longest Increasing Subsequence
 * Difficulty: Medium
 * Companies: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * LeetCode: #300
 * ==========================================
 *
 * Problem Statement:
 * Given an integer array nums, return the length of the longest strictly
 * increasing subsequence.
 *
 * Example 1:
 * Input: nums = [10, 9, 2, 5, 3, 7, 101, 18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2, 3, 7, 101],
 *              therefore the length is 4.
 *
 * Example 2:
 * Input: nums = [0, 1, 0, 3, 2, 3]
 * Output: 4
 * Explanation: The longest increasing subsequence is [0, 1, 2, 3],
 *              therefore the length is 4.
 *
 * Example 3:
 * Input: nums = [7, 7, 7, 7, 7, 7, 7]
 * Output: 1
 * Explanation: The longest increasing subsequence is [7],
 *              therefore the length is 1.
 *
 * Note: Subsequence ke elements array mein consecutive nahi hone chahiye,
 *       but order maintain hona chahiye.
 */

/*
 * ==========================================
 * Hinglish Logic Explanation (Detailed)
 * ==========================================
 *
 * Bhai, yeh problem hai longest increasing subsequence dhundhne ki.
 * Do approaches hain: O(n^2) DP aur O(n log n) Binary Search.
 * Hum yahan Binary Search wala efficient approach dekh rahe hain.
 *
 * Approach: Patience Sorting / Binary Search on Tails Array
 *
 * Concept: Ek "tails" array maintain karte hain.
 *   tails[i] ka matlab hai: "LIS of length (i+1) ki sabse chhoti possible ending value kya hai?"
 *
 * Step 1: Ek empty tails array banao.
 *
 * Step 2: Har number num ko array se traverse karo:
 *   - Agar num tails ke last element se bada hai, toh seedha append karo.
 *     (Kyunki humara LIS badh raha hai)
 *   - Agar num chhota ya barabar hai, toh binary search se dhundho ki
 *     tails mein kis jagah yeh number rakh sakte hain.
 *     (Us jagah ka purana value replace kar do kyunki humein chhoti
 *     ending value rakhni hai us length ke liye)
 *
 * Step 3: Binary Search ka use:
 *   - Tails sorted array hota hai hamesha!
 *   - Hum dhundhte hain ki num kis position par aa sakta hai
 *     (first element jo num se bada ya barabar ho)
 *   - Us position par num rakh do (replace ya append)
 *
 * Step 4: Jab traversal khatam ho jaye, tails.length = LIS ki length.
 *
 * Example walkthrough: nums = [10, 9, 2, 5, 3, 7, 101, 18]
 *   num=10  -> tails = [10]
 *   num=9   -> tails = [9]        (binary search: 10 replace by 9)
 *   num=2   -> tails = [2]        (binary search: 9 replace by 2)
 *   num=5   -> tails = [2, 5]     (5 > 2, append)
 *   num=3   -> tails = [2, 3]     (binary search: 5 replace by 3)
 *   num=7   -> tails = [2, 3, 7]  (7 > 3, append)
 *   num=101 -> tails = [2, 3, 7, 101] (101 > 7, append)
 *   num=18  -> tails = [2, 3, 7, 18]  (binary search: 101 replace by 18)
 *   Length = 4
 *
 * Key Insight: Tails array hamesha sorted rehta hai isliye binary search lagta hai.
 * Replace karne se actual LIS nahi milta, but length sahi milta hai.
 */

function lengthOfLIS(nums) {
  // tails array: tails[i] = LIS of length i+1 ki sabse chhoti ending value
  const tails = [];

  // Har number ko process karo
  for (const num of nums) {
    // Binary search: num kis position par aa sakta hai?
    let left = 0;
    let right = tails.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        // Agar mid wala element chhota hai num se, toh right side dhundho
        left = mid + 1;
      } else {
        // Agar mid wala element bada ya barabar hai, toh left side dhundho
        right = mid;
      }
    }

    // left position par num rakh do
    // Agar left === tails.length hai toh append ho jayega
    // Warna purana value replace ho jayega
    tails[left] = num;
  }

  // Tails ki length = LIS ki length
  return tails.length;
}

/*
 * ==========================================
 * Time & Space Complexity Analysis
 * ==========================================
 *
 * Time Complexity: O(n * log n)
 *   - Har number ke liye O(log n) binary search lagta hai
 *   - Total n numbers hain
 *   - Total: O(n * log n)
 *
 * Space Complexity: O(n)
 *   - Tails array maximum n elements ka ho sakta hai
 *   - Worst case: saare elements increasing hain toh n elements
 */

// ==========================================
// Test Cases with Expected Output
// ==========================================

// Test Case 1: Standard case with multiple increasing subsequences
// Expected: 4 ([2, 3, 7, 101] or [2, 3, 7, 18])
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4

// Test Case 2: Already sorted array
// Expected: 4 ([0, 1, 2, 3])
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 4

// Test Case 3: All elements same
// Expected: 1 (only one element can be in strictly increasing subsequence)
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 1

// Test Case 4: Strictly increasing array
// Expected: 5 (entire array is LIS)
console.log(lengthOfLIS([1, 2, 3, 4, 5])); // 5

// Test Case 5: Strictly decreasing array
// Expected: 1 (only one element can be chosen)
console.log(lengthOfLIS([5, 4, 3, 2, 1])); // 1

module.exports = { lengthOfLIS };
