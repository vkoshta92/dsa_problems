/* Problem: House Robber | Difficulty: Medium
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Adjacent houses cannot both be robbed. Return maximum money.
 * Hinglish: At every house: skip karke previous best, ya rob karke two-back
 * best + current. Sirf last two states chahiye, full DP array nahi.
 */
function rob(houses) {
  let twoBack = 0;
  let oneBack = 0;

  for (const money of houses) {
    const current = Math.max(oneBack, twoBack + money);
    twoBack = oneBack;
    oneBack = current;
  }
  return oneBack;
}

console.log(rob([2, 7, 9, 3, 1])); // 12
console.log(rob([2, 1, 1, 2])); // 4
// Time: O(n), Space: O(1)

module.exports = { rob };
