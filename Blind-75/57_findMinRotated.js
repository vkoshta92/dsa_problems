function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // If mid element greater than right,
    // minimum must be on right side
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // Minimum could be mid or on left side
      right = mid;
    }
  }

  // Left pointer will point to minimum
  return nums[left];
}

// Test
console.log(findMin([3,4,5,1,2])); // 1
