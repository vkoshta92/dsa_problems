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
