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
