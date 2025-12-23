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
