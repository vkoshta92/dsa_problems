function lengthOfLIS(nums) {
  // dp[i] = LIS ending at index i
  const dp = new Array(nums.length).fill(1);

  let maxLen = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // If increasing sequence possible
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxLen = Math.max(maxLen, dp[i]);
  }

  return maxLen;
}

// Test
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // 4
