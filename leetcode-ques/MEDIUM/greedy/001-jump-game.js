/* Jump Game | Medium
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Hinglish: Har index se maximum reachable index maintain karo. Agar current
 * index maxReach se aage hai to wahan pahunchna impossible hai.
 */
function canJump(nums) {
  let maxReach = 0;
  for (let index = 0; index < nums.length; index += 1) {
    if (index > maxReach) return false;
    maxReach = Math.max(maxReach, index + nums[index]);
  }
  return true;
}

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
// Time: O(n), Space: O(1)
module.exports = { canJump };
