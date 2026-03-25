/**
 * ============================================================================
 * PROBLEM: Longest Increasing Subsequence (Optimized)
 * ============================================================================
 * Given integer array nums, find length of longest strictly increasing
 * subsequence. This is the O(n log n) solution.
 * 
 * ============================================================================
 * APPROACH: Binary Search with Patience Sorting
 * ============================================================================
 * Logic:
 * 1. Maintain array 'tails' where tails[i] = smallest tail of LIS of length i+1
 * 2. For each number, binary search its position in tails
 * 3. If number > all tails: append (extends LIS)
 * 4. Otherwise: replace first element >= number
 * 
 * Key Insight:
 * - tails is always sorted (maintains increasing order)
 * - Smaller tail gives more room to extend LIS
 * - Length of tails = length of LIS
 * 
 * Note: tails does NOT store actual LIS, just enables length calculation
 * 
 * Example: nums = [10, 9, 2, 5, 3, 7, 101, 18]
 * - 10: tails = [10]
 * - 9:  replace 10 → tails = [9]
 * - 2:  replace 9 → tails = [2]
 * - 5:  append → tails = [2, 5]
 * - 3:  replace 5 → tails = [2, 3]
 * - 7:  append → tails = [2, 3, 7]
 * - 101: append → tails = [2, 3, 7, 101]
 * - 18: replace 101 → tails = [2, 3, 7, 18]
 * - Length = 4
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n log n)
 * - n iterations, each with O(log n) binary search
 * 
 * SPACE COMPLEXITY: O(n)
 * - tails array can grow up to n
 * ============================================================================
 */

function lengthOfLIS(nums) {
  const tails = [];

  for (let num of nums) {
    let left = 0, right = tails.length;

    // Binary search position
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) left = mid + 1;
      else right = mid;
    }

    // Replace or append
    tails[left] = num;
  }

  return tails.length;
}

// Test
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // 4
