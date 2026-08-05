# Stack & Queue - Basics

## Stack Kya Hai?
LIFO (Last In First Out) data structure. Jaise kitaabon ka stack.

```javascript
const stack = [];
stack.push(1);      // add top
stack.push(2);
stack.pop();        // remove top -> 2
stack[stack.length - 1]; // peek top -> 1
stack.length;       // size
```

## Queue Kya Hai?
FIFO (First In First Out) data structure. Jaise line mein khade hona.

```javascript
const queue = [];
queue.push(1);      // add back
queue.push(2);
queue.shift();      // remove front -> 1
queue[0];           // peek front -> 2
```

## Stack Use Cases
1. **Balanced brackets** - opening aaye to push, closing aaye to pop
2. **Next Greater Element** - monotonic stack
3. **Expression evaluation** - postfix/prefix
4. **DFS traversal** - recursion ka stack
5. **Parentheses matching**

## Queue Use Cases
1. **BFS traversal** - level by level
2. **Sliding window maximum** - deque
3. **Task scheduling**
4. **Process scheduling**

## Monotonic Stack (Most Important Pattern)

```javascript
// Next Greater Element
function nextGreater(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      const idx = stack.pop();
      result[idx] = nums[i];
    }
    stack.push(i);
  }
  return result;
}
```

**Hinglish:** Stack mein indices store karo jo increasing order mein hain.
Agar bada element aaye to chhote elements ke liye answer calculate ho gaya.

## Monotonic Decreasing Stack
```javascript
// Har element ke liye next smaller element
const stack = [];
for (let i = 0; i < nums.length; i++) {
  while (stack.length && nums[i] < nums[stack[stack.length - 1]]) {
    const idx = stack.pop();
    result[idx] = nums[i];
  }
  stack.push(i);
}
```

## JavaScript Deque (Double Ended Queue)

```javascript
// For sliding window maximum - use array as deque
const deque = []; // stores indices
deque.push(i);          // add to back
deque.pop();            // remove from back
deque.shift();          // remove from front
// Access front: deque[0]
// Access back: deque[deque.length - 1]
```

## Interview Tips
- "Balanced parentheses" = Stack
- "Next greater/smaller" = Monotonic Stack
- "Min stack" = Auxiliary stack
- "Evaluate expression" = Stack
- "BFS" = Queue
- Stack mein indices store karo values nahi (usually)
- Monotonic stack O(n) hota hai - har element sirf ek baar push/pop hota hai
