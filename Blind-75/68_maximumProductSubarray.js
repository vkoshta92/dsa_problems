function maxProduct(nums) {
  // maxProd & minProd track current max/min product
  let maxProd = nums[0];
  let minProd = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];

    // If number is negative, swap max & min
    if (curr < 0) {
      [maxProd, minProd] = [minProd, maxProd];
    }

    // Update max and min product
    maxProd = Math.max(curr, maxProd * curr);
    minProd = Math.min(curr, minProd * curr);

    // Update result
    result = Math.max(result, maxProd);
  }

  return result;
}

// Test
console.log(maxProduct([2,3,-2,4])); // 6
