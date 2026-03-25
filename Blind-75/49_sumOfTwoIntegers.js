/**
 * ============================================================================
 * PROBLEM: Sum of Two Integers (without + or -)
 * ============================================================================
 * Given two integers a and b, return their sum without using + or -.
 * 
 * ============================================================================
 * APPROACH: Bit Manipulation (Half Adder Logic)
 * ============================================================================
 * Logic:
 * 1. XOR gives sum without carry: a ^ b
 * 2. AND gives carry positions: a & b
 * 3. Carry needs to be shifted left: (a & b) << 1
 * 4. Repeat until carry is 0
 * 
 * Bitwise Addition:
 * - 0 + 0 = 0 (sum: 0, carry: 0)
 * - 0 + 1 = 1 (sum: 1, carry: 0)
 * - 1 + 0 = 1 (sum: 1, carry: 0)
 * - 1 + 1 = 0 (sum: 0, carry: 1) ← need to carry to next position
 * 
 * Example: a = 3 (0011), b = 5 (0101)
 * - Iteration 1:
 *   - Sum (XOR): 0011 ^ 0101 = 0110 (6)
 *   - Carry: (0011 & 0101) << 1 = 0001 << 1 = 0010 (2)
 * - Iteration 2:
 *   - Sum: 0110 ^ 0010 = 0100 (4)
 *   - Carry: (0110 & 0010) << 1 = 0010 << 1 = 0100 (4)
 * - Iteration 3:
 *   - Sum: 0100 ^ 0100 = 0000 (0)
 *   - Carry: (0100 & 0100) << 1 = 0100 << 1 = 1000 (8)
 * - Iteration 4:
 *   - Sum: 0000 ^ 1000 = 1000 (8)
 *   - Carry: (0000 & 1000) << 1 = 0000 (0)
 * - Result: 8
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(1)
 * - At most 32 iterations (for 32-bit integers)
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using a few variables
 * ============================================================================
 */

function getSum(a, b) {
  // Loop until carry becomes zero
  while (b !== 0) {
    // Carry
    let carry = (a & b) << 1;

    // Sum without carry
    a = a ^ b;

    // Assign carry to b
    b = carry;
  }

  return a;
}

// Test
console.log(getSum(3, 5)); // 8
