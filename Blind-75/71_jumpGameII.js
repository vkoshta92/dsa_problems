function jump(nums) {
  // jumps = total jumps taken
  let jumps = 0;

  // currentEnd = current jump range end
  let currentEnd = 0;

  // farthest = farthest index reachable so far
  let farthest = 0;

  // We don’t need to jump from last index
  for (let i = 0; i < nums.length - 1; i++) {
    // Update farthest reachable index
    farthest = Math.max(farthest, i + nums[i]);

    // If we reached current jump limit
    if (i === currentEnd) {
      jumps++;              // take a jump
      currentEnd = farthest; // extend jump range
    }
  }

  return jumps;
}

// Test
console.log(jump([2,3,1,1,4])); // 2
