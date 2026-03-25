/**
 * ============================================================================
 * PROBLEM: House Robber II
 * ============================================================================
 * Same as House Robber, but houses are arranged in a CIRCLE.
 * First and last house are adjacent (can't rob both).
 * 
 * ============================================================================
 * APPROACH: Two Runs of House Robber I
 * ============================================================================
 * Logic:
 * 1. Since first and last are adjacent, we can't rob both
 * 2. We have two options:
 *    - Rob houses 0 to n-2 (exclude last house)
 *    - Rob houses 1 to n-1 (exclude first house)
 * 3. Answer = max(option 1, option 2)
 * 
 * Why Two Runs?
 * - The circular constraint connects first and last
 * - By excluding one of them, we break the circle
 * - House Robber I can then solve the linear problem
 * 
 * Edge Case:
 * - If only 1 house, just rob it (can't exclude both)
 * 
 * Example: nums = [2, 3, 2]
 * - Option 1: [2, 3] → max = 3 (rob house 1)
 * - Option 2: [3, 2] → max = 3 (rob house 1)
 * - Result: 3
 * 
 * Example: nums = [1, 2, 3, 1]
 * - Option 1: [1, 2, 3] → max = 4 (rob houses 0 and 2)
 * - Option 2: [2, 3, 1] → max = 4 (rob houses 1 and 3)
 * - Result: 4
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Two passes through array, each O(n)
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only constant space for helper function
 * ============================================================================
 */

function rob(nums) {
  // If only one house
  if (nums.length === 1) return nums[0];

  // Helper function for linear robber
  function robLinear(arr) {
    let rob1 = 0, rob2 = 0;
    for (let n of arr) {
      let temp = Math.max(n + rob1, rob2);
      rob1 = rob2;
      rob2 = temp;
    }
    return rob2;
  }

  // Case 1: skip last house
  // Case 2: skip first house
  return Math.max(
    robLinear(nums.slice(0, nums.length - 1)),
    robLinear(nums.slice(1))
  );
}

// Test
console.log(rob([2,3,2])); // 3
