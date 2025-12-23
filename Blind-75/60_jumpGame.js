function canJump(nums) {
  // Maximum reachable index
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    // If current index is not reachable
    if (i > maxReach) return false;

    // Update farthest reach
    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return true;
}

// Test
console.log(canJump([2,3,1,1,4])); // true
console.log(canJump([3,2,1,0,4])); // false
