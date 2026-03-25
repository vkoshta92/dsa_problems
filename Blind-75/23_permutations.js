/**
 * ============================================================================
 * PROBLEM: Permutations
 * ============================================================================
 * Given an array nums of distinct integers, return all possible permutations.
 * You can return the answer in any order.
 * 
 * ============================================================================
 * APPROACH: Backtracking with Used Array
 * ============================================================================
 * Logic:
 * 1. Generate all arrangements of elements
 * 2. Use 'used' array to track which elements are in current permutation
 * 3. Add to result when permutation is complete (length = nums.length)
 * 4. Backtrack by unmarking and removing last element
 * 
 * Key Insight:
 * - Unlike subsets, order matters in permutations
 * - Each position can have ANY element not yet used
 * - We try all unused elements at each position
 * 
 * Decision Tree for [1, 2, 3]:
 *              []
 *         /    |    \
 *       [1]   [2]   [3]
 *      /  \   /  \   /  \
 *   [1,2][1,3][2,1][2,3][3,1][3,2]
 *    |    |    |    |    |    |
 * [1,2,3][1,3,2][2,1,3][2,3,1][3,1,2][3,2,1]
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n * n!)
 * - n! permutations total
 * - Each permutation takes O(n) to copy
 * 
 * SPACE COMPLEXITY: O(n)
 * - Recursion depth = n
 * - 'used' array = O(n)
 * - Output space: O(n * n!) for storing all permutations
 * ============================================================================
 */

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
