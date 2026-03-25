/**
 * ============================================================================
 * PROBLEM: Find Minimum in Rotated Sorted Array
 * ============================================================================
 * Given a sorted array rotated at unknown pivot, find the minimum element.
 * No duplicates exist.
 * 
 * ============================================================================
 * APPROACH: Binary Search
 * ============================================================================
 * Logic:
 * 1. Compare mid element with right element
 * 2. If mid > right: minimum is on right side
 * 3. If mid <= right: minimum is mid or on left side
 * 4. Keep narrowing until left == right
 * 
 * Key Insight:
 * - In rotated sorted array, minimum is at the rotation point
 * - If mid > right, we're still in the rotated (larger) part
 * - If mid <= right, we're in the sorted (smaller) part
 * 
 * Example: nums = [3, 4, 5, 1, 2]
 * - left=0, right=4, mid=2 (value=5)
 * - 5 > 2, so minimum on right → left = mid + 1 = 3
 * - left=3, right=4, mid=3 (value=1)
 * - 1 <= 2, so minimum is 1 or left → right = mid = 3
 * - left=3, right=3 → return nums[3] = 1
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(log n)
 * - Binary search halves search space each iteration
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using pointers
 * ============================================================================
 */

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
