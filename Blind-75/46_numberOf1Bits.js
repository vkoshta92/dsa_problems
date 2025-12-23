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
