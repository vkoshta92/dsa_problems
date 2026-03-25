/**
 * ============================================================================
 * PROBLEM: Kth Largest Element in an Array
 * ============================================================================
 * Given an integer array nums and integer k, return the kth largest
 * element in the array.
 * 
 * ============================================================================
 * APPROACH: MinHeap of Size K
 * ============================================================================
 * Logic:
 * 1. Maintain a MinHeap of exactly k elements
 * 2. For each number in array:
 *    - Add to heap
 *    - If heap size > k, remove smallest (root)
 * 3. After processing all numbers, root is the kth largest
 * 
 * Why MinHeap?
 * - MinHeap keeps smallest element at root
 * - When size exceeds k, we remove smallest
 * - This means we're keeping the k largest elements
 * - Root is the smallest among k largest = kth largest
 * 
 * Example: nums = [3,2,1,5,6,4], k = 2
 * - Add 3: heap = [3]
 * - Add 2: heap = [2, 3]
 * - Add 1: heap = [1, 3, 2] → size > 2 → remove 1 → heap = [2, 3]
 * - Add 5: heap = [2, 3, 5] → remove 2 → heap = [3, 5]
 * - Add 6: heap = [3, 5, 6] → remove 3 → heap = [5, 6]
 * - Add 4: heap = [4, 6, 5] → remove 4 → heap = [5, 6]
 * - Root = 5 = 2nd largest
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n log k)
 * - Process n elements, each heap operation is O(log k)
 * 
 * SPACE COMPLEXITY: O(k)
 * - Heap stores at most k elements
 * ============================================================================
 */

function findKthLargest(nums, k) {
  // MinHeap of size k
  const heap = new Heap((a, b) => a < b);

  for (let num of nums) {
    heap.push(num);
    if (heap.size() > k) heap.pop();
  }

  // Root is kth largest
  return heap.peek();
}

// Test
console.log(findKthLargest([3,2,1,5,6,4], 2)); // 5
