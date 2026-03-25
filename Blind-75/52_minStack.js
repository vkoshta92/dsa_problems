/**
 * ============================================================================
 * PROBLEM: Min Stack
 * ============================================================================
 * Design a stack that supports push, pop, top, and getMin in O(1) time.
 * 
 * ============================================================================
 * APPROACH: Two Stacks
 * ============================================================================
 * Logic:
 * 1. Main stack: stores all values
 * 2. Min stack: stores minimum values (monotonically decreasing)
 * 3. When pushing: add to min stack if value <= current min
 * 4. When popping: remove from min stack if value equals current min
 * 
 * Why Two Stacks?
 * - Main stack: normal stack operations
 * - Min stack: top always gives current minimum
 * - We only add to min stack when we have a new minimum
 * 
 * Example Operations:
 * push(-2): main = [-2], min = [-2]
 * push(0):  main = [-2, 0], min = [-2] (0 > -2, not added)
 * push(-3): main = [-2, 0, -3], min = [-2, -3]
 * getMin(): returns -3 (top of min stack)
 * pop():    main = [-2, 0], min = [-2] (-3 was min, removed)
 * top():    returns 0
 * getMin(): returns -2
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(1) for all operations
 * - push: O(1)
 * - pop: O(1)
 * - top: O(1)
 * - getMin: O(1)
 * 
 * SPACE COMPLEXITY: O(n)
 * - Worst case: min stack has same size as main stack
 * ============================================================================
 */

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
