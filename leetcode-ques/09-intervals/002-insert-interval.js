/* Insert Interval | Medium
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Hinglish: Pehle non-overlap intervals copy karo, phir overlap ke dauran
 * start/end expand karo, aur finally remaining intervals append karo.
 */
function insertInterval(intervals, newInterval) {
  const answer = [];
  let index = 0;
  while (index < intervals.length && intervals[index][1] < newInterval[0]) answer.push(intervals[index++]);
  while (index < intervals.length && intervals[index][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
    index += 1;
  }
  answer.push(newInterval);
  while (index < intervals.length) answer.push(intervals[index++]);
  return answer;
}

console.log(insertInterval([[1, 3], [6, 9]], [2, 5])); // [[1, 5], [6, 9]]
// Time: O(n), Space: O(n) for output.
module.exports = { insertInterval };
