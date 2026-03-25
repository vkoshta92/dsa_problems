/**
 * ============================================================================
 * PROBLEM: Maximum Product Subarray
 * ============================================================================
 * Given integer array nums, find contiguous subarray with largest product.
 * 
 * ============================================================================
 * APPROACH: Track Both Max and Min Products
 * ============================================================================
 * Logic:
 * 1. Track both maximum and minimum product ending at current position
 * 2. For negative numbers, max and min swap
 * 3. maxProd = max(num, maxProd * num, minProd * num)
 * 4. minProd = min(num, maxProd * num, minProd * num)
 * 
 * Why Track Min?
 * - Negative * negative = positive
 * - A minimum product can become maximum if multiplied by negative
 * 
 * Why Swap for Negative?
 * - When current number is negative:
 *   - Old max * negative becomes new min candidate
 *   - Old min * negative becomes new max candidate
 * - Swap first, then update normally
 * 
 * Example: [2, 3, -2, 4]
 * - i=0 (2): maxProd=2, minProd=2, result=2
 * - i=1 (3): maxProd=6, minProd=3, result=6
 * - i=2 (-2): swap → maxProd=3, minProd=6
 *            maxProd=max(-2, 3*-2, 6*-2)=max(-2,-6,-12)=-2
 *            minProd=min(-2, 3*-2, 6*-2)=min(-2,-6,-12)=-12
 *            result=6
 * - i=3 (4): maxProd=max(4,-2*4,-12*4)=4, result=6
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass through array
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only tracking max, min, and result
 * ============================================================================
 */

function maxProduct(nums) {
  // maxProd & minProd track current max/min product
  let maxProd = nums[0];
  let minProd = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];

    // If number is negative, swap max & min
    if (curr < 0) {
      [maxProd, minProd] = [minProd, maxProd];
    }

    // Update max and min product
    maxProd = Math.max(curr, maxProd * curr);
    minProd = Math.min(curr, minProd * curr);

    // Update result
    result = Math.max(result, maxProd);
  }

  return result;
}

// Test
console.log(maxProduct([2,3,-2,4])); // 6
