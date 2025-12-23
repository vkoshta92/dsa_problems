function rob(nums) {
  let rob1 = 0; // max money till house i-2
  let rob2 = 0; // max money till house i-1

  for (let n of nums) {
    // Either rob this house + rob1 OR skip this house
    let temp = Math.max(n + rob1, rob2);

    // Shift window
    rob1 = rob2;
    rob2 = temp;
  }

  return rob2;
}

// Test
console.log(rob([2,7,9,3,1])); // 12
