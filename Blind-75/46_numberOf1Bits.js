/**
 * ============================================================================
 * PROBLEM: Number of 1 Bits (Hamming Weight)
 * ============================================================================
 * Given an unsigned integer, return the number of '1' bits it has.
 * 
 * ============================================================================
 * APPROACH: Brian Kernighan's Algorithm
 * ============================================================================
 * Logic:
 * 1. n & (n - 1) removes the lowest set bit from n
 * 2. Repeat until n becomes 0
 * 3. Count how many times we removed a bit
 * 
 * Why n & (n - 1) Works:
 * - n - 1: flips all bits from the rightmost set bit to the end
 * - Example: n = 1011 (11), n - 1 = 1010 (10)
 * - n & (n - 1) = 1010 (removes the rightmost 1)
 * 
 * Example: n = 11 (binary: 1011)
 * - n = 1011, n - 1 = 1010, n & (n-1) = 1010 (count = 1)
 * - n = 1010, n - 1 = 1001, n & (n-1) = 1000 (count = 2)
 * - n = 1000, n - 1 = 0111, n & (n-1) = 0000 (count = 3)
 * - Result: 3
 * 
 * This is more efficient than checking each bit individually!
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(k)
 * - k = number of set bits (1s)
 * - We only iterate as many times as there are 1s
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using a counter variable
 * ============================================================================
 */

// ⚡ BATCH 10 – BIT + MATH

function hammingWeight(n) {
  let count = 0;

  // Loop until all bits become 0
  while (n !== 0) {
    // n & (n - 1) removes the lowest set bit
    n = n & (n - 1);
    count++;
  }

  return count;
}

// Test
console.log(hammingWeight(11)); // 3 (1011)
