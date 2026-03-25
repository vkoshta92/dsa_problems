/**
 * ============================================================================
 * PROBLEM: Find Median from Data Stream
 * ============================================================================
 * Design a data structure that supports adding numbers and finding the
 * median of all added numbers. Median is the middle value in sorted order.
 * 
 * ============================================================================
 * APPROACH: Two Heaps (MaxHeap + MinHeap)
 * ============================================================================
 * Logic:
 * 1. Use MaxHeap for the left half (smaller elements)
 * 2. Use MinHeap for the right half (larger elements)
 * 3. Keep heaps balanced (left size = right size or left size = right size + 1)
 * 4. Median is top of left heap (odd) or average of both tops (even)
 * 
 * Why Two Heaps?
 * - We need efficient access to middle element(s)
 * - MaxHeap gives us largest of smaller half
 * - MinHeap gives us smallest of larger half
 * - Together they give us the median in O(1)
 * 
 * Balancing Strategy:
 * - Always push to left (MaxHeap), then move to right (MinHeap)
 * - If right has more elements, move one back to left
 * - This keeps left size >= right size (difference at most 1)
 * 
 * Example stream: 1, 2, 3
 * - Add 1: left=[1], right=[] → median = 1
 * - Add 2: left=[1], right=[2] → median = (1+2)/2 = 1.5
 * - Add 3: left=[1,2], right=[3] → median = 2
 * 
 * ============================================================================
 * TIME COMPLEXITY:
 * - addNum: O(log n) - heap operations
 * - findMedian: O(1) - peek at heap tops
 * 
 * SPACE COMPLEXITY: O(n)
 * - Store all added numbers across both heaps
 * ============================================================================
 */

class MedianFinder {
  constructor() {
    // MaxHeap for left half
    this.left = new Heap((a, b) => a > b);
    // MinHeap for right half
    this.right = new Heap((a, b) => a < b);
  }

  addNum(num) {
    // Always push into maxHeap first
    this.left.push(num);

    // Balance: move largest from left to right
    this.right.push(this.left.pop());

    // Ensure left has equal or 1 more element
    if (this.right.size() > this.left.size()) {
      this.left.push(this.right.pop());
    }
  }

  findMedian() {
    // If odd count, median is top of maxHeap
    if (this.left.size() > this.right.size()) {
      return this.left.peek();
    }
    // If even count, average of both tops
    return (this.left.peek() + this.right.peek()) / 2;
  }
}

// Test
const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // 1.5
mf.addNum(3);
console.log(mf.findMedian()); // 2
