/* Permutations | Medium
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Hinglish: Har position par ek unused number choose karo. Recursive call ke
 * baad choice undo karo, taaki next branch clean state se start ho.
 */
function permutations(nums) {
  const answer = [];
  const current = [];
  const used = new Set();
  function explore() {
    if (current.length === nums.length) { answer.push(current.slice()); return; }
    for (let index = 0; index < nums.length; index += 1) {
      if (used.has(index)) continue;
      used.add(index); current.push(nums[index]);
      explore();
      current.pop(); used.delete(index);
    }
  }
  explore();
  return answer;
}

console.log(permutations([1, 2, 3]).length); // 6
// Time: O(n * n!), Space: O(n) excluding returned permutations.
module.exports = { permutations };
