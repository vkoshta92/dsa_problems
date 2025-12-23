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
