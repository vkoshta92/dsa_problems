function maxSubArray(nums) {
  // Current running sum
  let currentSum = nums[0];

  // Maximum sum found
  let maxSum = nums[0];

  // Traverse array
  for (let i = 1; i < nums.length; i++) {

    // Either extend previous subarray or start new
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update maximum sum
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Test
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
