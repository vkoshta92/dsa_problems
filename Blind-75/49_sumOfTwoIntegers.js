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
