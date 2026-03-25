/**
 * ============================================================================
 * PROBLEM: Jump Game
 * ============================================================================
 * Given an array of non-negative integers, you start at index 0.
 * Each element represents max jump length from that position.
 * Determine if you can reach the last index.
 * 
 * ============================================================================
 * APPROACH: Greedy - Track Maximum Reach
 * ============================================================================
 * Logic:
 * 1. Track the farthest index reachable so far (maxReach)
 * 2. For each position:
 *    - If position > maxReach: can't reach here, return false
 *    - Update maxReach = max(maxReach, position + jump)
 * 3. If maxReach >= last index: can reach end
 * 
 * Greedy Insight:
 * - We don't need to track the exact path
 * - Just need to know if we CAN reach each position
 * - As long as position <= maxReach, we can get there
 * 
 * Example: nums = [2, 3, 1, 1, 4]
 * - i=0: maxReach = max(0, 0+2) = 2
 * - i=1: 1 <= 2 ✓, maxReach = max(2, 1+3) = 4
 * - i=2: 2 <= 4 ✓, maxReach = max(4, 2+1) = 4
 * - i=3: 3 <= 4 ✓, maxReach = max(4, 3+1) = 4
 * - i=4: 4 <= 4 ✓, reached end!
 * 
 * Example: nums = [3, 2, 1, 0, 4]
 * - i=0: maxReach = 3
 * - i=1: maxReach = max(3, 1+2) = 3
 * - i=2: maxReach = max(3, 2+1) = 3
 * - i=3: maxReach = max(3, 3+0) = 3
 * - i=4: 4 > 3, can't reach → return false
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass through array
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using one variable (maxReach)
 * ============================================================================
 */

function canJump(nums) {
  // Maximum reachable index
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    // If current index is not reachable
    if (i > maxReach) return false;

    // Update farthest reach
    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return true;
}

// Test
console.log(canJump([2,3,1,1,4])); // true
console.log(canJump([3,2,1,0,4])); // false
