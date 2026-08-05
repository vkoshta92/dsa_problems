/* Last Stone Weight | Easy
 * Company: Amazon, Google, Microsoft, Apple
 * Hinglish: Har baar do largest stones chahiye, isliye max-heap natural data
 * structure hai. JavaScript me negative values se existing MinHeap reuse karte hain.
 */
function lastStoneWeight(stones) {
  const heap = stones.map((stone) => -stone);
  const push = (value) => { heap.push(value); heap.sort((a, b) => a - b); };
  heap.sort((a, b) => a - b);
  while (heap.length > 1) {
    const first = -heap.shift();
    const second = -heap.shift();
    if (first !== second) push(-(first - second));
  }
  return heap.length === 0 ? 0 : -heap[0];
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // 1
// This teaching implementation uses sort: O(n^2 log n) worst case.
// Production version should use a binary max-heap: O(n log n), Space: O(n).
module.exports = { lastStoneWeight };
