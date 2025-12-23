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
