/**
 * ============================================================================
 * PROBLEM: Longest Increasing Subsequence (LIS)
 * ============================================================================
 * Given an integer array nums, find the length of the longest strictly
 * increasing subsequence. A subsequence doesn't need to be contiguous.
 * 
 * ============================================================================
 * APPROACH: Dynamic Programming
 * ============================================================================
 * Logic:
 * 1. dp[i] = length of LIS ending at index i
 * 2. For each position i, look at all previous positions j
 * 3. If nums[i] > nums[j], we can extend the subsequence
 * 4. dp[i] = max(dp[i], dp[j] + 1)
 * 
 * Why This Works:
 * - LIS ending at i must include nums[i]
 * - It extends the best LIS that ends at some j where nums[j] < nums[i]
 * - We check all valid j values
 * 
 * Example: nums = [10, 9, 2, 5, 3, 7, 101, 18]
 * - dp[0] = 1 (just [10])
 * - dp[1] = 1 (just [9], 9 < 10)
 * - dp[2] = 1 (just [2])
 * - dp[3] = 2 ([2, 5], extends from dp[2])
 * - dp[4] = 2 ([2, 3], extends from dp[2])
 * - dp[5] = 3 ([2, 5, 7] or [2, 3, 7])
 * - dp[6] = 4 ([2, 5, 7, 101] or [2, 3, 7, 101])
 * - dp[7] = 4 ([2, 5, 7, 18] or [2, 3, 7, 18])
 * - Max = 4
 * 
 * Note: There's also an O(n log n) solution using binary search,
 * but this O(n²) solution is more intuitive.
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n²)
 * - Nested loops: for each i, check all j < i
 * 
 * SPACE COMPLEXITY: O(n)
 * - DP array of size n
 * ============================================================================
 */

function lengthOfLIS(nums) {
  // dp[i] = LIS ending at index i
  const dp = new Array(nums.length).fill(1);

  let maxLen = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // If increasing sequence possible
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxLen = Math.max(maxLen, dp[i]);
  }

  return maxLen;
}

// Test
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // 4
