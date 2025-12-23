function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  // Binary search
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // If mid element greater than right,
    // min is in right half
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // Min is in left half including mid
      right = mid;
    }
  }

  // Left will point to minimum
  return nums[left];
}

// Test
console.log(findMin([3,4,5,1,2])); // 1
