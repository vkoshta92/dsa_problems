/**
 * ============================================================================
 * PROBLEM: Insert Interval
 * ============================================================================
 * Given a list of non-overlapping intervals sorted by start time, and a
 * new interval, insert it and merge if necessary.
 * 
 * ============================================================================
 * APPROACH: Three Phase Scan
 * ============================================================================
 * Logic:
 * Since intervals are already sorted, we process in three phases:
 * 
 * Phase 1: Add all intervals that end before newInterval starts
 * - These intervals cannot overlap with newInterval
 * 
 * Phase 2: Merge all overlapping intervals with newInterval
 * - While intervals overlap with newInterval, keep merging
 * - Merge: min of starts, max of ends
 * 
 * Phase 3: Add remaining intervals
 * - All intervals that start after merged newInterval
 * 
 * Example:
 * Intervals: [[1,3], [6,9]], newInterval: [2,5]
 * - Phase 1: [] (no intervals end before 2)
 * - Phase 2: [1,3] overlaps with [2,5] → merge to [1,5]
 * - Phase 3: [6,9] starts after 5 → add it
 * Result: [[1,5], [6,9]]
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - Single pass through all intervals
 * - No sorting needed (already sorted)
 * 
 * SPACE COMPLEXITY: O(n)
 * - Result array stores all intervals
 * ============================================================================
 */

function insert(intervals, newInterval) {
  const result = [];
  let i = 0;

  // Step 1: Add all intervals before newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Step 2: Merge overlapping intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  // Add merged interval
  result.push(newInterval);

  // Step 3: Add remaining intervals
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}

// Test
console.log(insert([[1,3],[6,9]], [2,5]));
// Output: [[1,5],[6,9]]
