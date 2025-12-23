// 🔥 BATCH 12 – ARRAYS / BINARY SEARCH / TWO POINTERfunction search(nums, target) {
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  // Binary search loop
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // If target found
    if (nums[mid] === target) return mid;

    // Check if left half is sorted
    if (nums[left] <= nums[mid]) {
      // Target lies in left sorted half
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // Right half is sorted
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
