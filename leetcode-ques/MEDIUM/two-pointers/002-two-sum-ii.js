/* Two Sum II - Input Array Is Sorted | Medium
 * Company: Amazon, Google, Microsoft, Meta, Apple
 * Hinglish: Sorted array me sum chhota ho to left badhao, sum bada ho to right
 * ghatao. Har move impossible values ka poora range eliminate karta hai.
 */
function twoSumSorted(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum < target) left += 1;
    else right -= 1;
  }
  return [];
}

console.log(twoSumSorted([2, 7, 11, 15], 9)); // [1, 2]
// Time: O(n), Space: O(1)
module.exports = { twoSumSorted };
