/**
 * ============================================================================
 * PROBLEM: Top K Frequent Elements
 * ============================================================================
 * Given an integer array nums and integer k, return the k most frequent
 * elements. You may return the answer in any order.
 * 
 * ============================================================================
 * APPROACH: Hash Map + MinHeap
 * ============================================================================
 * Logic:
 * 1. Count frequency of each element using hash map
 * 2. Use MinHeap to keep track of top k frequent elements
 * 3. When heap size exceeds k, remove minimum frequency element
 * 4. Remaining elements in heap are the k most frequent
 * 
 * Why MinHeap (not MaxHeap)?
 * - We want to keep top k, so we remove smallest frequencies
 * - MinHeap gives us O(1) access to minimum frequency element
 * - MaxHeap would require removing all elements except top k
 * 
 * Example: nums = [1,1,1,2,2,3], k = 2
 * - Frequencies: {1: 3, 2: 2, 3: 1}
 * - Process (element, freq):
 *   - Add (1, 3) → heap: [(1,3)]
 *   - Add (2, 2) → heap: [(2,2), (1,3)]
 *   - Add (3, 1) → heap: [(3,1), (1,3), (2,2)] → size > k → remove min
 *   - heap: [(2,2), (1,3)]
 * - Result: [1, 2]
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n log k)
 * - Count frequencies: O(n)
 * - Heap operations: n elements, each O(log k)
 * 
 * SPACE COMPLEXITY: O(n)
 * - Hash map: O(n) for unique elements
 * - Heap: O(k)
 * ============================================================================
 */

// BATCH 7 – HEAPS / PRIORITY QUEUE

// // Generic Heap class (can act as MinHeap or MaxHeap)
// class Heap {
//   constructor(compare) {
//     this.data = [];
//     this.compare = compare; // comparison logic
//   }

//   size() {
//     return this.data.length;
//   }

//   peek() {
//     return this.data[0];
//   }

//   push(val) {
//     this.data.push(val);
//     this.bubbleUp(this.data.length - 1);
//   }

//   pop() {
//     if (this.size() === 1) return this.data.pop();

//     const top = this.data[0];
//     this.data[0] = this.data.pop();
//     this.bubbleDown(0);
//     return top;
//   }

//   bubbleUp(index) {
//     while (index > 0) {
//       let parent = Math.floor((index - 1) / 2);
//       if (this.compare(this.data[index], this.data[parent])) {
//         [this.data[index], this.data[parent]] =
//           [this.data[parent], this.data[index]];
//         index = parent;
//       } else break;
//     }
//   }

//   bubbleDown(index) {
//     const n = this.data.length;

//     while (true) {
//       let left = 2 * index + 1;
//       let right = 2 * index + 2;
//       let candidate = index;

//       if (left < n && this.compare(this.data[left], this.data[candidate])) {
//         candidate = left;
//       }
//       if (right < n && this.compare(this.data[right], this.data[candidate])) {
//         candidate = right;
//       }

//       if (candidate === index) break;

//       [this.data[index], this.data[candidate]] =
//         [this.data[candidate], this.data[index]];
//       index = candidate;
//     }
//   }
// }

function topKFrequent(nums, k) {
  // Count frequency
  const freq = {};
  for (let n of nums) freq[n] = (freq[n] || 0) + 1;

  // MinHeap based on frequency
  const heap = new Heap((a, b) => a[1] < b[1]);

  for (let key in freq) {
    heap.push([key, freq[key]]);
    if (heap.size() > k) heap.pop(); // keep only top k
  }

  // Extract results
  return heap.data.map(x => Number(x[0]));
}

// Test
console.log(topKFrequent([1,1,1,2,2,3], 2)); // [1,2]

