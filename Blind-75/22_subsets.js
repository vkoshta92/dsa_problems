function subsets(nums) {
  const result = [];

  function backtrack(index, path) {
    // Every path is a valid subset
    result.push([...path]);

    for (let i = index; i < nums.length; i++) {
      // Choose element
      path.push(nums[i]);

      // Recurse to next index
      backtrack(i + 1, path);

      // Undo choice
      path.pop();
    }
  }

  backtrack(0, []);
  return result;
}

// Test
console.log(subsets([1,2,3]));
