// https://chatgpt.com/c/694ac11b-3ee4-8320-9bb2-1668d545507f

function twoSum(nums, target) {
  // Map to store number -> index
  const map = new Map();

  // Loop through array
  for (let i = 0; i < nums.length; i++) {

    // Find required number to reach target
    const diff = target - nums[i];

    // If required number already seen, return indices
    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    // Store current number with its index
    map.set(nums[i], i);
  }
}

// Test
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
