/**
 * ============================================================================
 * PROBLEM: Search in Rotated Sorted Array
 * ============================================================================
 * Given a sorted array rotated at unknown pivot, find target in O(log n).
 * No duplicates exist in array.
 * 
 * ============================================================================
 * APPROACH: Modified Binary Search
 * ============================================================================
 * Logic:
 * 1. Find which half is sorted
 * 2. Check if target lies in sorted half
 * 3. If yes, search that half; otherwise search other half
 * 
 * Key Insight:
 * - In rotated array, one half is always sorted
 * - Check: if nums[left] <= nums[mid], left half is sorted
 * - If target in sorted half range, go there; else go other side
 * 
 * Example: nums = [4,5,6,7,0,1,2], target = 0
 * - left=0, right=6, mid=3 (value=7)
 * - Left half [4,5,6,7] is sorted (4 <= 7)
 * - Target 0 not in [4, 7], go right
 * - left=4, right=6, mid=5 (value=1)
 * - Left half [0,1] is sorted (0 <= 1)
 * - Target 0 in [0, 1], go left
 * - left=4, right=5, mid=4 (value=0)
 * - Found! Return 4
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(log n)
 * - Binary search: halves search space each iteration
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using pointers
 * ============================================================================
 */

// 🔥 BATCH 12 – ARRAYS / BINARY SEARCH / TWO POINTER

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
