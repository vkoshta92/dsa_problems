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
