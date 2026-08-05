/* Climbing Stairs | Easy
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Hinglish: Step n par pahunchne ke ways = step n-1 ke ways + step n-2 ke
 * ways, kyunki last move 1 ya 2 steps ka ho sakta hai.
 */
function climbStairs(steps) {
  let twoBack = 1;
  let oneBack = 1;
  for (let step = 2; step <= steps; step += 1) {
    const current = oneBack + twoBack;
    twoBack = oneBack;
    oneBack = current;
  }
  return oneBack;
}

console.log(climbStairs(5)); // 8
// Time: O(n), Space: O(1)
module.exports = { climbStairs };
