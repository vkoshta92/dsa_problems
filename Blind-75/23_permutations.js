function permute(nums) {
  const result = [];

  function backtrack(path, used) {
    // If permutation length equals nums length
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // Skip already used elements
      if (used[i]) continue;

      // Mark used
      used[i] = true;
      path.push(nums[i]);

      // Recurse
      backtrack(path, used);

      // Backtrack
      path.pop();
      used[i] = false;
    }
  }

  backtrack([], Array(nums.length).fill(false));
  return result;
}

// Test
console.log(permute([1,2,3]));
