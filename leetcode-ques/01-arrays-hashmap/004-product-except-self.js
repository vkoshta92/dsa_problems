/* Product of Array Except Self | Medium
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Hinglish: Har index ka answer = left product * right product. Pehle answer
 * me left products store karo, phir right product se multiply kar do.
 */
function productExceptSelf(nums) {
  const answer = new Array(nums.length).fill(1);
  let leftProduct = 1;
  for (let i = 0; i < nums.length; i += 1) {
    answer[i] = leftProduct;
    leftProduct *= nums[i];
  }
  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  return answer;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
// Time: O(n), extra space: O(1) excluding the returned array.
module.exports = { productExceptSelf };
