/* Problem: Kth Largest Element in an Array | Difficulty: Medium
 * Company: Amazon, Google, Meta, Microsoft, Apple, Bloomberg
 * Keep a min-heap of only k largest values. The root is the kth largest.
 * Hinglish: Heap ko size k se bada mat hone do; chhota root remove karne par
 * important top-k values bache rehte hain.
 */
class MinHeap {
  constructor() { this.values = []; }
  push(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.values[parent] <= this.values[index]) break;
      [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
      index = parent;
    }
  }
  pop() {
    const minimum = this.values[0];
    const last = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = last;
      let index = 0;
      while (true) {
        let smallest = index;
        const left = index * 2 + 1;
        const right = left + 1;
        if (left < this.values.length && this.values[left] < this.values[smallest]) smallest = left;
        if (right < this.values.length && this.values[right] < this.values[smallest]) smallest = right;
        if (smallest === index) break;
        [this.values[index], this.values[smallest]] = [this.values[smallest], this.values[index]];
        index = smallest;
      }
    }
    return minimum;
  }
  peek() { return this.values[0]; }
}

function findKthLargest(nums, k) {
  const heap = new MinHeap();
  for (const number of nums) {
    heap.push(number);
    if (heap.values.length > k) heap.pop();
  }
  return heap.peek();
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
// Time: O(n log k), Space: O(k)

module.exports = { findKthLargest, MinHeap };
