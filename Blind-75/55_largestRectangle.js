/**
 * ============================================================================
 * PROBLEM: Largest Rectangle in Histogram
 * ============================================================================
 * Given an array of heights representing histogram bars, find the area of
 * the largest rectangle that can be formed.
 * 
 * ============================================================================
 * APPROACH: Monotonic Increasing Stack
 * ============================================================================
 * Logic:
 * 1. Use stack to store indices of bars in increasing height order
 * 2. When a shorter bar is found, pop taller bars and calculate their area
 * 3. Width = current index - stack top - 1 (after popping)
 * 4. Add sentinel (height 0) at end to process all remaining bars
 * 
 * Why This Works:
 * - For each bar, find how far left and right it can extend
 * - A bar can extend until it meets a shorter bar
 * - Stack tracks bars that can potentially extend further
 * 
 * Width Calculation:
 * - After popping bar at index i:
 *   - If stack empty: width = current index (bar can extend from start)
 *   - If stack not empty: width = current index - new stack top - 1
 * 
 * Example: [2, 1, 5, 6, 2, 3]
 * - Add 0 at end: [2, 1, 5, 6, 2, 3, 0]
 * - Process 2: stack = [0]
 * - Process 1: pop 0 (h=2), width = 1, area = 2, push 1, stack = [1]
 * - Process 5: stack = [1, 2]
 * - Process 6: stack = [1, 2, 3]
 * - Process 2: pop 3 (h=6), width = 4-2-1 = 1, area = 6
 *             pop 2 (h=5), width = 4-1-1 = 2, area = 10 ← max
 *             push 4, stack = [1, 4]
 * - Process 3: stack = [1, 4, 5]
 * - Process 0: pop all, calculate remaining areas
 * - Result: 10
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Each bar pushed and popped at most once
 * 
 * SPACE COMPLEXITY: O(n)
 * - Stack can hold at most n indices
 * ============================================================================
 */

function largestRectangleArea(heights) {
  const stack = []; // store indices
  let maxArea = 0;

  // Add sentinel height 0 at end
  heights.push(0);

  for (let i = 0; i < heights.length; i++) {
    // Maintain increasing stack
    while (
      stack.length > 0 &&
      heights[i] < heights[stack[stack.length - 1]]
    ) {
      const h = heights[stack.pop()];
      const w = stack.length === 0
        ? i
        : i - stack[stack.length - 1] - 1;

      maxArea = Math.max(maxArea, h * w);
    }

    stack.push(i);
  }

  return maxArea;
}

// Test
console.log(largestRectangleArea([2,1,5,6,2,3])); // 10
