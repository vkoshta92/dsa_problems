/**
 * ============================================================================
 * PROBLEM: Jump Game II
 * ============================================================================
 * Given array of non-negative integers, find minimum jumps to reach
 * the last index. Start at index 0.
 * 
 * ============================================================================
 * APPROACH: Greedy BFS
 * ============================================================================
 * Logic:
 * 1. Track current jump range (currentEnd) and farthest reachable
 * 2. When we reach currentEnd, take a jump and extend to farthest
 * 3. Greedy: always jump to maximize reach
 * 
 * Variables:
 * - jumps: number of jumps taken
 * - currentEnd: boundary of current jump
 * - farthest: farthest index reachable with one more jump
 * 
 * Greedy Insight:
 * - Each jump should maximize the next reachable range
 * - We don't need to know exactly where to land
 * - Just need to know the range of positions reachable
 * 
 * Example: nums = [2, 3, 1, 1, 4]
 * - i=0: farthest = 2, currentEnd = 0 → jump! jumps=1, currentEnd=2
 * - i=1: farthest = max(2, 1+3) = 4
 * - i=2: farthest = max(4, 2+1) = 4
 * - i=3: reached currentEnd=2 → jump! jumps=2, currentEnd=4
 * - Done! Minimum jumps = 2
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass through array
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only three variables
 * ============================================================================
 */

function jump(nums) {
  // jumps = total jumps taken
  let jumps = 0;

  // currentEnd = current jump range end
  let currentEnd = 0;

  // farthest = farthest index reachable so far
  let farthest = 0;

  // We don't need to jump from last index
  for (let i = 0; i < nums.length - 1; i++) {
    // Update farthest reachable index
    farthest = Math.max(farthest, i + nums[i]);

    // If we reached current jump limit
    if (i === currentEnd) {
      jumps++;              // take a jump
      currentEnd = farthest; // extend jump range
    }
  }

  return jumps;
}

// Test
console.log(jump([2,3,1,1,4])); // 2
