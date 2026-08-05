/* Minimum Size Subarray Sum | Medium
 * Company: Amazon, Google, Microsoft, Meta, Apple
 * Positive numbers allow a variable window: sum badhaane ke liye right,
 * target meet hote hi minimum length ke liye left shrink karo.
 */
function minSubArrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let answer = Infinity;
  for (let right = 0; right < nums.length; right += 1) {
    sum += nums[right];
    while (sum >= target) {
      answer = Math.min(answer, right - left + 1);
      sum -= nums[left];
      left += 1;
    }
  }
  return answer === Infinity ? 0 : answer;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
// Time: O(n), Space: O(1)
module.exports = { minSubArrayLen };
