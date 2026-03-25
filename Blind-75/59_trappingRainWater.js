/**
 * ============================================================================
 * PROBLEM: Trapping Rain Water
 * ============================================================================
 * Given an elevation map (array of heights), compute how much water can
 * be trapped after raining.
 * 
 * ============================================================================
 * APPROACH: Two Pointers with Max Tracking
 * ============================================================================
 * Logic:
 * 1. Water trapped at each position = min(leftMax, rightMax) - height
 * 2. Use two pointers from both ends
 * 3. Track leftMax and rightMax seen so far
 * 4. Process the side with smaller max (water limited by smaller side)
 * 
 * Why This Works:
 * - Water at position i is limited by shorter of max walls on both sides
 * - If leftMax < rightMax: water at left is limited by leftMax
 *   - We know right side has taller wall, so leftMax is the bottleneck
 * - Similarly for right side
 * 
 * Key Insight:
 * - We don't need to know exact rightMax for each position
 * - We just need to know: is water limited by left or right?
 * - Process from the limiting side
 * 
 * Example: height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
 * - left=0, right=11: leftMax=0, rightMax=1
 * - Process left (0 < 1): water += 0-0 = 0, leftMax = 0
 * - left=1: leftMax=1, water += 1-1 = 0
 * - left=2: leftMax=1, water += 1-0 = 1
 * - Continue until pointers meet
 * - Total: 6 units
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass with two pointers
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using pointers and variables
 * ============================================================================
 */

function trap(height) {
  let left = 0;
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  // Two pointer traversal
  while (left < right) {
    if (height[left] < height[right]) {
      // Update left max
      leftMax = Math.max(leftMax, height[left]);

      // Water trapped at current index
      water += leftMax - height[left];
      left++;
    } else {
      // Update right max
      rightMax = Math.max(rightMax, height[right]);

      water += rightMax - height[right];
      right--;
    }
  }

  return water;
}

// Test
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
