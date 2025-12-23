function productExceptSelf(nums) {
  const n = nums.length;

  // Result array initialized with 1
  const result = new Array(n).fill(1);

  // Prefix product
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;      // store product of left elements
    leftProduct *= nums[i];
  }

  // Suffix product
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;    // multiply with right product
    rightProduct *= nums[i];
  }

  return result;
}

// Test
console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]
