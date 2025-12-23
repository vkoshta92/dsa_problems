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
