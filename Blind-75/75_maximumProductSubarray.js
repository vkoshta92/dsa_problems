function maxProduct(nums) {
  let maxProd = nums[0];
  let minProd = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Negative number flips max/min
    if (nums[i] < 0) {
      [maxProd, minProd] = [minProd, maxProd];
    }

    // Update max & min product
    maxProd = Math.max(nums[i], maxProd * nums[i]);
    minProd = Math.min(nums[i], minProd * nums[i]);

    // Update result
    result = Math.max(result, maxProd);
  }

  return result;
}

// Test
console.log(maxProduct([2,3,-2,4])); // 6
