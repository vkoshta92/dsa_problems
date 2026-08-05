/* Problem: Search in Rotated Sorted Array | Difficulty: Medium
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Distinct values are sorted then rotated. Return target index or -1.
 * Hinglish: Har iteration me ek half definitely sorted hota hai. Check karo
 * target sorted half ke range me hai ya nahi, phir wahi half retain karo.
 */
function searchRotated(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (nums[middle] === target) return middle;

    if (nums[left] <= nums[middle]) {
      if (nums[left] <= target && target < nums[middle]) right = middle - 1;
      else left = middle + 1;
    } else if (nums[middle] < target && target <= nums[right]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 3)); // -1
// Time: O(log n), Space: O(1)

module.exports = { searchRotated };
