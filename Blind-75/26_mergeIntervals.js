/**
 * ============================================================================
 * PROBLEM: Merge Intervals
 * ============================================================================
 * Given an array of intervals where intervals[i] = [start, end], merge all
 * overlapping intervals and return an array of non-overlapping intervals.
 * 
 * ============================================================================
 * APPROACH: Sorting + Linear Merge
 * ============================================================================
 * Logic:
 * 1. Sort intervals by start time
 * 2. Iterate through sorted intervals
 * 3. If current interval overlaps with previous, merge them
 * 4. Otherwise, add previous to result and start new current
 * 
 * What is Overlap?
 * - Two intervals [a, b] and [c, d] overlap if c <= b
 * - When merged: [a, max(b, d)]
 * 
 * Why Sort?
 * - After sorting, overlapping intervals are adjacent
 * - We only need to compare with previous interval
 * - No need to check all pairs
 * 
 * Example:
 * Input: [[1,3], [2,6], [8,10], [15,18]]
 * Sorted: same (already sorted by start)
 * - [1,3] and [2,6] overlap (2 <= 3) → merge to [1,6]
 * - [1,6] and [8,10] don't overlap → add [1,6], start [8,10]
 * - [8,10] and [15,18] don't overlap → add [8,10], start [15,18]
 * Result: [[1,6], [8,10], [15,18]]
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n log n)
 * - Sorting: O(n log n)
 * - Linear scan: O(n)
 * - Overall: O(n log n)
 * 
 * SPACE COMPLEXITY: O(n)
 * - Result array stores all intervals
 * - Sorting may use O(log n) for recursion stack
 * ============================================================================
 */

function merge(intervals) {
  // Edge case: if no intervals
  if (intervals.length === 0) return [];

  // Step 1: Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let current = intervals[0];

  // Step 2: Traverse intervals
  for (let i = 1; i < intervals.length; i++) {
    const next = intervals[i];

    // If overlapping, merge by extending end time
    if (next[0] <= current[1]) {
      current[1] = Math.max(current[1], next[1]);
    } else {
      // No overlap, push current interval
      result.push(current);
      current = next;
    }
  }

  // Push the last interval
  result.push(current);

  return result;
}

// Test
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
// Output: [[1,6],[8,10],[15,18]]
