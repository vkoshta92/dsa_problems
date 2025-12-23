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
