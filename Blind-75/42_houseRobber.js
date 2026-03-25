/**
 * ============================================================================
 * PROBLEM: House Robber
 * ============================================================================
 * You are a robber planning to rob houses. Each house has money, but
 * adjacent houses have security connected. Can't rob two adjacent houses.
 * Find maximum money you can rob.
 * 
 * ============================================================================
 * APPROACH: Dynamic Programming
 * ============================================================================
 * Logic:
 * 1. For each house, you have two choices:
 *    - Rob it: money = house value + max money from 2 houses before
 *    - Skip it: money = max money from previous house
 * 2. dp[i] = max(dp[i-1], nums[i] + dp[i-2])
 * 
 * Recurrence Relation:
 * - Rob house i: nums[i] + dp[i-2] (can't rob adjacent)
 * - Skip house i: dp[i-1] (take best up to previous)
 * - dp[i] = max(rob, skip)
 * 
 * Example: nums = [2, 7, 9, 3, 1]
 * - House 0: rob = 2, skip = 0 → dp[0] = 2
 * - House 1: rob = 7, skip = 2 → dp[1] = 7
 * - House 2: rob = 9 + 2 = 11, skip = 7 → dp[2] = 11
 * - House 3: rob = 3 + 7 = 10, skip = 11 → dp[3] = 11
 * - House 4: rob = 1 + 11 = 12, skip = 11 → dp[4] = 12
 * - Max: 12 (rob houses 1, 3, 4... wait, that's wrong)
 * - Actually: rob houses 0, 2, 4 = 2 + 9 + 1 = 12 OR 1, 3 = 7 + 3 = 10
 * 
 * Space Optimization:
 * - Only need previous two values
 * - rob1 = dp[i-2], rob2 = dp[i-1]
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass through array
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only two variables needed
 * ============================================================================
 */

function rob(nums) {
  let rob1 = 0; // max money till house i-2
  let rob2 = 0; // max money till house i-1

  for (let n of nums) {
    // Either rob this house + rob1 OR skip this house
    let temp = Math.max(n + rob1, rob2);

    // Shift window
    rob1 = rob2;
    rob2 = temp;
  }

  return rob2;
}

// Test
console.log(rob([2,7,9,3,1])); // 12
