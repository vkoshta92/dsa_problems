class MinStack {
  constructor() {
    this.stack = [];     // main stack
    this.minStack = [];  // keeps track of minimums
  }

  push(val) {
    // Push value into main stack
    this.stack.push(val);

    // Push into minStack if empty or val <= current min
    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  pop() {
    // If popping element is current minimum, pop from minStack too
    if (this.stack[this.stack.length - 1] ===
        this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    // Top of minStack is always minimum
    return this.minStack[this.minStack.length - 1];
  }
}

// Test
const ms = new MinStack();
ms.push(-2);
ms.push(0);
ms.push(-3);
console.log(ms.getMin()); // -3
ms.pop();
console.log(ms.top());    // 0
console.log(ms.getMin()); // -2
