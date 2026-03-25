/**
 * ============================================================================
 * PROBLEM: Container With Most Water
 * ============================================================================
 * Given n vertical lines, find two lines that form a container holding
 * the most water. Container height = min(line1, line2), width = distance.
 * 
 * ============================================================================
 * APPROACH: Two Pointers
 * ============================================================================
 * Logic:
 * 1. Start with widest container (leftmost and rightmost)
 * 2. Calculate area = min(height[left], height[right]) * (right - left)
 * 3. Move the pointer with smaller height inward
 * 4. Track maximum area seen
 * 
 * Why Move Smaller Pointer?
 * - Area is limited by smaller height
 * - Moving larger pointer can only decrease width (bad)
 * - Moving smaller pointer might find taller line (potentially better)
 * - We need to find a taller line to compensate for lost width
 * 
 * Example: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
 * - left=0, right=8: area = min(1,7) * 8 = 8
 *   - Move left (1 < 7)
 * - left=1, right=8: area = min(8,7) * 7 = 49 ← max
 *   - Move right (7 < 8)
 * - left=1, right=7: area = min(8,3) * 6 = 18
 *   - Move right (3 < 8)
 * - Continue until left meets right
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass with two pointers
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using pointers and variables
 * ============================================================================
 */

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  // Two pointer approach
  while (left < right) {
    // Height is min of both sides
    let h = Math.min(height[left], height[right]);

    // Width is distance between pointers
    let w = right - left;

    // Update maximum water
    maxWater = Math.max(maxWater, h * w);

    // Move pointer with smaller height
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

// Test
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
