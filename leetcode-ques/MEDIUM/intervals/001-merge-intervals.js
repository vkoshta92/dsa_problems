/* Problem: Merge Intervals | Difficulty: Medium
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Merge all overlapping intervals.
 * Hinglish: Start time ke basis par sort. Current interval ka start agar last
 * interval ke end se chhota/equal hai, end ko max se extend karo.
 */
function mergeIntervals(intervals) {
  const sorted = intervals.slice().sort((a, b) => a[0] - b[0]);
  const merged = [];

  for (const interval of sorted) {
    const last = merged[merged.length - 1];
    if (!last || interval[0] > last[1]) merged.push(interval.slice());
    else last[1] = Math.max(last[1], interval[1]);
  }
  return merged;
}

console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [9, 12]])); // [[1, 6], [8, 12]]
// Time: O(n log n), Space: O(n) for the sorted/result arrays.

module.exports = { mergeIntervals };
