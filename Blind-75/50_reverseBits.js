/**
 * ============================================================================
 * PROBLEM: Reverse Bits
 * ============================================================================
 * Reverse the bits of a given 32-bit unsigned integer.
 * 
 * ============================================================================
 * APPROACH: Bit by Bit Reversal
 * ============================================================================
 * Logic:
 * 1. For each of the 32 bits:
 *    - Shift result left to make room
 *    - Extract last bit of n and add to result
 *    - Shift n right to process next bit
 * 2. Return result as unsigned integer
 * 
 * Bit Operations:
 * - result <<= 1: Shift result left (multiply by 2)
 * - result |= (n & 1): Add last bit of n to result
 * - n >>= 1: Shift n right (divide by 2, lose last bit)
 * 
 * Example: n = 43261596 (binary: 00000010100101000001111010011100)
 * - Process bit by bit:
 *   - Start: result = 0
 *   - Bit 0: result = 0 << 1 | 0 = 0, n >>= 1
 *   - Bit 1: result = 0 << 1 | 0 = 0
 *   - ... (continue for all 32 bits)
 * - Result: 964176192 (binary: 00111001011110000010100101000000)
 * 
 * Note: >>> 0 converts to unsigned 32-bit integer
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(1)
 * - Always 32 iterations
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using a few variables
 * ============================================================================
 */

function reverseBits(n) {
  let result = 0;

  // Loop through all 32 bits
  for (let i = 0; i < 32; i++) {
    // Shift result left
    result <<= 1;

    // Add last bit of n
    result |= (n & 1);

    // Shift n right
    n >>= 1;
  }

  // >>> ensures unsigned integer
  return result >>> 0;
}

// Test
console.log(reverseBits(43261596)); // 964176192
