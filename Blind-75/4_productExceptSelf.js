/**
 * ============================================================================
 * PROBLEM: Product of Array Except Self
 * ============================================================================
 * Given an integer array nums, return an array answer such that answer[i] is 
 * equal to the product of all the elements of nums except nums[i].
 * Must run in O(n) time and without using the division operation.
 * 
 * ============================================================================
 * APPROACH: Prefix and Suffix Products
 * ============================================================================
 * Logic:
 * For each position i, we need product of all elements except nums[i]
 * This can be broken into two parts:
 * - Left product: product of all elements to the LEFT of i
 * - Right product: product of all elements to the RIGHT of i
 * 
 * Steps:
 * 1. First pass (left to right): Calculate prefix products
 *    - result[i] = product of all elements before i
 * 2. Second pass (right to left): Multiply with suffix products
 *    - result[i] *= product of all elements after i
 * 
 * Example: [1, 2, 3, 4]
 * - After left pass:  [1, 1, 2, 6]  (prefix products)
 * - After right pass: [24, 12, 8, 6] (final answer)
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Two passes through the array, each O(n)
 * 
 * SPACE COMPLEXITY: O(1) extra space (excluding output array)
 * - Output array doesn't count as extra space
 * - Only using two variables (leftProduct, rightProduct)
 * ============================================================================
 */

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
