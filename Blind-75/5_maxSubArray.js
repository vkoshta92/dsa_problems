/**
 * ============================================================================
 * PROBLEM: Maximum Subarray (Kadane's Algorithm)
 * ============================================================================
 * Given an integer array nums, find the contiguous subarray (containing at 
 * least one number) which has the largest sum and return its sum.
 * 
 * ============================================================================
 * APPROACH: Kadane's Algorithm (Dynamic Programming)
 * ============================================================================
 * Logic:
 * 1. At each position, we have two choices:
 *    - Start a new subarray from current element
 *    - Extend the previous subarray to include current element
 * 2. We choose whichever gives larger sum
 * 3. Track the maximum sum seen so far
 * 
 * Key Insight:
 * - If adding current element to previous sum makes it smaller than current 
 *   element alone, start fresh from current element
 * - Negative prefix sum only decreases total, so discard it
 * 
 * Example: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * - At index 1: max(1, -2+1=−1) = 1 → start new from 1
 * - At index 3: max(4, −2+4=2) = 4 → start new from 4
 * - Maximum sum subarray: [4, -1, 2, 1] = 6
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass through the array
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using two variables (currentSum, maxSum)
 * ============================================================================
 */

function maxSubArray(nums) {
  // Current running sum
  let currentSum = nums[0];

  // Maximum sum found
  let maxSum = nums[0];

  // Traverse array
  for (let i = 1; i < nums.length; i++) {

    // Either extend previous subarray or start new
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update maximum sum
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Test
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
