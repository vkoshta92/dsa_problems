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
