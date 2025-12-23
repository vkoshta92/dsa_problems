function missingNumber(nums) {
  let xor = 0;

  // XOR all indices and values
  for (let i = 0; i < nums.length; i++) {
    xor ^= i ^ nums[i];
  }

  // XOR with last index
  xor ^= nums.length;

  return xor;
}

// Test
console.log(missingNumber([3,0,1])); // 2
