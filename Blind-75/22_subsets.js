/**
 * ============================================================================
 * PROBLEM: Subsets (Power Set)
 * ============================================================================
 * Given an integer array nums with unique elements, return all possible 
 * subsets (the power set). The solution set must not contain duplicates.
 * 
 * ============================================================================
 * APPROACH: Backtracking
 * ============================================================================
 * Logic:
 * 1. At each index, we have two choices: include element or exclude it
 * 2. Use backtracking to explore all combinations
 * 3. Every path from root to any node is a valid subset
 * 
 * Key Insight:
 * - Unlike combination sum, every path is valid (not just complete paths)
 * - We add to result at EACH call, not just at base case
 * - Starting from index ensures we don't revisit previous elements
 * 
 * Decision Tree for [1, 2, 3]:
 *                    []
 *               /    |    \
 *            [1]    [2]   [3]
 *           /  \      \
 *        [1,2] [1,3] [2,3]
 *         /
 *      [1,2,3]
 * 
 * Each node is a valid subset!
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n * 2^n)
 * - Total subsets = 2^n (each element: include or exclude)
 * - Each subset takes O(n) to copy
 * 
 * SPACE COMPLEXITY: O(n)
 * - Recursion depth = n
 * - Output space: O(n * 2^n) for storing all subsets
 * ============================================================================
 */

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
