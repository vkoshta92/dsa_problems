/**
 * ============================================================================
 * PROBLEM: Non-overlapping Intervals
 * ============================================================================
 * Given an array of intervals, return the minimum number of intervals to
 * remove to make the rest non-overlapping.
 * 
 * ============================================================================
 * APPROACH: Greedy - Sort by End Time
 * ============================================================================
 * Logic:
 * 1. Sort intervals by END time (not start time)
 * 2. Keep track of previous interval's end
 * 3. If current interval starts before previous ends → overlap → remove one
 * 4. If no overlap, update prevEnd
 * 
 * Why Sort by End Time?
 * - Greedy: Keep interval that ends earliest
 * - This leaves maximum room for remaining intervals
 * - Minimizes number of removals
 * 
 * Greedy Choice Proof:
 * - Among overlapping intervals, always keep the one ending earlier
 * - This is optimal because it leaves more space for future intervals
 * - If we kept the longer one, it would potentially block more intervals
 * 
 * Example:
 * Input: [[1,2], [2,3], [3,4], [1,3]]
 * Sorted by end: [[1,2], [2,3], [1,3], [3,4]]
 * - [1,2]: no overlap → keep, prevEnd = 2
 * - [2,3]: starts at 2 >= prevEnd → keep, prevEnd = 3
 * - [1,3]: starts at 1 < prevEnd → overlap → remove, count++
 * - [3,4]: starts at 3 >= prevEnd → keep
 * Result: 1 removal
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n log n)
 * - Sorting: O(n log n)
 * - Linear scan: O(n)
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using variables for counting and tracking
 * - Sorting may use O(log n) for recursion stack
 * ============================================================================
 */

function eraseOverlapIntervals(intervals) {
  // If no intervals, no removal needed
  if (intervals.length === 0) return 0;

  // Sort intervals by end time
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;            // number of intervals removed
  let prevEnd = intervals[0][1];

  // Traverse intervals
  for (let i = 1; i < intervals.length; i++) {
    // If overlapping
    if (intervals[i][0] < prevEnd) {
      count++; // remove current interval
    } else {
      // No overlap, update prevEnd
      prevEnd = intervals[i][1];
    }
  }

  return count;
}

// Test
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));
// Output: 1
