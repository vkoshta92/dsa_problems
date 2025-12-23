function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  // Binary search
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Target found
    if (nums[mid] === target) return mid;

    // Left half sorted
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1; // search left half
      } else {
        left = mid + 1; // search right half
      }
    }
    // Right half sorted
    else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  // Target not found
  return -1;
}

// Test
console.log(search([4,5,6,7,0,1,2], 0)); // 4
