/**
 * ============================================================================
 * PROBLEM: Find Minimum in Rotated Sorted Array
 * ============================================================================
 * Same as problem 57 - duplicate file. See detailed explanation there.
 * Given a sorted array rotated at unknown pivot, find minimum element.
 * 
 * ============================================================================
 * APPROACH: Binary Search
 * ============================================================================
 * Logic:
 * 1. Compare mid with right element
 * 2. If mid > right: minimum is in right half
 * 3. If mid <= right: minimum is mid or in left half
 * 
 * Key Insight:
 * - Minimum is at rotation point
 * - If mid > right, we're in larger portion → go right
 * - If mid <= right, we're in smaller portion → go left
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(log n)
 * SPACE COMPLEXITY: O(1)
 * ============================================================================
 */

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
