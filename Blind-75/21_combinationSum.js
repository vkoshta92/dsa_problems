/**
 * ============================================================================
 * PROBLEM: Combination Sum
 * ============================================================================
 * Given an array of distinct integers candidates and a target, find all 
 * unique combinations where candidates sum to target.
 * The same number may be chosen unlimited times.
 * 
 * ============================================================================
 * APPROACH: Backtracking
 * ============================================================================
 * Logic:
 * 1. Use backtracking to explore all possible combinations
 * 2. For each position, we can:
 *    - Include current candidate (and can include it again)
 *    - Skip to next candidate
 * 3. Track current sum and path
 * 4. Prune when sum exceeds target (no negative numbers)
 * 
 * Key Decisions:
 * - Pass same index i (not i+1) to allow reuse of same element
 * - Pass i+1 to move to next element
 * - Backtrack by removing last element after recursion
 * 
 * Tree Structure:
 *                    []
 *           /        |        \
 *         [2]       [3]       [6]
 *       / | \      / | \      / | \
 *     [2,2] ...  [3,3] ...  [6,6] ...
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(N^(T/M+1))
 * - N = number of candidates
 * - T = target value
 * - M = minimal value among candidates
 * - In worst case, we recurse T/M times
 * 
 * SPACE COMPLEXITY: O(T/M)
 * - Recursion depth = T/M (maximum path length)
 * - Plus output space for storing results
 * ============================================================================
 */

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
