/* Min Stack | Medium
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Hinglish: Main stack ke saath minimum-so-far ka second stack rakho. Isse
 * getMin ko poora stack scan nahi karna padta.
 */
class MinStack {
  constructor() { this.values = []; this.minimums = []; }
  push(value) {
    this.values.push(value);
    const minimum = this.minimums.length === 0 ? value : Math.min(value, this.getMin());
    this.minimums.push(minimum);
  }
  pop() { this.minimums.pop(); return this.values.pop(); }
  top() { return this.values[this.values.length - 1]; }
  getMin() { return this.minimums[this.minimums.length - 1]; }
}

const stack = new MinStack();
stack.push(-2); stack.push(0); stack.push(-3);
console.log(stack.getMin()); // -3
stack.pop(); console.log(stack.top(), stack.getMin()); // 0, -2
// All operations: O(1), Space: O(n)
module.exports = { MinStack };
