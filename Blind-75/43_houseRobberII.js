function rob(nums) {
  // If only one house
  if (nums.length === 1) return nums[0];

  // Helper function for linear robber
  function robLinear(arr) {
    let rob1 = 0, rob2 = 0;
    for (let n of arr) {
      let temp = Math.max(n + rob1, rob2);
      rob1 = rob2;
      rob2 = temp;
    }
    return rob2;
  }

  // Case 1: skip last house
  // Case 2: skip first house
  return Math.max(
    robLinear(nums.slice(0, nums.length - 1)),
    robLinear(nums.slice(1))
  );
}

// Test
console.log(rob([2,3,2])); // 3
