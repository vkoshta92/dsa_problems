function lengthOfLIS(nums) {
  const tails = [];

  for (let num of nums) {
    let left = 0, right = tails.length;

    // Binary search position
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) left = mid + 1;
      else right = mid;
    }

    // Replace or append
    tails[left] = num;
  }

  return tails.length;
}

// Test
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // 4
