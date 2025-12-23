// BATCH 5 – BACKTRACKING 

function combinationSum(candidates, target) {
  const result = [];

  function backtrack(start, path, sum) {
    // If sum becomes exactly target, store path
    if (sum === target) {
      result.push([...path]);
      return;
    }

    // If sum exceeds target, stop exploring
    if (sum > target) return;

    // Try all candidates starting from index 'start'
    for (let i = start; i < candidates.length; i++) {
      // Choose current candidate
      path.push(candidates[i]);

      // Recurse with same index (can reuse same number)
      backtrack(i, path, sum + candidates[i]);

      // Backtrack (remove last element)
      path.pop();
    }
  }

  backtrack(0, [], 0);
  return result;
}

// Test
console.log(combinationSum([2,3,6,7], 7));
