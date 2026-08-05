# Heap & Priority Queue - Basics

## Heap Kya Hai?
Complete binary tree hai jisme parent ka value children se chhota (min-heap)
ya bada (max-heap) hota hai.

## Min-Heap vs Max-Heap

```
Min-Heap:          Max-Heap:
    1                  9
   / \                / \
  3   5              7   5
 / \                / \
7   9              3   1
```

## Array Representation
```javascript
//       1 (index 0)
//      / \
//     3   5  (index 1, 2)
//    / \
//   7   9    (index 3, 4)

// Parent of i: Math.floor((i-1)/2)
// Left child of i: 2*i + 1
// Right child of i: 2*i + 2
```

## Min-Heap Implementation

```javascript
class MinHeap {
  constructor() { this.data = []; }
  
  peek() { return this.data[0]; }
  
  push(val) {
    this.data.push(val);
    this._bubbleUp(this.data.length - 1);
  }
  
  pop() {
    const min = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = last;
      this._sinkDown(0);
    }
    return min;
  }
  
  _bubbleUp(i) {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.data[parent] <= this.data[i]) break;
      [this.data[parent], this.data[i]] = [this.data[i], this.data[parent]];
      i = parent;
    }
  }
  
  _sinkDown(i) {
    while (true) {
      let smallest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < this.data.length && this.data[left] < this.data[smallest]) smallest = left;
      if (right < this.data.length && this.data[right] < this.data[smallest]) smallest = right;
      if (smallest === i) break;
      [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
      i = smallest;
    }
  }
  
  size() { return this.data.length; }
}
```

## Complexity

| Operation | Average | Worst |
|---|---|---|
| Insert | O(log n) | O(log n) |
| Extract Min/Max | O(log n) | O(log n) |
| Peek | O(1) | O(1) |
| Build Heap | O(n) | O(n) |
| Heap Sort | O(n log n) | O(n log n) |

## JavaScript Min-Heap Shortcut (for interviews)

```javascript
// Quick but O(n log n) per sort
const heap = [];
heap.push(val);
heap.sort((a, b) => a - b); // min-heap order
const min = heap.shift(); // extract min
```

## Common Patterns

### Top K Elements
```javascript
function topK(nums, k) {
  const heap = [];
  for (const num of nums) {
    heap.push(num);
    heap.sort((a, b) => a - b);
    if (heap.length > k) heap.pop(); // remove smallest
  }
  return heap; // k largest elements
}
```

### Kth Largest/Smallest
```javascript
// Use min-heap of size k for kth largest
// Use max-heap of size k for kth smallest
```

### Median from Stream
```javascript
// Max-heap for left half, min-heap for right half
// Left size >= right size always
// Median = left.top (odd) or avg of both tops (even)
```

## When to Use?
- "Kth largest/smallest" element
- "Top K" elements
- "Merge K sorted" lists/arrays
- "Median from data stream"
- "Task scheduling" / "Meeting rooms"
- "Find running median"

## Interview Tips
- JavaScript mein proper binary heap banao (not just sort)
- For interview: "heap" bolte waqt min-heap samjho by default
- Max-heap ke liye negate values use karo min-heap mein
- Priority Queue = Heap
- "K elements" keyword aaye = Heap socho
