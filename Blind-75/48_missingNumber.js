/**
 * ============================================================================
 * PROBLEM: Missing Number
 * ============================================================================
 * Given an array containing n distinct numbers from 0 to n, find the
 * missing number.
 * 
 * ============================================================================
 * APPROACH: XOR Bit Manipulation
 * ============================================================================
 * Logic:
 * 1. XOR all indices (0 to n-1) and all array values
 * 2. XOR the result with n
 * 3. The remaining number is the missing one
 * 
 * Why XOR Works:
 * - XOR of a number with itself is 0: a ^ a = 0
 * - XOR of a number with 0 is the number: a ^ 0 = a
 * - XOR is commutative and associative
 * - All numbers present twice (once as index, once as value) cancel out
 * - Only the missing number remains
 * 
 * Example: nums = [3, 0, 1]
 * - XOR all indices: 0 ^ 1 ^ 2
 * - XOR all values: 3 ^ 0 ^ 1
 * - XOR with n = 3
 * - Result: (0^1^2) ^ (3^0^1) ^ 3
 *          = (0^0) ^ (1^1) ^ 2 ^ (3^3)
 *          = 0 ^ 0 ^ 2 ^ 0
 *          = 2 (missing)
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass through the array
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using one variable for XOR
 * ============================================================================
 */

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
