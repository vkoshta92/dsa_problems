/* Binary Search | Easy
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Hinglish: Sorted array me middle compare karke har step par aadha search
 * space discard karo. right boundary inclusive rakhi hai.
 */
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (nums[middle] === target) return middle;
    if (nums[middle] < target) left = middle + 1;
    else right = middle - 1;
  }
  return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2)); // -1
// Time: O(log n), Space: O(1)
module.exports = { binarySearch };
